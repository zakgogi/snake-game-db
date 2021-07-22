window.onload = function (){
    const mostRecentScore = localStorage.getItem('mostRecentScore');
    let finalScore = document.getElementById("finalScore");
    finalScore.textContent = mostRecentScore;
    getHighScores();
}


const username = document.getElementById("usernameInput");
const submitBtn = document.getElementById("submitBtn");
let finalScore = document.getElementById("finalScore");
submitBtn.addEventListener('click', getCurrentScores);

async function getHighScores(){
    let dbHighScores = await fetch("http://localhost:3000/scores");
    let scoreJson = await dbHighScores.json();
    console.log(scoreJson);
    renderHighScores(scoreJson.highscores);
};

function renderHighScores(data){
    //make sure data is in correct order
    data.sort((a, b) => {
        scoreA = a.score;
        scoreB = b.score;
        return scoreB - scoreA;
    });
    //make sure data is length 5
    data.slice(0,5); 
    for (i=0; i<data.length; i++){
        let hs = document.getElementById(`hs${i+1}`);
        let name = document.getElementById(`user${i+1}`);
        hs.textContent = data[i].score;
        name.textContent = data[i].name;
    }
}

async function getCurrentScores(e){
    e.preventDefault();
    let dbHighScores = await fetch("http://localhost:3000/scores");
    let scoreJson = await dbHighScores.json();
    saveHighScore(scoreJson.highscores);
}

function saveHighScore(data){
    const mostRecentScore = localStorage.getItem('mostRecentScore');
    //make sure data is in correct order
    data.sort((a, b) => {
        scoreA = a.score;
        scoreB = b.score;
        return scoreB - scoreA;
    });
    //make sure data is length 5
    data.slice(0,5);
    if (mostRecentScore > data[4].score){
        makePostRequest(mostRecentScore);
    } else {
        console.log("your score didn't make the cut..")
    }
};

async function makePostRequest(highScore){
    try {
        let userName = document.getElementById('usernameInput');
        let toSend = { 
            name: userName.value,
            score: highScore
        }
        const options = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(toSend)
        }
        console.log(options.body);
        const response = await fetch('http://localhost:3000/scores', options);
        window.location.reload();
    } catch (error) {
        console.log(error);
    }
}



