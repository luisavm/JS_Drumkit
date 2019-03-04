(() => {
	console.log("fired! ready to jam");

	function playDrumkitSound(event) {
		// debugger;
		// select the corresponding audio element and make it 
		let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
		// console.log(audio);
		// 
		// debugging/error handling
        // if we don't have a matching audio element, then kill the function
        // ! is a "not operator or a bang
        if(!audio) {return; } // return stops doce execution 
		// rewind audio on every click and make it play 
        audio.currentTime = 0;
		audio.play();
	}

	window.addEventListener("keydown", playDrumkitSound)
})();