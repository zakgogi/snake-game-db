const db = require ('../dbConfig')

class HighScore {
    constructor(data){
        this.id = data.id
        this.name = data.name
        this.score = data.score
    }

    static get all() {
        return new Promise (async (resolve, reject) => {
            try {
                const scoreData = await db.query(`SELECT * FROM scores;`)
                const scores = scoreData.rows.map(d => new HighScore(d))
                resolve(scores);
            } catch (err) {
                reject("Error retrieving score")
            }
        })
    }

    static create(data){
        return new Promise (async (resolve, reject) => {
            try {
                let scoresToDeleteTable = await db.query('SELECT * FROM scores ORDER BY score LIMIT 1;');
                let scoreToDelete = scoresToDeleteTable.rows[0].id;
                let deleteQuery = await db.query(`DELETE FROM scores WHERE id=${scoreToDelete}`) ;
                let scoresData = await db.query('INSERT INTO scores (name, score) VALUES ($1, $2) RETURNING *;', [data.name, data.score]);
                let newScore = new HighScore(scoresData.rows[0]);
                resolve (newScore);
            } catch (err) {
                reject('Error creating new high score');
            }
        });
    }
};

module.exports = HighScore;