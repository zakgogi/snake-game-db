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
};

module.exports = HighScore;