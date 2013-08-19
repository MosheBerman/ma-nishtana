////////////////////////////
//												//
// "Mah Nistanah" 				//
// Four Questions Script	//
//												//
// By Moshe Berman				//
// www.mosheberman.com		//
// moshefromsinai@gmail   //
//												//
// This code is a balance //
// between functionality 	//
// and keeping the code 	//
// from having any long		//
// lines for printing 		//
// and layout purposes.		//
//												//
////////////////////////////

//
//  Set Up Arrays 
//

var otherNightsVerbs = new Array();
var tonightVerbs = new Array();

otherNightsVerbs[0] = "eat 'chametz' or 'matzah'";
otherNightsVerbs[1] = "eat all kinds of herbs";
otherNightsVerbs[2] = "dip as many or as few times as we want";
otherNightsVerbs[3] = "sit or recline";

tonightVerbs[0] = "eat matzah";
tonightVerbs[1] = "eat bitter herbs";
tonightVerbs[2] = "dip exactly once";
tonightVerbs[3] = "recline";

function getOtherNightsVerb(questionNumber){
	return otherNightsVerbs[questionNumber];
}

function getTonightVerb(questionNumber){
	return tonightVerbs[questionNumber];
}

function currentQuestion(questionNumber){
	var question = "Why is this night different from all other nights?";
	question += "\n <br /> \n On all other nights we ";
	question += getOtherNightsVerb(questionNumber);
	question += " but tonight, we only ";
	question += getTonightVerb(questionNumber);
	question += ".";
	return question;
}

function askTheFourQuestions(){
	for(var thisQuestion = 0; thisQuestion < 4; thisQuestion++){
		document.getElementById("text").innerHTML +=  "\n <br /> \n";
		document.getElementById("text").innerHTML +=  "\n <br /> \n ";
		document.getElementById("text").innerHTML +=  currentQuestion(thisQuestion);
	}
}

askTheFourQuestions();