var bigText = $("#big-title-text")
var subText = $("#little-sub-text")
var ansBox  = $("#ans-list")
var timeLeft
var counter
var score
var initals




startQuiz()

function startQuiz() {
    $(ansBox).empty()
    bigText.text("The Big Quiz")
    subText.text("Welcome to the quiz. Click start to begin.")
    ansBox.append( '<p onclick = "quest1()" class="btn btn-primary ans-btn">Start</p>' )
}

function quest1() {
    startTimer()
    bigText.text("Question 1")
    subText.text("What language was NOT uesd to make this website?")
    $(ansBox).empty()
    ansBox.append( '<p onclick = "nope()" class="btn btn-primary ans-btn">HTML</p>' )
    ansBox.append( '<p onclick = "nope()" class="btn btn-primary ans-btn">CSS</p>' )
    ansBox.append( '<p onclick = "nope()" class="btn btn-primary ans-btn">JavaSctipt</p>' )
    ansBox.append( '<p onclick = "yep(), quest2()" class="btn btn-primary ans-btn">Python</p>' )
}

function quest2() {
    bigText.text("Question 2")
    subText.text("What value type can't be stored in Javascript arrays?")
    $(ansBox).empty()
    ansBox.append( '<p onclick = "yep(), quest3()" class="btn btn-primary ans-btn">cats</p>' )
    ansBox.append( '<p onclick = "nope()" class="btn btn-primary ans-btn">numbers</p>' )
    ansBox.append( '<p onclick = "nope()" class="btn btn-primary ans-btn">strings</p>' )
    ansBox.append( '<p onclick = "nope()" class="btn btn-primary ans-btn">boolean</p>' )
}

function quest3() {
    bigText.text("Question 3")
    subText.text("CSS is used to___")
    $(ansBox).empty()
    ansBox.append( '<p onclick = "nope()" class="btn btn-primary ans-btn">make new elements</p>' )
    ansBox.append( '<p onclick = "nope()" class="btn btn-primary ans-btn">link to other websites</p>' )
    ansBox.append( '<p onclick = "yep(), allDone()" class="btn btn-primary ans-btn">style the website</p>' )
    ansBox.append( '<p onclick = "nope()" class="btn btn-primary ans-btn">make lists</p>' )
}

function allDone() {
    bigText.text("All done")
    subText.text("Your score was " + timeLeft)
    score = timeLeft
    timeLeft = 0
    $(ansBox).empty()
    ansBox.append('<input type="text" class="form-control me-2" placeholder="Enter Initals" id="initals">')
    ansBox.append( '<p onclick = "doCoolStuff(),showHS()" class="btn btn-primary ans-btn">Submit</p>' )
}

function startTimer() {
    timeLeft = 45;
    counter = document.getElementById('timer');
    var timer = setInterval(countdown, 1000);
    function countdown() {
    if (timeLeft <= -1) {
        clearTimeout(timer);
    } else {
        counter.innerHTML = timeLeft
        timeLeft--;
    }
    }
}

function yep() {
    console.log("yep")
}

function nope() {
    timeLeft = timeLeft - 5
    console.log("nope")
}

function doCoolStuff() {
    initals = document.getElementById("initals").value
}

function showHS() {
    
    bigText.text("High Scores")
    subText.text("Initals and High Scores")
    $(ansBox).empty()
    ansBox.append( '<p>Initals: ' + initals + '</p>')
    ansBox.append( '<p>Score: ' + score + '</p>')
    ansBox.append( '<p onclick = "startQuiz()" class="btn btn-primary ans-btn">Restart</p>' )
}