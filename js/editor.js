const _0x2af8=['innerHTML','1sIbRRO','429386TLlOnn','400px','getItem','4292119ndJJSd','highlight-line','496163qyJvyg','scrollTo','1MJOoWF','10jZRytk','3jJdENh','clear','4777AGFbHd','code','top','editor','500px','fromTextArea','length','charCoords','classList','local','getScrollerElement','getAllMarks','696191QGdtHj','getElementById','default','1012607ZBicER','117178dkODcc','setValue','trim','markText','remove'];function _0x5791(_0x25430c,_0x38a2b0){_0x25430c=_0x25430c-0xd6;let _0x2af8fe=_0x2af8[_0x25430c];return _0x2af8fe;}(function(_0x2d386b,_0x20e73e){const _0x1624ce=_0x5791;while(!![]){try{const _0x3c1639=parseInt(_0x1624ce(0xf6))*-parseInt(_0x1624ce(0xe4))+-parseInt(_0x1624ce(0xf4))+-parseInt(_0x1624ce(0xe7))+-parseInt(_0x1624ce(0xd6))*parseInt(_0x1624ce(0xef))+parseInt(_0x1624ce(0xf7))*parseInt(_0x1624ce(0xd8))+-parseInt(_0x1624ce(0xe8))+parseInt(_0x1624ce(0xf2))*parseInt(_0x1624ce(0xee));if(_0x3c1639===_0x20e73e)break;else _0x2d386b['push'](_0x2d386b['shift']());}catch(_0x1311f8){_0x2d386b['push'](_0x2d386b['shift']());}}}(_0x2af8,0xb21f8));const initEditor=()=>{const _0x16ecc9=_0x5791;var _0x5deb14=document[_0x16ecc9(0xe5)](_0x16ecc9(0xdb));let _0x17baf5=CodeMirror[_0x16ecc9(0xdd)](_0x5deb14,{'lineNumbers':!0x0,'mode':'asm','theme':_0x16ecc9(0xe6),'indentUnit':0x4,'cursorHeight':0.85});_0x17baf5['setSize'](_0x16ecc9(0xf0),_0x16ecc9(0xdc));let _0x316e18=localStorage[_0x16ecc9(0xf1)](_0x16ecc9(0xd9));return null!=_0x316e18&&0x0!==_0x316e18[_0x16ecc9(0xea)]()[_0x16ecc9(0xde)]?_0x17baf5['setValue'](_0x316e18):_0x17baf5[_0x16ecc9(0xe9)](initEditorValue()),_0x17baf5;},initEditorValue=()=>{return'jump\x20@1024\x0a.memory\x201024\x0aset2\x20f1\x203\x0ajump\x20@__main\x0a\x0a@__main\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20halt\x0a@__main_end\x0a';},highLightLine=function(_0x37d629){const _0x3c6ae2=_0x5791,_0x1b221d=window[_0x3c6ae2(0xdb)];for(const _0x32d68d of _0x1b221d[_0x3c6ae2(0xe3)]())_0x32d68d[_0x3c6ae2(0xd7)]();_0x1b221d[_0x3c6ae2(0xeb)]({'line':_0x37d629-0x1,'ch':0x0},{'line':_0x37d629,'ch':0x0},{'className':_0x3c6ae2(0xf3)}),jumpToLine(_0x37d629);},updateBreakPointDom=function(){const _0x28bce8=_0x5791;var _0x86d898=_0x28bce8(0xf3);for(const _0x5adc65 of es('.CodeMirror-linenumber')){var _0xd18473=Number(_0x5adc65[_0x28bce8(0xed)]);_0x5adc65[_0x28bce8(0xe0)][_0x28bce8(0xec)](_0x86d898),Config['breakPoint']['includes'](_0xd18473)&&_0x5adc65['classList']['add'](_0x86d898);}},jumpToLine=function(_0x110868){const _0x3627e9=_0x5791;let _0x448a3a=window[_0x3627e9(0xdb)];var _0x4effcd=_0x448a3a[_0x3627e9(0xdf)]({'line':_0x110868,'ch':0x0},_0x3627e9(0xe1))[_0x3627e9(0xda)],_0x110868=_0x448a3a[_0x3627e9(0xe2)]()['offsetHeight']/0x2;_0x448a3a[_0x3627e9(0xf5)](null,_0x4effcd-_0x110868-0x5);};