
function spusti(broj,e){

		e = e || window.event;
		e.stopPropagation();
			if(document.getElementById(broj).style.display === "initial")
		document.getElementById(broj).style.display="none";
			else 
		document.getElementById(broj).style.display ="initial";

}

function email(){
	var e = document.getElementById("email_adresa");
	var regex= /.*[@][a-zA-Z]*[.][a-zA-Z]*/;
	if(e.value !="ex:yugi@etf.unsa.ba" && !regex.test(e.value)){
		e.style.backgroundColor = "pink";
	}
	else 
		e.style.backgroundColor = "white";
}


function telefon(){
	var tel = document.getElementById("broj_telefona");
	var t = tel.value;
	var pom = true;
	for(i = 0 ; i < 12 ; i++){
		if(i === 0 || i === 1)
			if(t[i] != "0"){
				tel.style.backgroundColor = "pink"; 
				pom = false;
				break;
				alert("df");
			}
			else if(i === 2){
				if(t[i] != "3"){
				tel.style.backgroundColor = "pink"; 
				pom = false;
				break;
				}
			}
			else if(i === 3){
				if(t[i] != "8"){
				tel.style.backgroundColor = "pink"; 
				pom = false;
				break;
				}
			}
			else if(i === 4){
				if(t[i] != "7"){
				tel.style.backgroundColor = "pink"; 
				pom = false;
				break;
				}
			}
			else{
				if(t[i] != "0" && t[i] != "1" &&t[i] != "2" &&t[i] != "3" &&t[i] != "4" &&t[i] != "5" &&t[i] != "6" &&t[i] != "7" &&t[i] != "8" &&t[i] != "9" ){
				tel.style.backgroundColor = "pink"; 
				pom = false;
				break;
				}
			}				

	}
			if(pom === true){
			tel.style.backgroundColor = "white"; 
			}
}

function tekst(id_el){

	var sub = document.getElementById(id_el);
	if(sub.value.length === 0){
		sub.style.backgroundColor = "pink"; 
	}
	else sub.style.backgroundColor = "white"; 

}

function slova(id_el){
		var sub = document.getElementById(id_el);
			var regex= /^[a-zšđčćž]+$/i;;
	if(!regex.test(sub.value) || sub.value.length === 0){
		sub.style.backgroundColor = "pink"; 
	}
	else sub.style.backgroundColor = "white"; 

}


function provjeri(){
	var e = document.getElementById("email_adresa");
	var tel = document.getElementById("broj_telefona");
	var sub = document.getElementById("subject_p");
	var mes = document.getElementById("message");

	if(e.style.backgroundColor === "pink" || tel.style.backgroundColor === "pink" || sub.style.backgroundColor === "pink" || mes.style.backgroundColor === "pink")
	{
		alert("Niste unjeli ispravne podatke !");
	}
}

function password(){
	var p1 = document.getElementById("pass1");
	var p2 = document.getElementById("pass2");
	if(pass1.value != pass2.value || pass1.value === ""){
		pass2.style.backgroundColor = "red"; 

	}
	else 
				pass2.style.backgroundColor = "white"; 
}

function home_page(){
	window.location="HomePage.html";

}