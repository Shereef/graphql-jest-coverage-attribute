This repo was created to outline an issue running `npm run test:cov` would get us less than a 100% coverage caused by the function in the attribute `@Query(() => String)` in `src/app.resolver.ts` in the hopes that we would get a better solution other than `/* istanbul ignore next */` right before the function

```
$ npm run test:cov

> graphql-jest-coverage-attribute@0.0.1 test:cov
> jest --coverage

 PASS  src/app.resolver.spec.ts
  AppResolver
    root
      ✓ should return "Hello World!" (6 ms)

-----------------|---------|----------|---------|---------|-------------------
File             | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
-----------------|---------|----------|---------|---------|-------------------
All files        |   85.71 |      100 |      50 |     100 |
 app.resolver.ts |   85.71 |      100 |      50 |     100 |
-----------------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        2.227 s, estimated 3 s
Ran all test suites.
```
