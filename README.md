# @relatecom/utils

## Overview

This library provides a simple and efficient way to build URLs with query parameters. It allows you to construct URLs by specifying a root path, a path, and optional query parameters.

## Installation

To install the library, run the following command:

```bash
npm install @relatecom/utils
```

or

```bash
yarn add @relatecom/utils
```

## Usage

Here's an example of how to use the library:

```javascript
import { UrlBuilder } from '@relatecom/utils';

const ROOT_PATH = 'https://example.com/api/users';

const { buildUrl } = new UrlBuilder(ROOT_PATH);

const url = buildUrl('/list', {
  limit: 10,
  offset: 20,
});

console.log(url); // Output: https://example.com/api/users/list?limit=10&offset=20
```

## API

### `UrlBuilder` Class

#### Constructor

- `rootPath`: The root path of the URL.

```javascript
const urlBuilder = new UrlBuilder('https://example.com/api');
```

#### Methods

- `buildUrl(path: string, queryParams?: object)`: Builds a URL from a path and query parameters. + `path`: The path of the URL. + `queryParams`: An object containing query parameters. + Returns: The built URL.

```javascript
const url = urlBuilder.buildUrl('users', {
  limit: 10,
  offset: 20,
});
```

## Query Parameters

Query parameters can be passed as an object to the `buildUrl` method. The object can contain string, number, or boolean values.

```javascript
const url = urlBuilder.buildUrl('users', {
  limit: 10,
  offset: 20,
  isAdmin: true,
});
```

## Error Handling

If the path is empty, the `buildUrl` method will throw an error.

```javascript
try {
  const url = urlBuilder.buildUrl('');
} catch (error) {
  console.error(error); // Output: Path cannot be empty
}
```

## Contributing

Contributions are welcome! If you have any suggestions or bug reports, please open an issue or submit a pull request.

## License

This library is licensed under the MIT License.
