// document.addEventListener("DOMContentLoaded",restart())
	const wordlist = [
	"DOUBT",
	"march",
	"sense",
	"error",
	"embox",
	"owner",
	"malls",
	"leave",
	"quest",
	"forum",
	"travel",
	"instagram"
	];

	let answer	= "";
	let guessed = [];
	let word_progress = null;

	function randomWord() {
		answer  = wordlist[Math.floor(Math.random()*wordlist.length)].toUpperCase(); 
		console.log(answer);
	};

	

	function keyboard() {
		let buttonHTML = "ABCDEFGHIJKLNMOPQRSTUVWXYZ".split("").map(letter=>
			`<button class="btn btn-lg btn-info m-2" id="${letter}"	onclick="guess('` + letter +`')" >${letter}</button>`).join("")
		document.getElementById("keyboard").innerHTML = buttonHTML
	}

	function guess(letter_chose) {
		guessed.indexOf(letter_chose) === -1? guessed.push(letter_chose):null
		document.getElementById(letter_chose.toUpperCase()).setAttribute("disabled",true) 

		if (answer.indexOf(letter_chose) >= 0) {
			guessed_Word();
			end();
		}
	}




	function end() {
		if (word_progress == answer) {
			document.getElementById("keyboard").innerHTML = "YOU GUESSED THI WORD"
		}
	}



	function guessed_Word() {

		word_progress = answer.split("").map(letter =>(
			guessed.includes(letter)?letter:" _ ")).join("");
		document.getElementById("word_progress").innerHTML = word_progress;
	}

	function restart() {
		guessed = []
		word_progress = null;
		randomWord();
		keyboard();
		guessed_Word();
	}

	document.addEventListener("DOMContentLoaded", function(){
	  restart();
	});

	// guessed = []
	// word_progress = null;
	// randomWord();
	// keyboard();
	// guessed_Word();




