# Codility Solutions

## TOC

- [Introduction](#introduction)
- [Workspace](#workspace)
- [Configuration](#configuration)

## Introduction

All solutions from Codility

- 1 - BinaryGap - <https://app.codility.com/programmers/lessons/1-iterations/binary_gap/start/>
- 2 - CyclicRotation - <https://app.codility.com/programmers/lessons/2-arrays/cyclic_rotation/start/>
- 3 - OddOccurrencesInArray - <https://app.codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/start/>

## Workspace

- Visual Studio Code 1.45.1

  - VSCode extensions:

    - Prettier - Code formatter 4.7.0
    - Eslint 2.1.5
    - VSCode MDX 0.1.4

  - VSCode settings:

  ```sh
  {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": false
    },
    "javascript.validate.enable": false,
    "eslint.validate": ["markdown", "md", "mdx"],
    "prettier.requireConfig": true,
  }
  ```

## Configuration

1. **Install these packages/applications (prefer the listed versions):**

- Node 12.18.2
- Yarn 1.21.1

2. **Install all dependencies with yarn (not npm!!)**

```sh
yarn
```

3. **Run each file with (only need the required params)**

```sh
node filename.js param1 param2 param3 param4...
```

5. **Commands**

```bash
# Installs all dependendies
$ yarn

# Checks Eslint errors
$ yarn lint

# Formats all files with prettier
$ yarn format

# Checks if all files are formatted with prettier
$ yarn check-format

# Checks typescript errors
$ yarn check-types

# Commits with karma interface
$ yarn commit
```
