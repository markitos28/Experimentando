function comenzar()
{
	var nombre= document.getElementById("nombre");
	var apellido=document.getElementById("apellido");

	nombre.addEventListener("input", validar,false);
	apellido.addEventListener("input", validar,false);

	validar();
}

function validar()
{
	if(nombre.value=="" && apellido.value=="")
	{
		nombre.setCustomValidity("Introduce un nombre o apellido");
		nombre.style.background="#F91313";
		apellido.style.background="#F91313";
	}
	else
	{
		nombre.setCustomValidity("");
		nombre.style.background="#25F247";
		apellido.style.background="#25F247";
	}
	
}

window.addEventListener("load", comenzar, false);