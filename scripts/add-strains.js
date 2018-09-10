/**
 * This creates posts for strains from a database of strain data
 */
const fs = require('fs')
const path = require('path')
const kebabCase = require('lodash/kebabCase')
const csv2 = require('csv2')
const through2 = require('through2')
const mkdirp = require('mkdirp')
const timeStamp = require('time-stamp')

const database = path.join(__dirname, '../data/cannabis.csv')
const targetDirectory = path.join(__dirname, '../blog')

let counter = 0

fs.createReadStream(database)
  .pipe(csv2())
  .pipe(through2.obj(function (chunk, _, cb) {
    const strainName = chunk[0]
    const strainNameKebabCase = kebabCase(strainName)
    if (counter < 20) {
      this.push({
        strainName: strainName.replace('-', ' '),
        strainNameKebabCase: strainNameKebabCase,
        strainType: chunk[1],
        strainDescription: chunk[5]
      })
      counter++
    }
    cb()
  }))
  .on('data', (data) => {
    const { strainName, strainNameKebabCase, strainType, strainDescription } = data
    const timestamp = timeStamp('YYYY-MM-DDTHH:mm:ss')
    const thumbnailUrl = `https://d3ix816x6wuc0d.cloudfront.net/${strainType}/${strainNameKebabCase}/primary?width=480`
    const template = `---
path: "/strains/${strainNameKebabCase}"
date: "${timestamp}"
title: "${strainName}"
tags: "${strainType}"
categories: "strains"
thumbnail: "${thumbnailUrl}"
---
${strainDescription}`
    const targetDir = path.join(targetDirectory, `strains-${strainNameKebabCase}`)
    mkdirp(`${targetDir}`, () => {
      const wstream = fs.createWriteStream(`${targetDir}/index.md`)
      wstream.write(template)
      wstream.end(() => {
        console.log(`>>> strains-${strainNameKebabCase}`)
      })
    })
  })
  .on('end', () => {
    console.log('done.')
  })

// create directory strains-${strainNameKebabCase}
// create file index.md
/*

*/
