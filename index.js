import * as Acorn from 'acorn'
import WalkAST from './src/walker.js'
import OptimizeAST from './src/optimizer.js'
import GenerateCode from './src/generator.js'

export default function Transpile (code, options = {}) {
  const ast = Acorn.parse(code, {
    ecmaVersion: 6,
    ...(options.parser ?? {})
  })
  try {
    WalkAST(ast)  // prepares ast for generation
  } catch (cause) {
    throw new Error('Failed to transpile', { cause })
  }
  try {
    OptimizeAST(ast)
  } catch (cause) {
    console.warn(new Error('Failed to optimize', { cause }))
  }
  try {
    return [JSON.stringify(ast, null, 4), GenerateCode(ast)]
  } catch (cause) {
    throw new Error('Code generation failed', { cause })
  }
}
