/*Llegan vuelos con vacunas de distintos lugares del mundo
Mientras el usuario quiera se debe registrar de cada vuelo:
-Origen (“Oriente”, “Occidente”, “Secreto”)
-Cantidad de vacunas (entre 500000 y 2500000)
-Costo del vuelo (entre 1 millón y 5 millones de pesos)
Informar:
a- El origen que envió menor cantidad de vacunas
b- El promedio por vuelo de vacunas llegadas de Occidente
c- El total sin descuentos a pagar por los gastos de los viajes
d- Si en total se recibieron mas de 10 millones de vacunas se hace un descuento de 25%, Si se recibieron entre 5 y 8 millones el descuento es del 15% con menor cantidad no hay descuento.
Informar si hubo descuento de cuanto fue y el importe final con descuento*/









function mostrar()
{
	let origen;
	let cantVacunas;
	let costoVuelo;
	let respuesta = "si";
	let contOriente = 0;
	let contOccidente = 0;
	let contSecreto = 0;
	let origenMenorCant;

	do
	{
		origen = prompt("Ingrese origen Oriente ; Occidente ; Secreto");
        while(origen != "Oriente" && origen != "Occidente" && origen != "Secreto")
        {
            origen = prompt("error ingrese una origen valido");
        }
		cantVacunas = prompt("Ingrese una cantidad de vacunas");
        while(cantVacunas < 500000 || cantVacunas > 2500000 || isNaN(cantVacunas))
        {
            cantVacunas = prompt("error ingrese una cantidad valida");
        }
		while(costoVuelo < 1000000 || costoVuelo > 5000000 || isNaN(costoVuelo))
        {
            costoVuelo = prompt("error ingrese un costo de vuelo valido");
        }
		switch (origen) 
		{
			case "Oriente":
				contOriente++;
				
				break;
			case "Occidente":
				contOccidente++;
				
				break;
			case "Secreto":
				contSecreto++;
        		break;
		}
		if (contOccidente > contOriente && contOccidente > contSecreto) 
		{ 
			origenMenorCant = "Occidente";
		} else if (contOriente > contOccidente && contOriente > contSecreto) 
			{
				origenMenorCant = "Oriente";
			}else 
				{
					origenMenorCant = "Secreto";
				}
	}while(respuesta == "si");




















	alert("La cantidad menor de vacunas es de origen  " + origenMenorCant);
}

