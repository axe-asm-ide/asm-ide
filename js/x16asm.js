var _0x25bc=['1HTzPwF','9859kCWfXW','3cVGvds','1658755VEVamZ','set2','.memory\x20extend','split','\x20:\x20','push','string','slice','length','add','multiply2','.memory','save_from_register','and','515268WEKEuq','trim','shift_right','lineNumbers','load_from_register','add2','load','save','jump_if_equal','subtract2','load_from_register2','20143BoKHqI','save_from_register2','includes','257078TxYYpv','97741clImsM','37YbRXRE','indexOf','number','halt','168638TtRtIc','load2','jump','19xLdEqi','compare','splice','语法错误\x20编译失败'];function _0x5736(_0x14e3f7,_0x5d0874){_0x14e3f7=_0x14e3f7-0x1bb;var _0x25bc6c=_0x25bc[_0x14e3f7];return _0x25bc6c;}(function(_0x471933,_0x4b89df){var _0x142f1b=_0x5736;while(!![]){try{var _0x1de860=-parseInt(_0x142f1b(0x1c4))*parseInt(_0x142f1b(0x1bf))+-parseInt(_0x142f1b(0x1c8))+parseInt(_0x142f1b(0x1cf))*parseInt(_0x142f1b(0x1c3))+-parseInt(_0x142f1b(0x1cb))*parseInt(_0x142f1b(0x1d0))+-parseInt(_0x142f1b(0x1c2))*parseInt(_0x142f1b(0x1d1))+parseInt(_0x142f1b(0x1e0))+parseInt(_0x142f1b(0x1d2));if(_0x1de860===_0x4b89df)break;else _0x471933['push'](_0x471933['shift']());}catch(_0x1e6fc3){_0x471933['push'](_0x471933['shift']());}}}(_0x25bc,0x617b0));const removeCommentsWithLineNumber=function(_0x10700b){var _0xc917f0=_0x5736;const _0x3660f1=_0x10700b[_0xc917f0(0x1d5)]('\x0a'),_0x262662={},_0x47d29c=[],_0x4208f9=[];for(let _0x74de64=0x0;_0x74de64<_0x3660f1['length'];_0x74de64++){let _0x6af062=_0x3660f1[_0x74de64][_0xc917f0(0x1e1)]();var _0x286151;_0x6af062[_0xc917f0(0x1c1)](';')&&(_0x286151=_0x6af062[_0xc917f0(0x1c5)](';'),_0x6af062=_0x6af062['slice'](0x0,_0x286151)[_0xc917f0(0x1e1)]()),0x0<_0x6af062[_0xc917f0(0x1da)]&&(_0x47d29c['push'](_0x6af062),_0x4208f9['push'](_0x74de64+0x1));}return _0x262662['lines']=_0x47d29c,_0x262662[_0xc917f0(0x1e3)]=_0x4208f9,_0x262662;},asm_log=function(_0x50ea9f,_0x409166){var _0x4725d4=_0x5736;let _0x15c9d2='';for(let _0x5af85e=0x0;_0x5af85e<_0x50ea9f['length'];_0x5af85e++){var _0x20d0ee=_0x50ea9f[_0x5af85e],_0x4aaeeb=_0x409166[_0x5af85e];_0x15c9d2+=_0x20d0ee+_0x4725d4(0x1d6)+_0x4aaeeb+'\x0a';}return _0x15c9d2;},machineCodeWithLineNumber=function(_0x441815){var _0x57a1bc=_0x5736;let _0x42cad4=[];var _0x590fb2=registerMapper();let _0x3fe489=0x0,_0x3832db={};var _0x233b4b=(_0x441815=removeCommentsWithLineNumber(_0x441815))['lines'],_0x2f3e7d=_0x441815[_0x57a1bc(0x1e3)];let _0x1cf0d8=[];for(let _0x4e5d3f=0x0;_0x4e5d3f<_0x233b4b['length'];_0x4e5d3f+=0x1){let _0xf3232f=_0x233b4b[_0x4e5d3f];var _0x3ece0e=_0x2f3e7d[_0x4e5d3f],_0xaf70b9=_0xf3232f[_0x57a1bc(0x1d5)]('\x20');let _0x3a8a6e=_0xaf70b9[0x0];if('set'===_0x3a8a6e){_0x3fe489+=0x3;var _0x28c071=_0x590fb2[_0xaf70b9[0x1]],_0x1725bd=Number(_0xaf70b9[0x2]),_0x1725bd=low8(_0x1725bd);_0x42cad4['push'](0x0),_0x42cad4[_0x57a1bc(0x1d7)](_0x28c071),_0x42cad4[_0x57a1bc(0x1d7)](_0x1725bd),_0x1cf0d8=arrayAdd(_0x1cf0d8,_0x3ece0e,0x3);}else{if(_0x57a1bc(0x1d3)===_0x3a8a6e){_0x3fe489+=0x4;var _0x28c071=_0x590fb2[_0xaf70b9[0x1]],_0x166907=Number(_0xaf70b9[0x2]),_0x1725bd=low8(_0x166907),_0x166907=high8(_0x166907);_0x42cad4['push'](0x8),_0x42cad4[_0x57a1bc(0x1d7)](_0x28c071),_0x42cad4[_0x57a1bc(0x1d7)](_0x1725bd),_0x42cad4[_0x57a1bc(0x1d7)](_0x166907),_0x1cf0d8=arrayAdd(_0x1cf0d8,_0x3ece0e,0x4);}else{if(_0x57a1bc(0x1e6)===_0x3a8a6e){_0x3fe489+=0x4;var _0x5d3393=_0x590fb2[_0xaf70b9[0x2]];_0x42cad4[_0x57a1bc(0x1d7)](0x1),_0x166907=memoryAddress(_0xaf70b9[0x1]),(_0x57a1bc(0x1d8)==typeof _0x166907?_0x42cad4['push'](_0x166907):(_0x42cad4[_0x57a1bc(0x1d7)](low8(_0x166907)),_0x42cad4[_0x57a1bc(0x1d7)](high8(_0x166907))),_0x42cad4['push'](_0x5d3393),_0x1cf0d8=arrayAdd(_0x1cf0d8,_0x3ece0e,0x4));}else{if(_0x57a1bc(0x1c9)===_0x3a8a6e){_0x3fe489+=0x4;var _0x5d3393=memoryAddress(_0xaf70b9[0x1]),_0x5cc7ea=_0x590fb2[_0xaf70b9[0x2]];_0x42cad4['push'](0x9),_0x42cad4['push'](low8(_0x5d3393)),_0x42cad4['push'](high8(_0x5d3393)),_0x42cad4[_0x57a1bc(0x1d7)](_0x5cc7ea),_0x1cf0d8=arrayAdd(_0x1cf0d8,_0x3ece0e,0x4);}else{if(_0x57a1bc(0x1db)===_0x3a8a6e){_0x3fe489+=0x4;var _0x5cc7ea=_0x590fb2[_0xaf70b9[0x1]],_0x1cf5ea=_0x590fb2[_0xaf70b9[0x2]],_0x642d4f=_0x590fb2[_0xaf70b9[0x3]];_0x42cad4[_0x57a1bc(0x1d7)](0x2),_0x42cad4[_0x57a1bc(0x1d7)](_0x5cc7ea),_0x42cad4[_0x57a1bc(0x1d7)](_0x1cf5ea),_0x42cad4['push'](_0x642d4f),_0x1cf0d8=arrayAdd(_0x1cf0d8,_0x3ece0e,0x4);}else{if(_0x57a1bc(0x1e5)===_0x3a8a6e){_0x3fe489+=0x4;var _0x1cf5ea=_0x590fb2[_0xaf70b9[0x1]],_0x642d4f=_0x590fb2[_0xaf70b9[0x2]],_0x492cdc=_0x590fb2[_0xaf70b9[0x3]];_0x42cad4[_0x57a1bc(0x1d7)](0xa),_0x42cad4[_0x57a1bc(0x1d7)](_0x1cf5ea),_0x42cad4['push'](_0x642d4f),_0x42cad4[_0x57a1bc(0x1d7)](_0x492cdc),_0x1cf0d8=arrayAdd(_0x1cf0d8,_0x3ece0e,0x4);}else{if(_0x57a1bc(0x1bb)===_0x3a8a6e){_0x3fe489+=0x4;var _0x492cdc=_0x590fb2[_0xaf70b9[0x1]],_0x13b746=memoryAddress(_0xaf70b9[0x2]);_0x42cad4[_0x57a1bc(0x1d7)](0x3),_0x42cad4['push'](_0x492cdc),_0x42cad4[_0x57a1bc(0x1d7)](low8(_0x13b746)),_0x42cad4[_0x57a1bc(0x1d7)](high8(_0x13b746)),_0x1cf0d8=arrayAdd(_0x1cf0d8,_0x3ece0e,0x4);}else{if('save2'===_0x3a8a6e){_0x3fe489+=0x4;var _0x1a781d=_0x590fb2[_0xaf70b9[0x1]],_0x177630=memoryAddress(_0xaf70b9[0x2]);_0x42cad4[_0x57a1bc(0x1d7)](0xb),_0x42cad4[_0x57a1bc(0x1d7)](_0x1a781d),_0x42cad4[_0x57a1bc(0x1d7)](low8(_0x177630)),_0x42cad4[_0x57a1bc(0x1d7)](high8(_0x177630)),_0x1cf0d8=arrayAdd(_0x1cf0d8,_0x3ece0e,0x4);}else{if(_0x57a1bc(0x1bd)===_0x3a8a6e)_0x3fe489+=0x4,(_0x13b746=_0x590fb2[_0xaf70b9[0x1]],_0x1a781d=_0x590fb2[_0xaf70b9[0x2]],_0x177630=_0x590fb2[_0xaf70b9[0x3]]),(_0x42cad4[_0x57a1bc(0x1d7)](0xc),_0x42cad4[_0x57a1bc(0x1d7)](_0x13b746),_0x42cad4[_0x57a1bc(0x1d7)](_0x1a781d),_0x42cad4[_0x57a1bc(0x1d7)](_0x177630),_0x1cf0d8=arrayAdd(_0x1cf0d8,_0x3ece0e,0x4));else{if(_0x57a1bc(0x1e4)===_0x3a8a6e){_0x3fe489+=0x3;var _0x55935a=_0x590fb2[_0xaf70b9[0x1]],_0x3d1283=_0x590fb2[_0xaf70b9[0x2]];_0x42cad4[_0x57a1bc(0x1d7)](0xd),_0x42cad4['push'](_0x55935a),_0x42cad4['push'](_0x3d1283),_0x1cf0d8=arrayAdd(_0x1cf0d8,_0x3ece0e,0x3);}else{if(_0x57a1bc(0x1be)===_0x3a8a6e)_0x3fe489+=0x3,(_0x55935a=_0x590fb2[_0xaf70b9[0x1]],_0x3d1283=_0x590fb2[_0xaf70b9[0x2]]),(_0x42cad4['push'](0xe),_0x42cad4['push'](_0x55935a),_0x42cad4[_0x57a1bc(0x1d7)](_0x3d1283),_0x1cf0d8=arrayAdd(_0x1cf0d8,_0x3ece0e,0x3));else{if(_0x57a1bc(0x1c0)===_0x3a8a6e){_0x3fe489+=0x3;var _0x223279=_0x590fb2[_0xaf70b9[0x1]],_0x2357dc=_0x590fb2[_0xaf70b9[0x2]];_0x42cad4[_0x57a1bc(0x1d7)](0xf),_0x42cad4[_0x57a1bc(0x1d7)](_0x223279),_0x42cad4[_0x57a1bc(0x1d7)](_0x2357dc),_0x1cf0d8=arrayAdd(_0x1cf0d8,_0x3ece0e,0x3);}else{if(_0x57a1bc(0x1de)===_0x3a8a6e)_0x3fe489+=0x3,(_0x223279=_0x590fb2[_0xaf70b9[0x1]],_0x2357dc=_0x590fb2[_0xaf70b9[0x2]]),(_0x42cad4[_0x57a1bc(0x1d7)](0x7),_0x42cad4[_0x57a1bc(0x1d7)](_0x223279),_0x42cad4[_0x57a1bc(0x1d7)](_0x2357dc),_0x1cf0d8=arrayAdd(_0x1cf0d8,_0x3ece0e,0x3));else{if('jump_from_register'===_0x3a8a6e){_0x3fe489+=0x2;var _0x4ed4c3=_0x590fb2[_0xaf70b9[0x1]];_0x42cad4[_0x57a1bc(0x1d7)](0x10),_0x42cad4[_0x57a1bc(0x1d7)](_0x4ed4c3),_0x1cf0d8=arrayAdd(_0x1cf0d8,_0x3ece0e,0x2);}else{if(_0x57a1bc(0x1ca)===_0x3a8a6e){_0x3fe489+=0x3;var _0x3b8a34=memoryAddress(_0xaf70b9[0x1]);_0x42cad4[_0x57a1bc(0x1d7)](0x6),_0x57a1bc(0x1c6)==typeof _0x3b8a34?(_0x42cad4[_0x57a1bc(0x1d7)](low8(_0x3b8a34)),_0x42cad4[_0x57a1bc(0x1d7)](high8(_0x3b8a34))):_0x42cad4[_0x57a1bc(0x1d7)](_0x3b8a34),_0x1cf0d8=arrayAdd(_0x1cf0d8,_0x3ece0e,0x3);}else{if(_0x57a1bc(0x1cc)===_0x3a8a6e)_0x3fe489+=0x3,(_0x4ed4c3=_0x590fb2[_0xaf70b9[0x1]],_0x3b8a34=_0x590fb2[_0xaf70b9[0x2]]),(_0x42cad4[_0x57a1bc(0x1d7)](0x4),_0x42cad4[_0x57a1bc(0x1d7)](_0x4ed4c3),_0x42cad4['push'](_0x3b8a34),_0x1cf0d8=arrayAdd(_0x1cf0d8,_0x3ece0e,0x3));else{if('jump_if_less'===_0x3a8a6e){_0x3fe489+=0x3;var _0x431318=memoryAddress(_0xaf70b9[0x1]);_0x42cad4['push'](0x5),'number'==typeof _0x431318?(_0x42cad4[_0x57a1bc(0x1d7)](low8(_0x431318)),_0x42cad4[_0x57a1bc(0x1d7)](high8(_0x431318))):_0x42cad4[_0x57a1bc(0x1d7)](_0x431318),_0x1cf0d8=arrayAdd(_0x1cf0d8,_0x3ece0e,0x3);}else{if(_0x57a1bc(0x1dd)===_0x3a8a6e){var _0x49872d=Number(_0xaf70b9[0x1]);_0x3fe489=_0x49872d;let _0x45d1f5=0x0;for(const _0x3fbbde of _0x42cad4)'string'==typeof _0x3fbbde?_0x45d1f5+=0x2:_0x45d1f5+=0x1;var _0x1732db=_0x49872d-_0x45d1f5;_0x42cad4=arrayExtend(_0x42cad4,zeroArray(_0x1732db)),log(_0x57a1bc(0x1d4),_0x42cad4[_0x57a1bc(0x1da)],_0x1732db),_0x1cf0d8=arrayAdd(_0x1cf0d8,_0x3ece0e,_0x1732db);}else{if('@'===_0x3a8a6e[0x0])_0x3832db[_0x3a8a6e[_0x57a1bc(0x1d9)](0x1)]=_0x3fe489;else{if(_0x57a1bc(0x1c7)===_0x3a8a6e)_0x3fe489+=0x1,_0x42cad4[_0x57a1bc(0x1d7)](0xff),_0x1cf0d8=arrayAdd(_0x1cf0d8,_0x3ece0e,0x1);else{if(_0x57a1bc(0x1e2)===_0x3a8a6e)_0x3fe489+=0x4,(_0x431318=_0x590fb2[_0xaf70b9[0x1]],_0x49872d=_0x590fb2[_0xaf70b9[0x2]],_0x1732db=_0x590fb2[_0xaf70b9[0x3]]),(_0x42cad4['push'](0x11),_0x42cad4[_0x57a1bc(0x1d7)](_0x431318),_0x42cad4[_0x57a1bc(0x1d7)](_0x49872d),_0x42cad4['push'](_0x1732db),_0x1cf0d8=arrayAdd(_0x1cf0d8,_0x3ece0e,0x4));else{if(_0x57a1bc(0x1df)===_0x3a8a6e){_0x3fe489+=0x4;var _0xdebb03=_0x590fb2[_0xaf70b9[0x1]],_0x1085c5=_0x590fb2[_0xaf70b9[0x2]],_0x1f58a4=_0x590fb2[_0xaf70b9[0x3]];_0x42cad4[_0x57a1bc(0x1d7)](0x13),_0x42cad4['push'](_0xdebb03),_0x42cad4[_0x57a1bc(0x1d7)](_0x1085c5),_0x42cad4[_0x57a1bc(0x1d7)](_0x1f58a4),_0x1cf0d8=arrayAdd(_0x1cf0d8,_0x3ece0e,0x4);}else{if(_0x57a1bc(0x1dc)===_0x3a8a6e)_0x3fe489+=0x4,(_0xdebb03=_0x590fb2[_0xaf70b9[0x1]],_0x1085c5=_0x590fb2[_0xaf70b9[0x2]],_0x1f58a4=_0x590fb2[_0xaf70b9[0x3]]),(_0x42cad4[_0x57a1bc(0x1d7)](0x14),_0x42cad4[_0x57a1bc(0x1d7)](_0xdebb03),_0x42cad4[_0x57a1bc(0x1d7)](_0x1085c5),_0x42cad4[_0x57a1bc(0x1d7)](_0x1f58a4),_0x1cf0d8=arrayAdd(_0x1cf0d8,_0x3ece0e,0x4));else{if(_0x57a1bc(0x1bc)!==_0x3a8a6e)return alert(_0x57a1bc(0x1ce)),null;_0x3fe489+=0x3,_0xaf70b9=memoryAddress(_0xaf70b9[0x1]),(_0x42cad4['push'](0x15),_0x57a1bc(0x1c6)==typeof _0xaf70b9?(_0x42cad4[_0x57a1bc(0x1d7)](low8(_0xaf70b9)),_0x42cad4['push'](high8(_0xaf70b9))):_0x42cad4[_0x57a1bc(0x1d7)](_0xaf70b9),_0x1cf0d8=arrayAdd(_0x1cf0d8,_0x3ece0e,0x3));}}}}}}}}}}}}}}}}}}}}}}}}for(let _0x105064=0x0;_0x105064<_0x42cad4[_0x57a1bc(0x1da)];_0x105064++){var _0x31fad5=_0x42cad4[_0x105064];_0x57a1bc(0x1d8)==typeof _0x31fad5&&(_0x31fad5=_0x3832db[_0x31fad5],_0x42cad4[_0x105064]=low8(_0x31fad5),_0x42cad4[_0x57a1bc(0x1cd)](_0x105064+0x1,0x0,high8(_0x31fad5)));}return{'memory':_0x42cad4,'lineNumbers':_0x1cf0d8};};