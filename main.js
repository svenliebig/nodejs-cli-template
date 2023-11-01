#! /usr/bin/env node

const args = process.argv.slice(2)

const fs = require('fs')
const path = require('path')

const index = (component) => {
	return [`import React from 'react'`, ``, `export { component } from './${component}'`].join('\n')
}

// possible to get from the arg
const component = "HelloWorld"

console.log({
	"your current working direction": process.cwd(),
	"your arguments": args,
	"your possibel index": index`${component}`
})

const directory = path.join(process.cwd(), component)

// does dir not exists?
if (!fs.existsSync(directory)) {
	fs.mkdirSync(directory)
}

// create index.js
fs.writeFileSync(path.join(directory, 'index.js'), index`HelloWorld`, 'utf8')

// create other files... 
