const { Pool } = require("pg");

let pool;
if (process.env.NODE_ENV === 'production') {
	pool = new Pool({
		connectionString: process.env.DATABASE_URL,
		ssl: {
			rejectUnauthorized: false,
		},
	});
} else if (process.env.NODE_ENV === 'development') {
	pool = new Pool();
}

// const pool = new Pool();

module.exports = pool;