release() {
  version=$(json -f package.json version) && echo ${1:-$version}
}

"$@"