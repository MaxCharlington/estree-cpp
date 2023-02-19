function isInt(value) {
  return !isNaN(value) &&
         parseInt(Number(value)) == value &&
         !isNaN(parseInt(value, 10));
}

export function VariableDeclaration (leaf) {
  if (isInt(leaf.declarations[0].init.value)) {
    leaf.cpp_type = "std::int64_t";
  }
}
