var a = 10;
var b = 20;
var c = a + b;

// [
//     {
//         "type": "Keyword",
//         "value": "var"
//     },
//     {
//         "type": "Identifier",
//         "value": "a"
//     },
//     {
//         "type": "Punctuator",
//         "value": "="
//     },
//     {
//         "type": "Numeric",
//         "value": "10"
//     },
//     {
//         "type": "Punctuator",
//         "value": ";"
//     },
//     {
//         "type": "Keyword",
//         "value": "var"
//     },
//     {
//         "type": "Identifier",
//         "value": "b"
//     },
//     {
//         "type": "Punctuator",
//         "value": "="
//     },
//     {
//         "type": "Numeric",
//         "value": "20"
//     },
//     {
//         "type": "Punctuator",
//         "value": ";"
//     },
//     {
//         "type": "Keyword",
//         "value": "var"
//     },
//     {
//         "type": "Identifier",
//         "value": "c"
//     },
//     {
//         "type": "Punctuator",
//         "value": "="
//     },
//     {
//         "type": "Identifier",
//         "value": "a"
//     },
//     {
//         "type": "Punctuator",
//         "value": "+"
//     },
//     {
//         "type": "Identifier",
//         "value": "b"
//     },
//     {
//         "type": "Punctuator",
//         "value": ";"
//     }
// ]


// {
//     "type": "Program",
//     "body": [
//       {
//         "type": "VariableDeclaration",
//         "declarations": [
//           {
//             "type": "VariableDeclarator",
//             "id": {
//               "type": "Identifier",
//               "name": "a"
//             },
//             "init": {
//               "type": "Literal",
//               "value": 10,
//               "raw": "10"
//             }
//           }
//         ],
//         "kind": "var"
//       },
//       {
//         "type": "VariableDeclaration",
//         "declarations": [
//           {
//             "type": "VariableDeclarator",
//             "id": {
//               "type": "Identifier",
//               "name": "b"
//             },
//             "init": {
//               "type": "Literal",
//               "value": 20,
//               "raw": "20"
//             }
//           }
//         ],
//         "kind": "var"
//       },
//       {
//         "type": "VariableDeclaration",
//         "declarations": [
//           {
//             "type": "VariableDeclarator",
//             "id": {
//               "type": "Identifier",
//               "name": "c"
//             },
//             "init": {
//               "type": "BinaryExpression",
//               "operator": "+",
//               "left": {
//                 "type": "Identifier",
//                 "name": "a"
//               },
//               "right": {
//                 "type": "Identifier",
//                 "name": "b"
//               }
//             }
//           }
//         ],
//         "kind": "var"
//       }
//     ],
//     "sourceType": "script"
//   }



// StackCheck                   检查栈是否溢出
// LdaSmi[10]                   加载10到累加寄存器中
// StaGlobal [1], [6]           把累加寄存器的值保存到常量池索引 1 处
// LdaSmi[20]                   加载20到累加寄存器中
// StaGlobal [2], [8]           把累加寄存器的值保存到常量池索引2处
// LdaGlobal [1], [0]           从常量池加载索引 1 到累加寄存器
// Star r1                      把累加器的值10保存到目标寄存器中
// LdaGlobal [2], [2]           从常量池加载索引2的值20到累加寄存器
// Add r1, [10]                 把r1奇存器的值加到累加寄存器中， 此时累加寄存器值为30
// StaGlobal [3], [11]          把累加寄存器的值保存到常量池索引3处
// LdaUndefined                 把Undefined保存到累加寄存器中
// Return                       返回累加寄存器中的值
// Constant pool (size = 4)
// 000000D058122161: [FixedArray] in OldSpace
//     -map: 0x0034ceb82881 <Map>
//     -length: 4
//             0:  0x00d0581220e1 ‹FixedArray[12]>
//             1:  0x00d058122031 ‹String[1]: a›
//             2:  0x00d058122049 ‹String[1]: b›
//             3:  0x008a9a0068d9 <String[1]:c>




