export function Program (leaf, toString) {
  leaf.type = 'BlockStatement';
  return `int main(int argc, const char* argv[])${toString(leaf)}`;
}
