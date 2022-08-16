// node --allow-natives-syntax .\navtive.js
let p = {name:"11"};
%DebugPrint(p);
p.name = "c";
%DebugPrint(p);
p.a = "c";
%DebugPrint(p);




let D = {name:"11"};
%DebugPrint(D);



// 1、因为第一次执行 p.name  所以他的 地址没有变化，隐藏类也没有变化，但是经过添加新的属性后隐藏类就有变化
// 2、D 与 p 共用同一个隐藏类，隐藏类会加速对象访问
// 0x03e6a3c6bac1 <Object map = 000001D129ED5451>
// 0x03e6a3c6bac1 <Object map = 000001D129ED5451>
// 0x03e6a3c6bac1 <Object map = 000001D129ED54A9>
// 0x03e6a3c6bb91 <Object map = 000001D129ED5451>