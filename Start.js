
const targetDiv = document.getElementById("answer1");
const btn = document.getElementById("question1");
btn.onclick = function () {

   
	if(targetDiv.style.display !== "none"){
		targetDiv.style.display = "none";
        document.getElementById("fo").src="img/plus.png";
       
	}else{
		targetDiv.style.display = "block";
        document.getElementById("fo").src="img/multiply.png";
        
	}
};

const question2 = document.getElementById("answer2");
const question2btn = document.getElementById("question2");
question2btn.onclick = function () {
	if(question2.style.display !== "none"){
		question2.style.display = "none";
        document.getElementById("fo1").src="img/plus.png";
	}else{
		question2.style.display = "block";
        document.getElementById("fo1").src="img/multiply.png";
	}
};

const question3 = document.getElementById("answer3");
const question3btn = document.getElementById("question3");
question3btn.onclick = function () {
	if(question3.style.display !== "none"){
		question3.style.display = "none";
        document.getElementById("fo2").src="img/plus.png";
        
	}else{
		question3.style.display = "block";
        document.getElementById("fo2").src="img/multiply.png";
	}
};
const question4 = document.getElementById("answer4");
const question4btn = document.getElementById("question4");
question4btn.onclick = function () {
	if(question4.style.display !== "none"){
		question4.style.display = "none";
        document.getElementById("fo3").src="img/plus.png";
	}else{
		question4.style.display = "block";
        document.getElementById("fo3").src="img/multiply.png";
	}
};

const question5 = document.getElementById("answer5");
const question5btn = document.getElementById("question5");
question5btn.onclick = function () {
	if(question5.style.display !== "none"){
		question5.style.display = "none";
        document.getElementById("fo4").src="img/plus.png";
	}else{
		question5.style.display = "block";
        document.getElementById("fo4").src="img/multiply.png";
	}
};

const question6 = document.getElementById("answer6");
const question6btn = document.getElementById("question6");
question6btn.onclick = function () {
	if(question6.style.display !== "none"){
		question6.style.display = "none";
        document.getElementById("fo5").src="img/plus.png";
	}else{
		question6.style.display = "block";
        document.getElementById("fo5").src="img/multiply.png";
	}
};

var audio2= new Audio("Audio/Audio1.mp3");

function bhagwan()
{
audio2.play();
audio2.playbackRate=2.5;
window.open("https://raw.githack.com/Ayush1234567434324/weebgo/main/weeb.html");



}
