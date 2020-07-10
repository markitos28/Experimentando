function ejecuta()
{
	//recordar que si le ponemos los parentesis a las funciones, las estamos llamando y no solo nombrando para que el codigo las busque.
	//document.getElementsByTagName("figure")[0].onclick=alerta_saludo;
	//document.getElementById("Imagenes").onclick=alerta_saludo;
	//for(var i=0; i<document.getElementsByTagName("figure").length; i++)
	//{
	//	document.getElementsByTagName("figure")[i].onclick=alerta_saludo;
	//}
	//document.querySelector(".Imagenes").onclick=alerta_saludo;
	//document.querySelector("#Contenedor_Img figure:last-child").onclick=alerta_saludo;
	//var elementos= document.querySelectorAll("#Contenedor_Img figure")[3].onclick=alerta_saludo;
	var elementos= document.querySelectorAll("#Contenedor_Img figure");
	for(var i=0; i< elementos.length ; i++)
	{
		elementos[i].onclick=alerta_saludo;
	}

}


function alerta_saludo()
{
	alert("Hola, estoy en el archivo de JS");
}

window.onload=ejecuta;