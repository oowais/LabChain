[{"id":"1455c4cd.44b44b","type":"tab","label":"Labchain Node Dashboard","disabled":false,"info":""},{"id":"ede925d9.a2a548","type":"ui_base","theme":{"name":"theme-dark","lightTheme":{"default":"#0094CE","baseColor":"#0094CE","baseFont":"-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif","edited":true,"reset":false},"darkTheme":{"default":"#097479","baseColor":"#097479","baseFont":"-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif","edited":true,"reset":false},"customTheme":{"name":"Untitled Theme 1","default":"#4B7930","baseColor":"#4B7930","baseFont":"-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif"},"themeState":{"base-color":{"default":"#097479","value":"#097479","edited":false},"page-titlebar-backgroundColor":{"value":"#097479","edited":false},"page-backgroundColor":{"value":"#111111","edited":false},"page-sidebar-backgroundColor":{"value":"#000000","edited":false},"group-textColor":{"value":"#0eb8c0","edited":false},"group-borderColor":{"value":"#555555","edited":false},"group-backgroundColor":{"value":"#333333","edited":false},"widget-textColor":{"value":"#eeeeee","edited":false},"widget-backgroundColor":{"value":"#097479","edited":false},"widget-borderColor":{"value":"#333333","edited":false},"base-font":{"value":"-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif"}}},"site":{"name":"Blockchain Node Dashboard","hideToolbar":"false","allowSwipe":"false","allowTempTheme":"true","dateFormat":"DD/MM/YYYY","sizes":{"sx":48,"sy":48,"gx":6,"gy":6,"cx":6,"cy":6,"px":0,"py":0}}},{"id":"c790a1ab.c1e8e","type":"ui_tab","z":"","name":"Blockchain Node Dashboard","icon":"dashboard"},{"id":"227d5003.1e4e7","type":"ui_tab","z":"","name":"Blockchain Node Dashboard","icon":"dashboard"},{"id":"c815d8b.a867f28","type":"ui_group","z":"","name":"Mining Status","tab":"227d5003.1e4e7","order":3,"disp":true,"width":"10","collapse":false},{"id":"a695a371.a37ad","type":"mqtt-broker","z":"","name":"Node Broker","broker":"localhost","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"0","cleansession":true,"birthTopic":"mine","birthQos":"0","birthPayload":"1","closeTopic":"","closeQos":"0","closePayload":"","willTopic":"","willQos":"0","willPayload":""},{"id":"9e3f329.5c362d","type":"ui_group","z":"","name":"Labchain Status","tab":"227d5003.1e4e7","order":2,"disp":true,"width":"9","collapse":false},{"id":"b6cb3765.93ff58","type":"ui_group","z":"","name":"Connected Nodes","tab":"227d5003.1e4e7","order":1,"disp":true,"width":"10","collapse":false},{"id":"abaa6538.a25728","type":"ui_group","z":"","name":"Block Explorer","tab":"227d5003.1e4e7","order":4,"disp":true,"width":"9","collapse":false},{"id":"f2d8ee81.1f675","type":"ui_switch","z":"1455c4cd.44b44b","name":"","label":"Mine","group":"c815d8b.a867f28","order":1,"width":0,"height":0,"passthru":true,"decouple":"false","topic":"","style":"","onvalue":"true","onvalueType":"bool","onicon":"","oncolor":"","offvalue":"false","offvalueType":"bool","officon":"","offcolor":"","x":643,"y":501,"wires":[["ce52869a.2e6ca8"]]},{"id":"ce52869a.2e6ca8","type":"mqtt out","z":"1455c4cd.44b44b","name":"mine flag","topic":"mine","qos":"","retain":"","broker":"a695a371.a37ad","x":963,"y":501,"wires":[]},{"id":"99c48b83.0cc218","type":"mqtt in","z":"1455c4cd.44b44b","name":"LC Status","topic":"bc_status","qos":"0","broker":"a695a371.a37ad","x":74,"y":168,"wires":[["b4eb4ee5.487e9"]]},{"id":"d6eec850.ba3db8","type":"ui_text","z":"1455c4cd.44b44b","group":"9e3f329.5c362d","order":0,"width":0,"height":0,"name":"Labchain Length","label":"Labchain Length","format":"{{msg.payload}}","layout":"row-spread","x":681,"y":49,"wires":[]},{"id":"865324c8.9fa0f8","type":"ui_text","z":"1455c4cd.44b44b","group":"9e3f329.5c362d","order":0,"width":0,"height":0,"name":"Number of Blocks","label":"Number of Blocks","format":"{{msg.payload}}","layout":"row-spread","x":681,"y":95,"wires":[]},{"id":"c9b26436.3e2ba8","type":"ui_text","z":"1455c4cd.44b44b","group":"9e3f329.5c362d","order":0,"width":0,"height":0,"name":"Number of Transactions","label":"Number of Transactions","format":"{{msg.payload}}","layout":"row-spread","x":701,"y":159,"wires":[]},{"id":"de3aa134.cb96b","type":"ui_text","z":"1455c4cd.44b44b","group":"c815d8b.a867f28","order":3,"width":0,"height":0,"name":"Minimum Mining Time","label":"Minimum Mining Time","format":"{{msg.payload}}","layout":"row-spread","x":689,"y":334,"wires":[]},{"id":"95a07d02.3688f","type":"ui_text","z":"1455c4cd.44b44b","group":"c815d8b.a867f28","order":4,"width":0,"height":0,"name":"Maximum Mining Time","label":"Maximum Mining Time","format":"{{msg.payload}}","layout":"row-spread","x":689,"y":384,"wires":[]},{"id":"942a3452.73b9a8","type":"ui_text","z":"1455c4cd.44b44b","group":"c815d8b.a867f28","order":5,"width":0,"height":0,"name":"Average Mining Time","label":"Average Mining Time","format":"{{msg.payload}}","layout":"row-spread","x":688,"y":435,"wires":[]},{"id":"517f49a0.8062b8","type":"ui_chart","z":"1455c4cd.44b44b","name":"Connected Nodes","group":"b6cb3765.93ff58","order":0,"width":0,"height":0,"label":"Number of Nodes","chartType":"line","legend":"false","xformat":"HH:mm:ss","interpolate":"linear","nodata":"No connected nodes yet.","dot":true,"ymin":"","ymax":"","removeOlder":"0","removeOlderPoints":"6","removeOlderUnit":"1","cutout":0,"useOneColor":false,"colors":["#1f77b4","#aec7e8","#ff7f0e","#2ca02c","#98df8a","#d62728","#ff9896","#9467bd","#c5b0d5"],"useOldStyle":false,"x":683,"y":277,"wires":[[],[]]},{"id":"7e75637e.8c461c","type":"ui_gauge","z":"1455c4cd.44b44b","name":"Current Difficulty","group":"c815d8b.a867f28","order":2,"width":0,"height":0,"gtype":"gage","title":"Current Difficulty","label":"","format":"{{value}}","min":0,"max":"20","colors":["#00b500","#e6e600","#ca3838"],"seg1":"","seg2":"","x":674,"y":221,"wires":[]},{"id":"b4eb4ee5.487e9","type":"function","z":"1455c4cd.44b44b","name":"Status Splitter","func":"var outputMsgs = [];\nvar msgs = msg.payload.split(\",\");\nfor (var m in msgs) {\n    outputMsgs.push({payload:msgs[m]});\n}\nreturn outputMsgs;","outputs":9,"noerr":0,"x":281,"y":168,"wires":[["d6eec850.ba3db8"],["865324c8.9fa0f8"],["c9b26436.3e2ba8"],["7e75637e.8c461c"],["517f49a0.8062b8"],["de3aa134.cb96b"],["95a07d02.3688f"],["942a3452.73b9a8"],["f2d8ee81.1f675"]],"outputLabels":["msgs","","","","","","","",""]},{"id":"3a846fad.cb1f8","type":"ui_form","z":"1455c4cd.44b44b","name":"Block Number","label":"","group":"abaa6538.a25728","order":0,"width":0,"height":0,"options":[{"label":"Test","value":"Block Number","type":"number","required":true}],"formValue":{"Block Number":""},"payload":"","topic":"","x":181,"y":618,"wires":[["82572cff.931eb"]]},{"id":"82572cff.931eb","type":"debug","z":"1455c4cd.44b44b","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"payload['Block Number']","x":412,"y":617,"wires":[]}]