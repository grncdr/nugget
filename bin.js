#!/usr/bin/env node

var nugget = require('./')
var args = require('minimist')(process.argv.slice(2))

var url = args._[0]
if (!url) {
  console.error("Usage: nugget <url> [-O saveAs]")
  process.exit(1)
}

nugget(url, args, function(err) {
  if (err) {
    console.error('Error:', err.message)
    process.exit(1)
  }
  process.exit(0)
})
