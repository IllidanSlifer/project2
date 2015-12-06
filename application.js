var users = JSON.parse(localStorage.getItem('users'));
var password = JSON.parse(localStorage.getItem('password'));

if (!users||(!password)) {
	users = ["inputEmail3"];
	password=["inputPassword3"];

}
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

function saveToLocalStorageNew(){
debugger;
	if (localStorage["emails"]==undefined){
    localStorage.setItem("emails","[]");
	}
	var stock = JSON.parse(localStorage.emails);
	if(validarCorreo()==true){

		}
	else{
	   	return false;
	 	}
	stock.push(correo);

	localStorage.setItem('emails', JSON.stringify(stock));
 window.location.href = "Project-Main.html";
}

function saveEmail(asunt, email){
	emailAct = new Array();
	var objEmail = {
			Asunt: "",
			Email: ""
		};
	objEmail.Asunt=asunt;
	objEmail.Email=email;
	emailAct.splice(0, 1, objEmail);
	localStorage['emailAct']=JSON.stringify(userAct);
};

function loadUsers() {

	// read users from localstorage
	// loop users
	var user_html = "";
	for (var i = 0; i < users.length; i++) {
		// add users to the table
		var u = users[i];
		user_html = user_html + "<tr><td>"+"<button>click</button>"+"</td><td>"+
		u.password+"</td></tr>";
	}

	$('#users_table').html(user_html);

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

function validarCorreo(){

	if ((document.getElementById("asunt").value)==""||(document.getElementById("email").value)==""
		||(document.getElementById("contenido").value)=="") {
		return false;
		
	}else{
		return true;
	}
}

function validarEmail(email) {
   if (email.includes("@")) {
   		return true;
   }return false;
}
var email = 'me@example.com';
validarEmail(email);

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
