const Pool = require('pg').Pool;
const pool = new Pool({
 user:"zwkcdsxeyziptf",
    password:"476a8741200bca2b6b1850f1d16eb3c09b6468e950149a00a527712ba1ae6015",
    host:"ec2-54-243-92-68.compute-1.amazonaws.com",
    port:5432,
    database:"ddrtssbkilquim",
    URI:"postgres://zwkcdsxeyziptf:476a8741200bca2b6b1850f1d16eb3c09b6468e950149a00a527712ba1ae6015@ec2-54-243-92-68.compute-1.amazonaws.com:5432/ddrtssbkilquim"
   
});
module.exports = pool;
