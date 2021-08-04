/*Se necesita llevar el registro de un vacunatorio. Para ello se podrá registrar los datos de las personas vacunadas mientras el usuario quiera.
De cada vacunado se solicita:
-nombre (entre 3 y 10 caracteres)
-edad ( mayor o igual a 12)
-vacuna (“rusa”, “china”, “americana”)
Si la edad esta entre 12 y 17 años ambos incluidos solo se permite la vacuna americana
-dosis (“p” en caso de ser la primer dosis o “s” en caso de ser la segunda dosis)
-sexo( “f” o “m” )
Informar:
a- Promedio de edad de los que se vacunaron con la china
b- Nombre y vacuna del hombre más joven
c- De las personas que recibieron la vacuna americana que porcentaje son menores de edad
d- Porcentaje de los que están vacunados con 1 dosis sobre el total de vacunados
e- Vacuna mas inoculada*/
function mostrar()
{
	let nombre;
	let edad;
	let vacuna;
	let dosis;
	let sexo;
	let promedio;
	let respuesta = "si";
	let flagMasJoven = 1;
	let nombreMasJoven;
	let vacunaMasJoven;
	let acumChina = 0;
	let contChina = 0;
	let contRusa = 0;
	let contAmericana = 0;
	let totalVacunados;
	let vacunadosMenAmericana = 0;
	let vacunaInoculada;
	let contPrimeraDosis = 0;
	let porcentajeMenoresAmericana;
	let porcentajePrimeraDosis;


	

	do
	{
		nombre = prompt("Ingrese un nombre:");
		while (nombre.length < 3 && nombre.length > 10)
		{
			nombre = prompt("Error ingrese un nombre valido")
		}
		edad = parseInt( prompt("Ingrese la edad:"));
		while(edad < 12)
		{
			edad = parseInt(prompt("Error ingrese una edad valida"));
		}
		vacuna = prompt("Ingrese una vacuna rusa ; china ; americana");
		while(vacuna != "rusa" && vacuna != "china" && vacuna != "americana")
		{
			vacuna = prompt("Error ingrese una vacuna valida");
		}
		dosis = prompt("Ingreses una dosis p de primera o s de segunda");
		while(dosis != "p" && dosis != "s")
		{
			dosis = prompt("Error ingrese una dosis valida");
		}
		sexo = prompt("Ingrese su sexo f de femenino o m de masculino");
		while(sexo != "f" && sexo != "m")
		{
			sexo = prompt("Error ingrese un sexo valido");
		}
		switch (vacuna) 
		{
			case "rusa":
				contRusa++;
				
				break;
			case "china":
				contChina++;
				acumChina = acumChina + edad;
				break;
			case "americana":
				contAmericana++;
        		break;
		}

		if (flagMasJoven || edad < nombreMasJoven);
		{
			nombreMasJoven = nombre;
			vacunaMasJoven = vacuna;
			flagMasJoven = 0;
		}
		if ( edad < 18 && (vacuna == "americana"))
		{
			vacunadosMenAmericana++;
		}
		if (contChina > contRusa && contChina > contAmericana) 
		{ 
			vacunaInoculada = "China";
		} else if (contRusa >= contChina && contRusa > contAmericana) 
			{
				vacunaInoculada = "Rusa";
			}else 
				{
					vacunaInoculada = "Americana";
				}
		if (dosis == "p")
		{
			contPrimeraDosis++;
		}



	









	
	respuesta = prompt("Desea ingresar otro nombre?");
	}while (respuesta == "si");

	totalVacunados = contRusa + contChina + contAmericana;
	promedio = acumChina / contChina;
	porcentajeMenoresAmericana = vacunadosMenAmericana * 100 / contAmericana;
	porcentajePrimeraDosis = contPrimeraDosis * 100 / totalVacunados;







alert("El promedio de edad de los que se vacunaron con vacuna china es: " + promedio);
alert("El nombre de la persona mas joven es: " + nombreMasJoven + " Y la vacuna es: " + vacunaMasJoven);
alert("La vacuna mas inoculada es: " + vacunaInoculada);
alert("El porcentaje de menores de edad con vacuna americana es " + porcentajeMenoresAmericana);
alert("La cantidad de persona con una primera dosis es " + porcentajePrimeraDosis);
}