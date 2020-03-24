'use strict'

var datos_usuario= [];
var input;

//1)
for(var i=0; i<3; i++)
{
	input= prompt("Ingrese 6 numeros al azar ("+i+"/6): ")
	if(!isNaN(parseInt(input)))
	{
		datos_usuario[i]= parseInt(input);
		console.log((i+1) + ') ' + datos_usuario[i]);
	}	
}

for (var i = 0; i <= datos_usuario.length; i++) {
	document.write((i+1) + ') ' + datos_usuario[i]);
}
