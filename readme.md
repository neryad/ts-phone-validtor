# ts-phone-validator

![npm](https://img.shields.io/npm/v/telephonecheck)
![npm](https://img.shields.io/npm/l/telephonecheck)
![npm](https://img.shields.io/npm/dm/telephonecheck)
![GitHub issues](https://img.shields.io/github/issues/neryad/ts-phone-validator)
![GitHub last commit](https://img.shields.io/github/last-commit/neryad/ts-phone-validator)
![TS](https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-square)

`ts-phone-validator` is a TypeScript package that helps you validate if a telephone number is well-written according to common formats.

## Features

- Validates phone numbers with optional country codes.
- Supports various phone number formats including spaces, dashes, and parentheses.
- Easy to use and integrate into any Dart or Flutter project.

## Installation

You can install this package using npm:

```bash
npm i telephonecheck
```

Or using yarn:

```bash
yarn add telephonecheck
```

## Usage

First, import the telephoneCheck function from the package:

```TS
import telephoneCheck from 'ts-phone-validator';

const number = "555-555-5555";
const isValid = telephoneCheck(number);
console.log(`Is the number valid? ${isValid}`);

```

## Function

` telephoneCheck(str: string): boolean

- Parameters:
  - str: A string representing the phone number to validate.
- Returns:
  - boolean: Returns true if the phone number is valid, otherwise false.

## Examples

```TS
import telephoneCheck from 'ts-phone-validator';

console.log(telephoneCheck("555-555-5555")); // true
console.log(telephoneCheck("(555) 555-5555")); // true
console.log(telephoneCheck("555 555 5555")); // true
console.log(telephoneCheck("5555555555")); // true
console.log(telephoneCheck("123")); // false
console.log(telephoneCheck("abc-def-ghij")); // false

```
## Looking for Flutter / Dart version? 
#### Also available in pub.dev, take a look! <br />
[![npm](
https://img.shields.io/badge/do__validator-blue.svg?logo=dart&logoColor=white)]([https://pub.dev/packages/do_validator](https://pub.dev/packages/telephone_check))


## Issues

If you encounter any issues, please report them [Here](https://github.com/neryad/ts-phone-validtor/issues)

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request on GitHub.

1. Fork the repository.
2. Create a new branch (git checkout -b feature-branch).
3. Make your changes.
4. Commit your changes (git commit -am 'Add new feature').
5. Push to the branch (git push origin feature-branch).
6. Create a new Pull Request.

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Acknowledgements

- Inspired by common phone number validation techniques and patterns.

## Tech Stack

![TS](https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-square)

## Badges

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
![npm](https://img.shields.io/npm/v/telephonecheck)
![TS](https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-square)

## Authors

- [@neryad](https://github.com/neryad)
