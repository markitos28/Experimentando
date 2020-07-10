//var imagen=document.getElementsByTagName("img")[0];
var imagen= new Array(5);

function tipo_sourv()
{
	alert("Souvenir Unicornio :) ");
}

function manejaSourv()
{
	//document.getElementsByTagName("img")[0].onclick=tipo_flor;
	
	for(var i =0; i< imagen.length; i++)
	{
		imagen[i]=document.getElementsByTagName("img")[i];
	}
	//imagen=document.getElementsByTagName("img")[0]; // se movio afuera
	imagen[0].addEventListener("mouseover",function(){imagen[0].width=200; imagen[0].height=200;},false);
	imagen[0].addEventListener("mouseout",function(){imagen[0].width=150; imagen[0].height=150;},false);
	imagen[0].addEventListener("click",tipo_sourv,false);

	imagen[1].addEventListener("mouseover",function(){imagen[1].width=200; imagen[1].height=200;},false);
	imagen[1].addEventListener("mouseout",function(){imagen[1].width=150; imagen[1].height=150;},false);
	imagen[1].addEventListener("click",tipo_sourv,false);

	imagen[2].addEventListener("mouseover",function(){imagen[2].width=200; imagen[2].height=200;},false);
	imagen[2].addEventListener("mouseout",function(){imagen[2].width=150; imagen[2].height=150;},false);
	imagen[2].addEventListener("click",tipo_sourv,false);

	imagen[3].addEventListener("mouseover",function(){imagen[3].width=200; imagen[3].height=200;},false);
	imagen[3].addEventListener("mouseout",function(){imagen[3].width=150; imagen[3].height=150;},false);
	imagen[3].addEventListener("click",tipo_sourv,false);

	imagen[4].addEventListener("mouseover",function(){imagen[4].width=200; imagen[4].height=200;},false);
	imagen[4].addEventListener("mouseout",function(){imagen[4].width=150; imagen[4].height=150;},false);
	imagen[4].addEventListener("click",tipo_sourv,false);

}
/*
function crecer()
{
	imagen.width=200;
	imagen.height=200;
}

function menguar()
{
	imagen.width=150;
	imagen.height=150;
}
*/

//window.onload=manejaSourv;
window.addEventListener("load",manejaSourv,false);