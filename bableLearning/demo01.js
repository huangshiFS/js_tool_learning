var { parse } = require('@babel/parser');
var  traverse  = require('@babel/traverse');
var generate  = require('@babel/generator');

const code = 'const n = 1';

// parse the code -> ast
const ast = parse(code);
console.log(traverse)
// transform the ast
traverse.default(ast, {
  enter(path) {
    // in this example change all the variable `n` to `x`
    if (path.isIdentifier({ name: 'n' })) {
      path.node.name = 'x';
    }
  },
});

// generate code <- ast
const output = generate.default(ast, code);
console.log(output.code); // 'const x = 1;'
