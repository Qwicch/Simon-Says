const buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];
let userPattern = [];
let userChoosenColour;
let randomButton;
let userButton;
let randomNumber;
let randomChoosenColour;
let audio;


    $(document).on("keypress", function() {

        randomChoosenColour = buttonColours[nextSequence()];
        playSound(randomChoosenColour);

        gamePattern.push(randomChoosenColour);
        randomButton = $("#" + randomChoosenColour);
        randomButton.fadeIn(80).fadeOut(80).fadeIn(80);
    });


    $(".btn").on("click", function() {
        
        userChoosenColour = $(this).attr("id");
        userButton = $("#" + userChoosenColour);
        userPattern.push(userChoosenColour);
        playSound(userChoosenColour);
        userButton.fadeIn(80).fadeOut(80).fadeIn(80);
        animatePress(userButton);
        console.log(userPattern);
    });


    function nextSequence() {
        randomNumber = Math.floor(Math.random() * 4);
        return randomNumber;
    }


    function playSound(chooseSound) {
        audio = new Audio("sounds/" + chooseSound + ".mp3");
        audio.play();
    }

    function animatePress(currentColor) {
       
        $(currentColor).addClass("pressed");
     
        setTimeout(function () {
            $(currentColor).removeClass("pressed");
          }, 100);
     
    }

 



