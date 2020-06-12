$(document).ready(
	function(){

	document.getElementById("botonG").onclick = function() { reproduce(); ajusta();};

	document.getElementById("botonAdd").onclick = function() { adder(); };


	var lockers = ['Ángel Tepetla', 'Clau Salamanca', 'Caw Salamanca', 'José Ángel', 'Mi niña fea <3', 'La fea Caw', 'devOne', 'Yosafat :v', 'Ojitos', 'Bambina', 'Mi Caw', '¡Te amo!'];
	//var lockers = ['A', 'B', 'C', 'D', 'E'];
	var fijo = 'Ángel Tepetla', fijo2 = 'Caw Salamanca';


	var longitud = lockers.length;
	var min = 0, max = longitud;
	var aleatorio = 0, generado = 0;
	var i = 0, j = 0;
	var datos = [];
	var bandera = 0;
	
    var hiddenElement = document.createElement('a');
    
    var extra;
    var logger = "Recibe;" + "entregaMatricula;" + "entregaNombre;" + "\n";
    datos[0] = " ;" + "Recibe;" + "entregaMatricula;" + "entregaNombre;" + "\n";;
    j++;
/*	
	function getRandomArbitrary(min, max) {
	  return Math.random() * (max - min) + min;
	  alert("here");
	}

*/

	function reproduce() {
		var audio1 = document.getElementById("audio");
		audio1.play();
		//console.log("Hola");
	}

	function adder() {
		var people = prompt("Please enter new name", "Ángel Tepetla");
		var newLength = lockers.push(people);
	}


	//ajusta();
	function ajusta(){
		//alert("hola");

		(async function getIpAddress() {

			const {value: respu} = await swal({
			  title: '¡Cuidado!', 
			  text: '¡Leé bien lo que se te pide a continuación!',
			  type: 'info'
			})

			var {value: ipAddress} = await swal({
			  title: 'Ingresa solo tú nombre:',
			  input: 'text',
			  inputPlaceholder: 'Ángel Tepetla',
			  showCancelButton: false,
			  inputValidator: (value) => {
			    return !value && '¡Intentalo de nuevo!'
			  }
			})

			var email_holder;
			var text_holder;
			var activo = 0;


			text_holder = 'Tepetla';
			email_holder = 'mb'
			nombre = ipAddress;

			activo = 0;


			const {value: matricula} = await swal({
			  title: ipAddress + ', ingresa tú matricula:',
			  input: 'number',
			  text: 'Número de 10 digitos...',
			  inputPlaceholder: '1631110970',
			  showCancelButton: false
/*
			  inputAttributes: {
			    maxlength: 10,
			    autocapitalize: 'off',
			    autocorrect: 'off'
			  }
*/			  
			})


			if(matricula == '1631110970'){
				ipAddress = 'Ángel';
				nombre = 'Developer';
				activo = 2;
			}

			else if(matricula == '1631111686'){
				ipAddress = 'Caw Salamanca';
				nombre = 'Caw Salamanca';
				activo = 3;
			}



			

			
			var color = ['#e91e63', 'orange', '#D32F2F', '#D81B60', '#141414', '#304FFE'];
			var nombre;

			if(activo == 2){


				var pos = lockers.indexOf(fijo2);
				eliminado = lockers.splice(pos, 1);
				indexado = fijo2;
				aleatorio = fijo2;

				color[i] = '#1d88dc';

			}

			else if(activo == 3){

				var pos = lockers.indexOf(fijo);
				eliminado = lockers.splice(pos, 1);
				indexado = fijo;
				aleatorio = fijo;

				color[i] = '#e91e63';

			}


			//else if(activo == 0 || activo == 1){
			else{
				nombre = ipAddress;


				max = lockers.length;
				aleatorio = Math.random() * (max - min) + min;
				aleatorio = Math.floor(aleatorio);

				var pos = lockers.indexOf(fijo);
				var pos1 = lockers.indexOf(fijo2);
				var tamy = lockers.length;

				if(tamy > 2){
					while(aleatorio == pos || aleatorio == pos1){
						aleatorio = Math.random() * (max - min) + min;
						aleatorio = Math.floor(aleatorio);
					}
				}

				var indexado = lockers[aleatorio];
				var eliminado = lockers.splice(aleatorio, 1);
			}



			if(ipAddress == 'developer'){
				indexado = 0;

				hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(datos);
			    hiddenElement.target = '_blank';
			    hiddenElement.download = 'lockers.csv';
			    hiddenElement.click();

			}


	 		// alert("here");
	 		
	 		var contenedor = document.getElementById("contenedor_principal");
	 		contenedor.style.backgroundColor = color[i];

	 		i++;
	 		var longy = color.length;


	 		console.log("#" + indexado + " recibira de " + ipAddress);
	 		var cadena = "#" + indexado + " recibira de  " + ipAddress;
	 		
	 		//logger = logger + indexado + " ;" + matricula + " ;" + apellido + " ;" + materno + " ;" + ipAddress + " ;" + correo + " ;" + celular + " ;" + respuesta + "\n";
			loggery = " ;" + indexado + " ;" + matricula  + ";" + ipAddress + "\n";
	 		extra = cadena + "\n";
	 		datos[j] = loggery;
	 		j++;


	 		if(i==longy){
	 			i = 0;
	 			

	 		}


		    

	 		
		    setTimeout(function() {
				swal({
					title: '¡' + nombre + '!' + ' Tú regalo será \n para:\n\n' + indexado,
					width: 600,
					type: 'success',
					padding: '3em',
					background: '#fff',
					backdrop: `
						rgba(0,0,123,0.4)
						url("./angel/nyan-cat.gif")
						center left
						no-repeat
						`
				})

		    }, 2500);
	 		







	 		var restantes = lockers.length;

			if(ipAddress){}
				
			else{
				ipAddress = "entusiasta";
			}
			//alert("hola" + " " + ipAddress);
				var my_cliente = document.getElementById("cliente");
				var my_cnt = document.getElementById("clie");
				my_cnt.style.textAlign = "center";

				setTimeout(function() {
					my_cliente.innerHTML = "¡Hola " + ipAddress + "! " + "Tú regalo es para: <br> " + indexado + "<br><br>";
					document.getElementById("botonG").innerHTML = "Generar, " + restantes;

					var audio1 = document.getElementById("audio_02");
					audio1.play();
				}, 2500);
				



		})()

	

	
	} // ajusta







	} // funcion
); // document





/*

(async function getIpAddress () {


const {value: ipAddress} = await swal({
  title: 'Ingresa tu nombre:',
  input: 'text',
  showCancelButton: true,
  inputValidator: (value) => {
    return !value && '¡Intentalo de nuevo!'
  }
})







	if(ipAddress){}
	
	else{
		ipAddress = "entusiasta";
	}
//alert("hola" + " " + ipAddress);
		var my_cliente = document.getElementById("cliente");
		var mouse1 = document.getElementById("mouse_1");
		var mouse2 = document.getElementById("mouse_2");

		my_cliente.innerHTML = "¡Hola " + ipAddress + ", " + "me alegra tenerte aquí!";

		mouse1.innerHTML = "¡" + ipAddress + " mueve el mouse sobre la imagen y el texto!";
		mouse2.innerHTML = "¡" + ipAddress + " mueve el mouse sobre la imagen y el texto!";
	



})()



*/