(() => {
    console.log('fired!');

    function logkeyCode(event) {
        //debugger;
        // event is an object that is generated by any event
        //ir contains all of the info about the event, what
        //element is triggered it, where it occurred on the page etc
        console.log(event.keyCode);
        const currentKey = document.querySelector(`div[data-key="${event.keyCode}"]`);

        //if there is no matching div with key
        if (!currentKey) return;

        //play
        currentKey.classList.add('playing');

        // play the audio that goes with the duv
        let currentAudioClip = document.querySelector(`audio[data-key="${event.keyCode}"]`);
        currentAudioClip.currentTime = 0;
        currentAudioClip.play();

    }

    function removePlayingClass() {
        // listen for the transition to end, and then remove the playing class from the current keys

        // i need a transition that only fires once so that I only run this function once
        if (event.propertyName !== "transform") return;

        //event.target of the current event -> in this case the div, becuase thats the element that's transitioning
        console.log('transform transition is done!');
        event.target.classList.remove('playing');

    }

    const keys = Array.from(document.querySelectorAll('.key'));
    keys.forEach(key => key.addEventListener('transitionend', removePlayingClass));

    //try to get the keyboard keypress events
    window.addEventListener("keydown", logkeyCode);

})();