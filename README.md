# nem2-library-js

[![npm version](https://badge.fury.io/js/nem2-library.svg)](https://badge.fury.io/js/nem2-library)
[![Build Status](https://api.travis-ci.org/nemtech/nem2-library-js.svg?branch=master)](https://travis-ci.org/nemtech/nem2-library-js)
[![Coverage Status](https://coveralls.io/repos/github/nemtech/nem2-library-js/badge.svg?branch=travis-ci)](https://coveralls.io/github/nemtech/nem2-library-js?branch=travis-ci)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

:warning:️ nem2-library-js is not meant to be used in NEM2 Tools/Applications. 
It is used by [nem2-sdk-typescript-javascript](https://github.com/nemtech/nem2-sdk-typescript-javascript).

:information_source: nem2-library-js is not related to nem-library of NIS1.

This project is developed and maintained by NEM Foundation. 

## Important Notes

Due to a network upgrade with [catapult-server@cow](https://github.com/nemtech/catapult-server/releases/tag/v0.3.0.1) version, **transactions from Alpaca&Bison are not compatible anymore**.

The upgrade to this package's [version v0.9.8](https://github.com/nemtech/nem2-library-js/releases/tag/v0.9.8) is mandatory for **cow compatibility**.

Other versions like [version v0.9.5-2](https://github.com/nemtech/nem2-library-js/releases/tag/v0.9.5-2) can be used for **alpaca** network version.


## Notes on generation of catapult-rest DTO and API client

Following command can be used to generate DTOs and Api clients for the [nem2-sdk-typescript-javascript](https://github.com/nemtech/nem2-sdk-typescript-javascript) :

```bash
$ git clone git@github.com:nemtech/nem2-docs
$ cd nem2-docs && mkdir sdks && cd sdks
$ cp ../source/resources/collections/swagger.yaml .
$ docker run --rm -v ${PWD}:/local swaggerapi/swagger-codegen-cli generate -i /local/swagger.yaml -l javascript -t /local/es6_promise --additional-properties usePromises=true -o /local/nem2-js-sdk && rm -R nem2-js-sdk/test
```

## Changelog

Important versions listed below. Refer to the [Changelog](CHANGELOG.md) for a full history of the project.

- [v0.9.8](CHANGELOG.md#v098) - **Cow Compatible** - 2019-02-28
- [v0.9.7](CHANGELOG.md#v097) - **Cow Compatible** - 2019-02-25
- [v0.9.6](CHANGELOG.md#v096) - **Cow Compatible** - 2019-02-25
- [v0.9.5-2](CHANGELOG.md#v0952) - **Alpaca Compatible** -

## License

Copyright (c) 2018 NEM
Licensed under the [Apache License 2.0](LICENSE)
