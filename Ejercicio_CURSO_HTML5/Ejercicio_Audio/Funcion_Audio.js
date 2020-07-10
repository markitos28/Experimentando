var pistaAudios, reproducir, barra, progreso, maximo;

maximo=400; // Representa el largo de la barra de duracion del video.

function comenzar() //Define y da comportamiento a las variables para que funcione la barra de herramienntas del video.
{
	pistaAudios=document.getElementById("pistaAudios");
	reproducir=document.getElementById("reproducir");
	barra= document.getElementById("barra");
	progreso= document.getElementById("progreso");

	reproducir.addEventListener("click",clickeo,false);
	barra.addEventListener("click",progreso_retroceso,false);
}

function clickeo() //Sirve para reproducir o pausar el video, ademas cambia el texto del boton segun el estado en que esté.
{
	if((pistaAudios.paused == false) && (pistaAudios.ended == false))
	{
		pistaAudios.pause();
		reproducir.innerHTML="Play";
	}

	else
	{
		pistaAudios.play();
		reproducir.innerHTML="Pause";
		bucle= setInterval(barra_progresiva, 500);
	}
}

function barra_progresiva() //Sirve para que se pinte la barra de progreso del video
{
	if(pistaAudios.ended == false)
	{
		var total=parseInt(pistaAudios.currentTime * maximo / pistaAudios.duration);
		progreso.style.width=total + "px";
	}
}

function progreso_retroceso(posicion) //Sirve para adelantar o retroceder el video.
{
	if(pistaAudios.ended == false)
	{
		var ratonX=posicion.pageX-barra.offsetLeft; //Obtiene la posicion en X donde realiza click el Mouse
		//offsetLeft devuelve la distancia desde el borde izquierdo de la pantalla hasta el inicio de la barra de progreso

		var nuevoTiempo= ratonX* pistaAudios.duration / maximo; // Obtiene el tiempo en el que se deberia ubicar el video.
		pistaAudios.currentTime= nuevoTiempo;

		progreso.style.width= ratonX+"px";


	}
}


window.addEventListener("load",comenzar,false);