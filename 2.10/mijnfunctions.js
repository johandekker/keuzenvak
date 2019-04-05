function afmelden() {
	var antwoord = confirm("wilt u zich afmelden?");
	if (antwoord == true) {
		alert("u word afgemeld");
	}
}

function begroeten() {
	//nog afmaken
	 var vandaag = new Date();
     uur = vandaag.getHours();	
	 if(uur => 0 && uur <= 11) {
		 alert("goedemorgen");
	 }
	 else if(uur >=12 && uur <=17){
		 alert("goedenmiddag");
	 } else {	
		 alert("goedenavond");
	 }
}

function dollarKoers() {
	return(1.36);
}
function euroKoers() {
	return(0.74);
}
function dollar_naar_euro(dollars){
	return (dollars * euroKoers());
}