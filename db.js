const Pool = require('pg').Pool;
const pool = new Pool({
    user:"rkpolnfemcoiex",
    password:"c7627581880e947aad913b03b5f3f09c4eddcb783603d7c9563fd26ae2e018af",
    host:"ec2-3-212-75-25.compute-1.amazonaws.com",
    port:5432,
    database:"da85e7t5v78frf",
    URI:"postgres://rkpolnfemcoiex:c7627581880e947aad913b03b5f3f09c4eddcb783603d7c9563fd26ae2e018af@ec2-3-212-75-25.compute-1.amazonaws.com:5432/da85e7t5v78frf"
   
});
module.exports = pool;