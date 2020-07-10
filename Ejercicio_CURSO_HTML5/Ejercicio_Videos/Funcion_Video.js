var insert_Video, reproducir, barra, progreso, maximo;

maximo=400; // Representa el largo de la barra de duracion del video.

function comenzar() //Define y da comportamiento a las variables para que funcione la barra de herramienntas del video.
{
	insert_Video=document.getElementById("Insert_Video");
	reproducir=document.getElementById("reproducir");
	barra= document.getElementById("barra");
	progreso= document.getElementById("progreso");

	reproducir.addEventListener("click",clickeo,false);
	barra.addEventListener("click",progreso_retroceso,false);
}

function clickeo() //Sirve para reproducir o pausar el video, ademas cambia el texto del boton segun el estado en que esté.
{
	if((insert_Video.paused == false) && (insert_Video.ended == false))
	{
		insert_Video.pause();
		reproducir.innerHTML="Play";
	}

	else
	{
		insert_Video.play();
		reproducir.innerHTML="Pause";
		bucle= setInterval(barra_progresiva, 500);
	}
}

function barra_progresiva() //Sirve para que se pinte la barra de progreso del video
{
	if(insert_Video.ended == false)
	{
		var total=parseInt(insert_Video.currentTime * maximo / insert_Video.duration);
		progreso.style.width=total + "px";
	}
}

function progreso_retroceso(posicion) //Sirve para adelantar o retroceder el video.
{
	if(insert_Video.ended == false)
	{
		var ratonX=posicion.pageX-barra.offsetLeft; //Obtiene la posicion en X donde realiza click el Mouse
		//offsetLeft devuelve la distancia desde el borde izquierdo de la pantalla hasta el inicio de la barra de progreso

		var nuevoTiempo= ratonX* insert_Video.duration / maximo; // Obtiene el tiempo en el que se deberia ubicar el video.
		insert_Video.currentTime= nuevoTiempo;

		progreso.style.width= ratonX+"px";


	}
}


window.addEventListener("load",comenzar,false);