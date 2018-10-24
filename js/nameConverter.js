/**********
  
  The answers are stored in the `questions` array
  with the key `answer`. 
  e.g.-
  console.log(questions[0].answer)
  
 **********/

var questions = [
  {question:"What's your first name?"},
  {question:"What's your middle name?"},
  {question:"What's your last name?"}
];

isFinished = false;

/*
  do something after the questions have been answered
*/
var onComplete = () => {

    var h1 = document.createElement('h1');

    //////halloween name generator starts//////////

    var firstName = questions[0].answer.toLowerCase();
    var midName = questions[1].answer.toLowerCase();
    var lastName = questions[2].answer.toLowerCase();

    let hName = '';

    // checking datatype entered //
    if (fName[firstName[0]] === undefined || mName[midName[0]] === undefined || lName[lastName[0]] === undefined) {
        hName += "Either your device is HAUNTED or you have entered wrong DATATYPE.";
        h1.appendChild(document.createTextNode('Hellllloooooo! ' + hName));
    } else {
        hName += fName[firstName[0].toLowerCase()] + " " + mName[midName[0].toLowerCase()] + " " + lName[lastName[0].toLowerCase()];
        h1.appendChild(document.createTextNode('Hellllloooooo! ' + hName + " !! Happy Halloween"));
    }

    setTimeout(function() {
      register.parentElement.appendChild(h1)
      setTimeout(function() { h1.style.opacity = 1 }, 50)
    }, 1000);

    //audio booooooooo
    var hello = document.getElementById("hello");

    if (hello.duration > 0 && !hello.paused) {

        hello.pause();
        hello.currentTime = 0;
        hello.play();

    } else {

        hello.play();

    }

    isFinished = true;

};

(function(questions, onComplete) {
    let position = 0;

    var tTime = 100 // transition transform time from #register in ms
    var wTime = 200 // transition width time from #register in ms
    var eTime = 1000 // transition width time from inputLabel in ms

    // init
    // --------------
    if (questions.length == 0) {
        return
    }

    else {
        
        putQuestion()

        forwardButton.addEventListener('click', validate)

        inputField.addEventListener('keydown', function(e) {
            transform(0, 0)
            if (e.keyCode == 13) {
                validate()
            }
        })

        previousButton.addEventListener('click', function(e) {
            if (position === 0) {
                return
            }else {
                position -= 1
                hideCurrent(putQuestion)
            }
        })
}


    // functions
    // --------------

    // load the next question
    function putQuestion() {
        inputLabel.innerHTML = questions[position].question
        inputField.type = questions[position].type || 'text'
        inputField.value = questions[position].answer || ''
        inputField.focus()

        // info div
        var x = document.getElementById("info-div");

        if (position === 0) {
            previousButton.setAttribute("name", "person");
            // toggle info-div invisible
            x.style.display = "none";

        } else {
            previousButton.setAttribute("name", "arrow-back");
            // toggle info-div visible
            x.style.display = "block";
        }

        showCurrent()

    }

    // when submitting the current question
    function validate() {

        //stop validation if finished
        if(!isFinished) {

            var validateCore = function() {      
              return inputField.value.match(questions[position].pattern || /.+/);
            };

            if (!questions[position].validate) questions[position].validate = validateCore;

            // check if the pattern matches
            if (!questions[position].validate()) wrong(inputField.focus.bind(inputField));
            else ok(function() {

                // execute the custom end function or the default value set
                if (questions[position].done) questions[position].done();
                else questions[position].answer = inputField.value;

                ++position;

                // if there is a new question, hide current and load next
                if (questions[position]) hideCurrent(putQuestion);
                else hideCurrent(function() {
                    // remove the box if there is no next question
                    register.className = 'close';

                    onComplete();
                  
                });

            });

        }

    }


    // helper
    // --------------

    function hideCurrent(callback) {
        inputContainer.style.opacity = 0;
        inputLabel.style.marginLeft = 0;
        inputProgress.style.width = 0;
        inputProgress.style.transition = 'none';
        inputContainer.style.border = null;
        setTimeout(callback, wTime);
    }

    function showCurrent(callback) {
        inputContainer.style.opacity = 1;
        inputProgress.style.transition = '';
        inputProgress.style.width = '100%';
        setTimeout(callback, wTime);
    }

    function transform(x, y) {
        register.style.transform = 'translate(' + x + 'px ,  ' + y + 'px)';
    }

    function ok(callback) {
        register.className = '';
        setTimeout(transform, tTime * 0, 0, 10);
        setTimeout(transform, tTime * 1, 0, 0);
        setTimeout(callback, tTime * 2);
    }

    function wrong(callback) {
        register.className = 'wrong';
        // shaking motion
        for (let i = 0; i < 6; i++) {
            setTimeout(transform, tTime * i, (i % 2 * 2 - 1) * 20, 0);
            setTimeout(transform, tTime * 6, 0, 0);
            setTimeout(callback, tTime * 7);
        }

        //who's knocking
        var whosKnocking = document.getElementById("knock");

        if (whosKnocking.duration > 0 && !whosKnocking.paused) {

            whosKnocking.pause();
            whosKnocking.currentTime = 0;
            whosKnocking.play();

        } else {

            whosKnocking.play();

        }

    }

}(questions, onComplete));