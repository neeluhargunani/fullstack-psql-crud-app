const Pool = require('pg').Pool;
const pool = new Pool({
    user:"postgres",
    password:"webcreationz@1234",
    host:"localhost",
    port:5432,
    database:"student_form"
});
module.exports = pool;