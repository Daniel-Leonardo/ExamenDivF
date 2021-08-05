/*El centro de hisopado de Ezeiza recibe una tripulación de 8 personas.
Al ser hisopadas se ingresan sus datos en la aplicación:
-nacionalidad ("argentina", "extranjero")
-resultado("positivo", "negativo")
-edad(entre 18 y 65)
-cepa("delta", "alfa", "beta", "ninguna")
Para poder ingresar ninguna el resultado debe ser negativo
Luego del ingreso informar:
a- Porcentaje de positivos
b- Porcentaje de negativos
c- Cuál es la cepa menos encontrada
d- Edad del menor argentino contagiado
e- Cantidad de personas extranjeras contagiadas con la delta*/
function mostrar()
{
    let nacionalidad;
    let resultado;
    let edad;
    let cepa;
    let porcentajePositivos = 0;
    let porcentajeNegativos = 0;
    let contPositivos = 0;
    let contNegativos = 0;
    let contDelta;
    let contAlfa;
    let contaBeta;
    let contNinguna;
    let cepaMenosEncontrada;
    let flagMenor = 1;
    let edadMasJoven;
    let cantidadExtranjeroDelta = 0;
    
    for (i = 0; i < 3 ; i++)
    {
        nacionalidad = prompt("Ingrese nacionalidad Argentina ; Extranjero");
        while(nacionalidad != "Argentina" && nacionalidad != "Extranjero")
        {
            nacionalidad = prompt("error ingrese una nacionalidad valida")
        }
        
        resultado = prompt("Ingrese su resultado: Positivo ; Negativo");
        while(resultado != "Positivo" && resultado != "Negativo")
        {
            resultado = prompt("error ingrese un resultado valido")
        }

        edad = parseInt( prompt("Ingrese la edad:"));
		while(edad < 18 || edad > 65 || isNaN(edad))
		{
			edad = parseInt(prompt("Error ingrese una edad valida"));
		}
        cepa = prompt("Ingrese una cepa: delta ; alfa ; beta ; ninguna")
        while(cepa != "delta" && cepa != "alfa" && cepa != "beta" && cepa != "ninguna")
        {
            cepa = prompt("Error ingrese una cepa validad");
        }
        if(resultado == "Positivo")
        {
            contPositivos++;
        }else
            {
                contNegativos++;
            }
        
            switch (cepa) 
            {
                case "delta":
                    contDelta++;
                    break;
                case "alfa":
                    contAlfa++;
                    break;
                case "beta":
                    contaBeta++;
                    break;
                case "ninguna":
                    contNinguna++;
                    break;
            }      
        if (contAlfa > contDelta && contAlfa > contaBeta && contAlfa > contNinguna) 
		{ 
			cepaMenosEncontrada = "Alfa";
		} else if (contDelta > contAlfa && contDelta > contaBeta && contDelta > contNinguna) 
			{
				cepaMenosEncontrada = "Delta";
			}else if (contaBeta > contAlfa && contaBeta > contDelta )
				{
					cepaMenosEncontrada = "Beta";
				}else
                    {
                        cepaMenosEncontrada = "Ninguna";
                    }
        if (flagMenor || edad < edadMasJoven);
		{
			edadMasJoven = edad;
			flagMenor = 0;
		}
        if (nacionalidad == "Extranjero" && cepa == "delta")
        {
            cantidadExtranjeroDelta++;
        }
        


    }

    porcentajePositivos = contPositivos * 100 / 3;
    porcentajeNegativos = contNegativos * 100 / 3;
    alert("El porcentaje de positivos es: " + porcentajePositivos);
    alert("El porcentaje de negativos es: " + porcentajeNegativos);
    alert("La cepa menos encontrada es: " + cepaMenosEncontrada);
    alert("La edad de la persona mas joven con la cepa delta es: " + edadMasJoven);
    alert("La mayor cantidad de extranjeros con la cepa delta es:" + cantidadExtranjeroDelta);
    
}
