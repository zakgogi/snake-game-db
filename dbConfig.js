const { Pool } = require("pg");

let pool;
if (process.env.NODE_ENV === 'development'){
  pool = new Pool();
} else {
  pool = new Pool({
		connectionString: process.env.DATABASE_URL,
		ssl: {
			rejectUnauthorized: false,
		},
	});
}
// const pool = new Pool();

module.exports = pool;