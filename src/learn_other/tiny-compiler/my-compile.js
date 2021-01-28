
// '(add 2 (subtract 4 2))' -> tokens
function tokenizer(input) {
    let res = [], i = 0;
    while (i < input.length) {
        if (input[i] == '(') {
            res.push({
                type: 'paren',  
                value: '('        
            })
            i++;
            continue;
        }
        if (input[i] == ')') {
            res.push({
                type: 'paren',  
                value: ')'        
            })
            i++;
            continue;
        }

        let kongge = /\s/;
        if (kongge.test(input[i])) {
            i++;
            continue;
        }

        let shuzi = /[0-9]/;
        if (shuzi.test(input[i])) {
            let value = ''
            while ( shuzi.test(input[i])) {
                value += input[i];
                i++
            }
            res.push({
                type: 'number', 
                value 
            });
            continue;
        }

        let zifuchuan = /[a-z]/i;
        if(zifuchuan.test(input[i])) {
            let value = '';
            while(zifuchuan.test(input[i])) {
                value += input[i];
                i++;
            }
            res.push({
                type:'name',
                value
            });
            continue;
        }

        if(input[i] = '"') {
            let value = '';
            while( input[i] !== '"') {
                value += input[i];
                i++;
            };
            i++;
            res.push({
                type:'string',
                value
            });
            continue;
        }

        throw new TypeError('I dont know what this character is: ' + input[i]);
    }
    return res;
}

// 测试1 '(add 2 (subtract 4 2))' -> tokens
const input  = '(add 2 (subtract 4 2))';
console.log(tokenizer(input));

// tokens  --> ast
function parser(tokens) {
    let i = 0;
    function walk() {
        let t = tokens[i];
        if(t.type == 'number') {
            i++;
            return ({
                type: 'NumberLiteral',
                value: t.value
            });
        }
        if (t.type === 'string') {
            i++;
            return {
                type: 'StringLiteral',
                value: t.value,
            };
        }
        if (t.type === 'paren' && t.value ==='(') {
            i++;
            // ( 跳过到 add元素
            t = tokens[i];
            let node = {
                type: 'CallExpression',
                name: t.value,
                params: [],
            };
            // ( add 下一个元素
            t = tokens[++i];
            while (t.type !=='paren' || (t.type ==='paren' && t.value!==')')) {
                node.params.push(walk());
                t = tokens[i]
            }
            // ) 跳过
            i++;
            return node;
        }

        throw new TypeError(t.type);
        
    }
    let ast = {
        type: 'Program',
        body: []
    }

    while (i < tokens.length) {
        ast.body.push(walk());
    }

    return ast;
}

// 测试2 tokens  --> ast
const tokens = [
    { type: 'paren',  value: '('        },
    { type: 'name',   value: 'add'      },
    { type: 'number', value: '2'        },
    { type: 'paren',  value: '('        },
    { type: 'name',   value: 'subtract' },
    { type: 'number', value: '4'        },
    { type: 'number', value: '2'        },
    { type: 'paren',  value: ')'        },
    { type: 'paren',  value: ')'        }
];
console.log(parser(tokens))


//vistor 是一组对象{{number:{enter(){},...}}, call:{...},string: {...}}
function traverser(ast, visitor) {
    traverseNode(ast, null);
    function traverseNode(node, parent) {
        let methods = visitor[node.type];
        if(methods && methods.enter) {
            //把新对象加入ast._context
            methods.enter(node, parent)
        }
        switch (node.type) {
            case 'Program':
                traverseArray(node.body, node);
                break;
            case 'CallExpression':
                traverseArray(node.params, node);
                break;
            case 'NumberLiteral':
            case 'StringLiteral':
                break;
            default:
                throw new TypeError(node.type);
        }
        // if (methods && methods.exit) { 没啥用
        //     methods.exit(node,parent);
        // }
    }
    //body:[]  params:[] 
    function traverseArray(array, p) {
        array.forEach(childobj => {
            traverseNode(childobj, p);
        });
    }
}
// ast --> newast
function transformer(ast) {
    let newAst = {
        type: 'Program',
        body: [],
    }
    // 给ast 增加一个body空数组， ast数组变化， newAst 同样变化
    ast._context = newAst.body;
    traverser(ast, {
        NumberLiteral: {
            enter(node, parent) {
                parent._context.push({
                    type: 'NumberLiteral',
                    value: node.value,
                })
            }
        },
        StringLiteral: {
            enter(node, parent) {
                parent._context.push({
                    type: 'StringLiteral',
                    value: node.value,
                });
            },
        },
        CallExpression: {
            enter(node, parent) {
                let expression = {
                    type: 'CallExpression',
                    callee: {
                        type: 'Identifier',
                        name: node.name,
                    },
                    arguments: [],
                }; 

                // 只有parent 是方法时需要，这里把 新增一个body对象里._context 和arguments数组关联，
                node._context = expression.arguments;
                if (parent.type !== 'CallExpression') {
                    expression = {
                        type: 'ExpressionStatement',
                        expression: expression,
                    };
                }
                //ast._context
                parent._context.push(expression);
            }
        },

    });

    return newAst;
}

// 测试3 
const ast = {
    type: 'Program',
    body: [{
        type: 'CallExpression',
        name: 'add',
        params: [{
            type: 'NumberLiteral',
            value: '2'
        }, {
            type: 'CallExpression',
            name: 'subtract',
            params: [{
                type: 'NumberLiteral',
                value: '4'
            }, {
                type: 'NumberLiteral',
                value: '2'
            }]
        }]
    }]
}
console.log(transformer(ast));
console.log(ast);

function codeGenerator(node) {
    switch(node.type) {
        case 'Program':
            return node.body.map(codeGenerator).join('\n');

        case 'ExpressionStatement':
            return (codeGenerator(node.expression) +';' );

        case 'CallExpression':
            return (codeGenerator(node.callee) +'(' +
                node.arguments.map(codeGenerator).join(', ') +')');
                
        case 'Identifier':
            return node.name;
    
        case 'NumberLiteral':
            return node.value;
    
        case 'StringLiteral':
            return '"' + node.value + '"';

        default:throw new TypeError(node.type);
    }
}






// module.exports = {
//     tokenizer,
//     parser,
//     // traverser,
//     // transformer,
//     // codeGenerator,
//     // compiler,
// };