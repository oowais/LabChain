import configparser
import sys
import threading
import time
import uuid

from labchain.txpool import TxPool
from mock.cryptoHelper import CryptoHelper
from mock.consensus import Consensus
from mock.networkInterface import NetworkInterface
from labchain.blockchain import BlockChain

NODE_CONFIG_FILE = 'resources/node_configuration.ini'


def schedule_orphans_killing(interval, blockchain_obj):
    while True:
        blockchain_obj.prune_orphans()
        time.sleep(interval)

def block_mine_timer(mine_freq, block_transactions_size, blockchain,
                     txpool, consensus):
    """ Thread which periodically checks to mine
    Note: to start mining based on number of transactions,
    there needs to be either a discussion on few approaches

        Args:
            mine_freq (integer): periodicity of mining in seconds
            block_transactions_size (integer): max transactions in a block
            blockchain_obj:
            txpool_obj:
            consensus_obj:

    """
    next_call = time.time()
    while True:
        # check the last call of mine from consensus component
        if consensus.last_mine_time_sec >= mine_freq:
            transactions = txpool.get_transcations(block_transactions_size)
            # should the blockchain,py create block or Block,py create block
            block = blockchain.create_block(transactions)
            consensus.mine(block)
            # instead of returning nonce,
            # nonce should be added in the block object
            # have to check if other node already created a block
            blockchain.add_block(True, block)

        next_call += (mine_freq - consensus.last_mine_time_sec)
        time.sleep(next_call - time.time())


def on_new_transaction_received():
    """When a new block is received, call add transaction method in txpool"""
    pass


def on_new_block_received():
    """When a new block is received, call add block method in blockchain"""
    pass


def on_new_block_created():
    """When a new block is mined, send the block to other nodes via network"""
    pass


def initialize_node():
    """ Initialize every componenent of the node"""

    try:
        config = configparser.ConfigParser()
        config.read(NODE_CONFIG_FILE)
    except Exception:
        print('Node Configuration file is corrupt or non-existent, \
              exiting node startup.... \n')
        sys.exit(0)

    try:
        mine_freq = config.getint(section='MINING',
                                  option='MINE_SCHEDULING_FREQUENCY_SEC')
        num_of_transactions = config.getint(section='MINING',
                                            option='BLOCK_TRANSACTION_SIZE')
        tolerance_value = config.getint(section='BLOCK_CHAIN',
                                        option='TOLERANCE_LEVEL')
        pruning_interval = config.getint(section='BLOCK_CHAIN',
                                         option='TIME_TO_PRUNE')
    except Exception:
        print("Node configuration file is corrupt, exiting node startup \
              .... \n")
        sys.exit(0)

    consensus = Consensus()
    crypto_helper = CryptoHelper()
    networkInterface = NetworkInterface()
    txpool = TxPool(crypto_helper_obj=crypto_helper)

    # Generate the node ID using host ID
    node_uuid = str(uuid.uuid1())
    node_id = node_uuid[node_uuid.find('-') + 1:]

    blockchain = BlockChain(node_id=node_id, tolerance_value=tolerance_value,
                            pruning_interval=pruning_interval, consensus_obj=consensus,
                            txpool_obj=txpool, crypto_helper_obj=crypto_helper)

    # start the scheduler for mining
    mine_thread = threading.Thread(target=block_mine_timer,
                                   kwargs=dict(mine_freq=mine_freq,
                                               num_of_transactions=num_of_transactions,
                                               blockchain_obj=blockchain,
                                               txn_pool_obj=txpool,
                                               consensus_obj=consensus))
    orphan_killer = threading.Thread(target=schedule_orphans_killing,
                                     kwargs=dict(interval=pruning_interval,
                                                 blockchain_obj=blockchain))
    mine_thread.start()
    orphan_killer.start()


if __name__ == '__main__':
    initialize_node()
