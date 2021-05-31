const Pool = require('pg').Pool;
require("dotenv").config();

const devConfig =`postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`;
    
const proConfig =  process.env.DATABASE_URL //heroku addon


const pool = new Pool({
<<<<<<< HEAD
    connectionString:
    process.env.NODE_ENV === "production" ? proConfig : devConfig
=======
 user:"zwkcdsxeyziptf",
    password:"476a8741200bca2b6b1850f1d16eb3c09b6468e950149a00a527712ba1ae6015",
    host:"ec2-54-243-92-68.compute-1.amazonaws.com",
    port:5432,
    database:"ddrtssbkilquim",
    URI:"postgres://zwkcdsxeyziptf:476a8741200bca2b6b1850f1d16eb3c09b6468e950149a00a527712ba1ae6015@ec2-54-243-92-68.compute-1.amazonaws.com:5432/ddrtssbkilquim"
   
>>>>>>> 76d910dd179f1e58c725e831393f5a46be03c6e7
});
module.exports = pool;
