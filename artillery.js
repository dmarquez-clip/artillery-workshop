const fs = require('fs')require('dotenv').config()const yaml = require('json-to-pretty-yaml')const artillery = require('artillery')const projectScenarios = require('./TodoApp/scenarios')({  path: process.env.REST_V,  project: process.env.PROJECT})const projectConfig = require('./artillery.config')({  baseUrl: process.env.BASE_URL,  token: process.env.API_TOKEN,  scenarios: projectScenarios});let yamlStr = yaml.stringify(projectConfig);const filename = 'data-out.yml'fs.writeFile(filename, yamlStr, 'utf8', () => {  artillery.run(filename, './results/file.json')  //artillery.report('./results/', '')});