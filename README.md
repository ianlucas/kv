# KV

A simple Source's KeyValue format parser.

## API

### `KV.parse(input: string): KeyValue[]`

Returns an array of KeyValue instances.

### `keyValue.key: string`

Key of the KeyValue instance.

### `keyValue.value: string|array`

Value of the KeyValue instance. If it is an array, it will have a list of key-value pairs.

### `keyValue.getValue(): string|KeyValue[]`

Get the value of the KeyValue instance. If it is an array, it will have a list of KeyValue instances.

### `keyValue.getObject(): object`

If its value is a list of key-value pairs, this method is going to try to create an object from them (using Object.fromEntries).
