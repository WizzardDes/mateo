/*

var numero1 = 10;

var numero2 = 5;

var resultado= numero1*numero2;




console.log(resultado);

var nombre = "mateo Rodriguez ";
var  profecion = "Desarrollador full stack";

console.log(nombre + profecion);

var tiene_mascota = true;

console.log(tiene_mascota);

var datos=["Mateo",26,false,25,78,"Desarrollador"];

console.log(datos[2]);


var edad= 41;
if (edad>=18 && edad<=40) {
	console.log("Eres un adulto joven")
}

else{
	console.log("no eres un adulto joven")
}

var dias=["lunes","martes","miercoles","jueves","viernes","sabado","domingo"];

for(var i=0;i<7;i++){
	console.log(dias[i])
}


function suma (numero1,numero2){
	var resultado= numero1+numero2;
	return resultado;
}

var res=suma(88,55);

console.log(res);


var carne = 10000;

function calcular (producto){

	 var iva = 0.19;
	 var resultado= producto* iva;
	 return resultado;
}



var res=calcular(carne);



console.log(res)
*/
function iva(precio_producto,porcentaje_iva){
	var iva_producto=precio_producto* (porcentaje_iva/100);
	return iva_producto;
	}

function calcular_iva(){
	var precio= parseInt(document.getElementById('precio').value);
	var porcentaje_iva= parseInt(document.getElementById('iva').value);
	
	var resultado= iva(precio,porcentaje_iva);
	var salida= document.getElementById('resultado');
	salida.value=resultado;

	}

