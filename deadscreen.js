const mostRecentScore = localStorage.getItem('mostRecentScore');
const username = document.getElementById("usernameInput");
const submitBtn = document.getElementById("submitBtn");
let finalScore = document.getElementById("finalScore");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
console.log(highScores);
submitBtn.addEventListener('click', saveHighScore);

function setHighScores (highScores){
    for (i=0; i<5; i++){
        let hs = document.getElementById(`hs${i+1}`);
        let name = document.getElementById(`user${i+1}`);
        console.log(highScores[0].score);
        hs.textContent = highScores[i].score;
        name.textContent = highScores[i].name;
    }
}
setHighScores(highScores);
console.log(highScores);
finalScore.textContent = mostRecentScore;
highScoreField = highScores;
function saveHighScore(e){
    console.log("clicked the save button")
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value
    }
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(5);


    localStorage.setItem('highScores', JSON.stringify(highScores));

    console.log(highScores);
}

