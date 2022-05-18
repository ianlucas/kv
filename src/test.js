const fs = require('fs/promises')
const KV = require('./KV')

function print(data) {
  console.log(
    JSON.stringify(data)
  )
}

async function main() {
  const path = `${__dirname}/sample.cfg`
  const config = { encoding: 'utf-8' }
  const contents = await fs.readFile(path, config)
  const kv = KV.parse(contents)
  kv[0].getValue().map(keyValue => {
    print(keyValue.key)
    print(keyValue.getObject())
  })
}

main()
