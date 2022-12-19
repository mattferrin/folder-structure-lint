# folder-structure-lint

## About

Many aspects of this project are shamelessly borrowed from [FoldersLint](https://github.com/denisraslov/folderslint), the best equivalent I was able to find before writing a Rust version named [folders-lint](https://github.com/mattferrin/folders-lint). This is a TypeScript version because TypeScript is easier to package and collaborate with.

### Purpose

This module aims to improve folder structure by only allowing safe-listed file paths. As a byproduct, the configuration file can be thought of as reliable and readable documentation for the folder structure.

## Getting Started

### Install

`npm i -D @clowd/fsl`

### Create your config `.folder-structure-lint.json` file:

I recommend grouping by both feature (`/*/` below) and file type (`hooks`, `components`, etc.):

```json
{
  "root": "src",
  "rules": [
    "src/App.*",
    "src/index.*",

    "src/*/index.*",
    "src/*/hooks/use*.*",
    "src/*/components/*.*",
    "src/*/others/*.*",
  ]
}
```

Add this to your `package.json`:

```json
{
  "scripts": {
    "fsl": "fsl"
  }
}
```

Run the linter:

`npm run fsl`

### Optionally

Use `husky` and `lint-staged` in combination, 2 great NPM packages. Husky lets you check rules on commit. Lint Staged only checks changed files.

## Usage

### Glob

Example `.folder-structure-lint.json` glob rule:

```json
{
  "root": "src",
  "rules": ["src/legacy/**"]
}
```

### Regex

Regex is not supported in the TypeScript version. See the Rust version if interested or submit a pull-request.
