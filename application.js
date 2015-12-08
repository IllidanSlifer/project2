var users = JSON.parse(localStorage.getItem('users'));
var password = JSON.parse(localStorage.getItem('password'));
var guardado = new Array();

if (!users||(!password)) {
	users = ["inputEmail3"];
	password=["inputPassword3"];

}
//guarda el registro
function saveToLocalStorage() {
	if (localStorage["users"]==undefined)
    localStorage.setItem("users","[]");
	var stock = JSON.parse(localStorage.users);
	if(validarEmail(document.getElementById("inputEmail3").value)){
	var user = {

		"email": document.getElementById("inputEmail3").value,
		"password": document.getElementById("inputPassword3").value,
		"name": document.getElementById("inputName").value,
		"lastname": document.getElementById("inputLastName").value,
		"mobile": document.getElementById("inputMobile").value,
		"birthday": document.getElementById("inputBirthday").value
	}
	}else{
	   alert("Error: La dirección de correo es incorrecta.");
	   	return false;
	 	}
	stock.push(user);

	localStorage.setItem('users', JSON.stringify(stock));
 window.location.href = "Login-lml.html";
}


//guardar el correo
function saveToLocalStorageNew(){
	debugger
	if (localStorage["emails"]==undefined){
    localStorage.setItem("emails","[]");
	}
	if (JSON.parse(localStorage.getItem("guardado")) == null) {
		var guardado = [];
	}else{
			var guardado = JSON.parse(localStorage.getItem("guardado"));
	}
	if(validarCorreo()==true){
			var newemail = {

				"asunt": document.getElementById("asunt").value,
				"email": document.getElementById("email").value,
				"message": document.getElementById("contenido").value
		}
		}
	else{
	   	return false;
	 	}
	guardado.push(newemail);
	var cl = JSON.stringify(guardado);
	localStorage.setItem("guardado", cl);

 window.location.href = "Project-Main.html";
}


function validarCorreo(){

	if ((document.getElementById("asunt").value)==""||(document.getElementById("email").value)==""
		||(document.getElementById("contenido").value)=="") {
		return false;

	}else{
		return true;
	}
}

	function saveEmail(){
		debugger
		var guardado = JSON.parse(localStorage.getItem("guardado"));
		var table = document.getElementById("tblMail");
		for(i in guardado){
			var row = table.insertRow(1);
			var cell1 = row.insertCell(0);
			var cell2 = row.insertCell(1);
			var cell3 = row.insertCell(2);
			var cell4 = row.insertCell(3);
			cell1.innerHTML = guardado[i].asunt;
			cell2.innerHTML = guardado[i].email;
			$("<td />").html('<input type="checkbox"/>').appendTo(cell4);
			
		}
	}



function login(){
	var user = document.getElementById('inputEmail3').value;
	var pass = document.getElementById('inputPassword3').value;
	if (user == '' || pass == '') {
			return;
	}
	 else {
	 	var result = verificarUser(user, pass);
	 	if(validarEmail(document.getElementById("inputEmail3").value)==true)
	 	{
	 		if (result == true) {
	 		saveUser(user, pass);
	 		alert("Welcome");
			window.location = "Project-Main.html";
			return;
	 	}
	 	}else{
	 		    alert("Error: La dirección de correo es incorrecta.");

	 	}return false;


	}
};



function validarEmail(email) {
   if (email.includes("@")) {
   		return true;
   }return false;
}

function saveUser(email, password){
	userAct = new Array();
	var objUser = {
			User: 0,
			Pass: ""
		};
	objUser.User=email;
	objUser.Pass=password;
	userAct.splice(0, 1, objUser);
	localStorage['userAct']=JSON.stringify(userAct);
};
function verificarUser(email, password){
	var result = true;
	if (localStorage.getItem('users')) {

			var listaC = JSON.parse(localStorage['users']);
			for (var i = 0; i < listaC.length; i++) {
				if (listaC[i].email ==email && listaC[i].password == password) {
					result =true;
					return result;
				}

			}return false;
			return result;

	}
	else{
		return result;
	}
};
