module.exports = options => {  return {    config: {      target: options.baseUrl,      phases: [{        duration: 1,        arrivalRate: 1,        name: "Phase 1"      }],      defaults: {        headers: {          "Content-Type": "application/json",          Authorization: "Bearer " + options.token        }      }    },    scenarios: [options.scenarios]  }}