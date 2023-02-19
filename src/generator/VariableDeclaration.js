export function VariableDeclarator (leaf, toString) {
  if (leaf.init) {
    return `${toString(leaf.id)}=${toString(leaf.init)}`
  }
  return toString(leaf.id)
}

export function VariableDeclaration (leaf, toString) {
  const cosntness = (leaf.kind === 'const' ? 'const ' : '')
  const type = (leaf.cpp_type ? `${leaf.cpp_type} ` : 'auto ')
  return `${cosntness}${type}` + leaf.declarations.map(toString).join() + ';'
}
