var rr = require('./librr.js');

console.log(rr.librr_c_api.getBuildTime());
console.log(rr.librr_c_api.getVersion());
console.log(rr.librr_c_api.getlibSBMLVersion());
console.log(rr.librr_c_api.getWorkingDirectory());

//rr.librr_c_api.loadSBMLFromFile('models/feedback.xml')
//console.log(rr.librr_c_api.getCurrentSBML())
