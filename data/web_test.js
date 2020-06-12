(async function getIpAddress () {

    /*
const ipAPI = 'https://github.com'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)
*/

/*
const {value: ipAddress} = await swal({
  title: 'Ingresa tu nombre:',
  input: 'text',
  showCancelButton: true,
  inputValidator: (value) => {
    return !value && '¡Intentalo de nuevo!'
  }
})
*/


		ipAddress = "entusiasta";

//alert("hola" + " " + ipAddress);
		var my_cliente = document.getElementById("cliente");
		var mouse1 = document.getElementById("mouse_1");
		var mouse2 = document.getElementById("mouse_2");

		my_cliente.innerHTML = "¡Hola " + ipAddress + ", " + "me alegra tenerte aquí!";

		mouse1.innerHTML = "¡" + ipAddress + " mueve el mouse sobre la imagen y el texto!";
		mouse2.innerHTML = "¡" + ipAddress + " mueve el mouse sobre la imagen y el texto!";




})()
