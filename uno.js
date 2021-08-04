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
	let respuesta;

	respuesta == "si";

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
		while(vacuna != "rusa" && vacuna != "china" && vacuna != "americana")
		{
			vacuna = prompt("Error ingrese una vacuna valida");
		}
		while(dosis != "p" && dosis != "s")
		{
			dosis = prompt("Error ingrese una dosis valida");
		}
		while(sexo != "f" && sexo != "m")
		{
			sexo = prompt("Error ingrese un sexo valido");
		}
		if (edad < 12 && edad > 17)
		{
			
		}




	










	respuesta = prompt("Desea ingresar otro nombre?");
	}while (respuesta == "si");

}