#!/usr/bin/env python
from __future__ import with_statement, print_function
import os
import re
import shutil
import subprocess
import sys
import tempfile

"""
Forked https://github.com/cbrueffer/pep8-git-hook based on https://gist.github.com/810399
"""

# don't fill in both of these
select_codes = []
ignore_codes = ["E121", "E122", "E123", "E124", "E125", "E126", "E127", "E128",
                "E129", "E131", "E501"]
# Add things like "--max-line-length=120" below
overrides = []


def system(*args, **kwargs):
    kwargs.setdefault('stdout', subprocess.PIPE)
    proc = subprocess.Popen(args, **kwargs)
    out, err = proc.communicate()
    return out


def main():
    modified = re.compile('^[AM]+\s+(?P<name>.*\.py$)', re.MULTILINE)
    files = system('git', 'status', '--porcelain').decode("utf-8")
    files = modified.findall(files)

    tempdir = tempfile.mkdtemp()
    for name in files:
        filename = os.path.join(tempdir, name)
        filepath = os.path.dirname(filename)

        if not os.path.exists(filepath):
            os.makedirs(filepath)
        with open(filename, 'w') as f:
            system('git', 'show', ':' + name, stdout=f)

    args = ['pycodestyle']
    if select_codes and ignore_codes:
        print(u'Error: select and ignore codes are mutually exclusive')
        sys.exit(1)
    elif select_codes:
        args.extend(('--select', ','.join(select_codes)))
    elif ignore_codes:
        args.extend(('--ignore', ','.join(ignore_codes)))
    args.extend(overrides)
    args.append('.')
    output = system(*args, cwd=tempdir)
    shutil.rmtree(tempdir)
    if output:
        print(u'PEP8 style violations have been detected.  Please fix them\n'
              'or force the commit with "git commit --no-verify".\n')
        print(output.decode("utf-8"),)
        sys.exit(1)


if __name__ == '__main__':
    main()
