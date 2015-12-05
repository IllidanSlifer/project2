

var users = JSON.parse(localStorage.getItem('users'));
var password = JSON.parse(localStorage.getItem('password'));

if (!users||(!password)) {
	users = ["inputEmail3"];
	password=["inputPassword3"];

}
function saveToLocalStorage() {
	if (localStorage["users"]==undefined)
    localStorage.setItem("users","[]");
	//var stock = JSON.parse(localStorage.users);
	validarEmail
	var user = {
		var validar = validarEmail(email);
		"email": document.getElementById("inputEmail3").value,
		"password": document.getElementById("inputPassword3").value,
		"name": document.getElementById("inputName").value,
		"lastname": document.getElementById("inputLastName").value,
		"mobile": document.getElementById("inputMobile").value,
		"birthday": document.getElementById("inputBirthday").value
	};
	users.push(user);

	localStorage.setItem('users', JSON.stringify(users));
 window.location.href = "Login-lml.html";
}



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

function datos(){
debugger;
	var datos=document.getElementById("inputEmail3").value;
alert(datos);
}
function register(){
	debugger;
	var datos=document.getElementsByName("info").value;
	alert(datos);

}


function login(){	
	var user = document.getElementById('inputEmail3').value;
	var pass = document.getElementById('inputPassword3').value;
	if (user == '' || pass == '') {	
			return;
	}
	 else {
	 	var result = verificarUser(user, pass);
	 	var validar = validarEmail(email);
	 	if (result == true || validar==true) {
	 		saveUser(user, pass);
	 		alert("Welcome");
	 		window.close();
			window.open("Project-Main.html");
			return;
	 	}

	}	
};
function validarEmail(email) {
    expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if ( !expr.test(email) )
        alert("Error: La dirección de correo " + email + " es incorrecta.");
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
				if (listaC[i].inputEmail3 ==email && listaC[i].inputPassword3 == password) {				
					result =true;
					return result;
				}
			}
			return result;
		
	}
	else{
		return result;
	}
};

// var MYAPP = {
// 	year: 2015,
// 	month: 'feb',
// 	Client: function (firstName, lastName) {
// 	  this.firstName = firstName;
// 	  this.lastName = lastName;

// 	  this.save = function() {
// 	  	//insert into 
// 	  	console.log('Saving user', this.firstName, this.lastName);
// 	  	// save to localstorage
// 	  };
// 	},
// 	validateUser: function() {
// 		var year = 2020;


// 		var username = $('#username').val();
// 		var password = $('#password').val();
// 		debugger;
// 		var errorElement = jQuery('#error_msg');

// 		if (username == 'admin' && password == 'password') {
// 			console.log('logged in')
// 			errorElement.hide();
// 		} else {
// 			errorElement.html('Username or Password invalid').addClass('error').show();
// 		}	
// 	},
// 	saveClient: function() {
// 		var firstName = document.getElementById('firstName').value;
// 		var lastName = document.getElementById('lastName').value;

// 		var client1 = new MYAPP.Client(firstName, lastName);
// 		client1.save();
// 	},
// 	bindEvents: function() {
// 		//jQuery('#login-button').click(MYAPP.validateUser);

// 		jQuery('#save-client').bind('click',function(){
// 			MYAPP.saveClient();
// 		});


// 	},
// };

// jQuery(document).ready( function() {
// 	MYAPP.bindEvents();
// });
