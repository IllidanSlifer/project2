var users = JSON.parse(localStorage.getItem('users'));
var password = JSON.parse(localStorage.getItem('password'));

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

	if (localStorage["emails"]==undefined){
    localStorage.setItem("emails","[]");
	}
	var stock = JSON.parse(localStorage.emails);

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
	stock.push(newemail);

	localStorage.setItem('emails', JSON.stringify(stock));
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
		var stock = [];
			var asunt	=document.getElementById("asunt").value;
			var email	= document.getElementById("email").value;
			var messsaje=document.getElementById("contenido").value;
		emailAct = new Array();
		var objEmail = {
				"Asunt": asunt,
				"Email":email,
				"Contenido":messsaje,
			};

			stock.push(objEmail);

			localStorage.setItem('emails', JSON.stringify(stock));

	};


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
