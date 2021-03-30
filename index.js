const myInformations = require('./information.js')
const cowsay = require("cowsay");


console.log(cowsay.say({
	text : `Hi my name is ${myInformations.name},from ${myInformations.campus} campus`,
	e : "oO",
	T : "U "
}));