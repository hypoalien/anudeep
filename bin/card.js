#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
var chalk = require('chalk')
var boxen = require('boxen')

// Define options for Boxen
let options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}
// Text + chalk definitions
let data = {
  'name': chalk.white('Anisetty Anudeep /'),
  'handle': chalk.cyan('hypoalien'),
  'work': chalk.white('Web Developer'),
 
  'github': chalk.cyan('https://github.com/hypoalien'),
  'linkedin': chalk.cyan('https://linkedin.com/in/anisettyanudeep'),
  'email': chalk.cyan('https://anisettyanudeep@gmail.com'),
  
  'npx': chalk.white('npx anisetty'),
  'labelWork': chalk.white.bold('      Work:'),
  
  'labelGitHub': chalk.white.bold('    GitHub:'),
  'labelLinkedIn': chalk.white.bold('  LinkedIn:'),
  'labelEmail': chalk.white.bold('     email:'),
  
  'labelCard': chalk.white.bold('      Card:')
}

// Actual strings we're going to output
var newline = '\n'
var heading = `${data.name} ${data.handle}`
var working = `${data.labelWork}  ${data.work}`

var githubing = `${data.labelGitHub}  ${data.github}`
var linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
var emailing= `${data.labelEmail}  ${data.email}`

var carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
let output = heading + newline + newline + working + newline  + newline + githubing + newline + linkedining + newline + emailing + newline + newline + newline + carding

console.log(chalk.green(boxen(output, options)))
