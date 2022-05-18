const grammar = require('./grammar')

class KeyValue {
  constructor(key, value) {
    this.key = key
    this.value = value
  }

  getValue() {
    return (
      typeof this.value === "string"
      ? this.value
      : this.value.map(walk)
    )
  }

  getObject() {
    if (!Array.isArray(this.value)) {return null}
    return Object.fromEntries(this.value)
  }
}

const walk = pair => {
  const [key, value] = pair
  return new KeyValue(key, value)
}

const KV = {
  parse(input) {
    const output = grammar.parse(input)
    return output.map(walk)
  }
}

module.exports = KV
