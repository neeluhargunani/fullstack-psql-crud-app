const express = require('express');
const cors = require('cors');
const app = express();
const pool = require('./db');
const { restart } = require('nodemon');

const path = require("path");

// middlewares
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname,"frontend/build")));

app.use(function(req, response, next) {
    response.header("Access-Control-Allow-Origin"); // update to match the domain you will make the request from
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
//routes
//creating a new student
pool.connect((err)=>{
    if(err) throw err
    console.log("postgreesql Connected")
});
   
//get all students
 app.get("/students" ,async (req, res) =>{
    try
    {
const getstudents = await pool.query("SELECT * FROM student_data");
  console.log(getstudents)
 res.json(getstudents.rows)
    }catch(err)
    {
        console.log(err.message);
    }
 });

//get  student by id 
app.get("/students/:id" , async (req, res) =>{
    try {
    const {id} = req.params;
    const student = await pool.query("SELECT * FROM student_data WHERE std_id = $1", [id]);
    res.json(student.rows[0]);
    }catch(er)
    {
        console.log(err.message);
    }
})
// post or create new student
app.post("/students", async (req, res)=>{
   try{
         const {fullname} = req.body;
         const {email} = req.body;
        const {phone}= req.body;
        const {address} = req.body;
        const {course} = req.body;
        const {message} = req.body;
         const newStudent = await pool.query(
             "INSERT INTO student_data (fullname , email, phone, address,course, message) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *",
             [fullname, email, phone, address, course, message]
         );
         res.json(newStudent.rows[0]);
   }catch(err){
       console.log(err.message);
   }
});
//update students
app.put('/students/:id', async (req, res) =>{
    try
    {
    const {id} = req.params;
    const {fullname} = req.body;
    const {email} = req.body;
    const { phone} = req.body;
    const {address} = req.body;
    const {course} = req.body;
    const {message} = req.body;
    const updateStudent = await pool.query("UPDATE student_data SET fullname = $1, email = $2, phone = $3, address = $4, course= $5, message = $6 where std_id = $7 RETURNING *",
    [fullname, email, phone, address, course, message, id]
    );
    res.json("student data had been updated successfully")
    }catch(err)
    {
        console.log(err);
    }
  
});

//delete a task
app.delete('/students/:id', async (req, res) =>{
try 
{
const {id} = req.params;
const deleteStudent = await pool.query("DELETE FROM student_data WHERE std_id= $1", [id]);
res.json("students data has been dleted successfully ");
}catch(err)
{
    console.log(err);
}
})
if (process.env.NODE_ENV == "production"){
    //  server static content
    // npm run build
    app.use(express.static(path.join(__dirname,"frontend/build")));
 }
   console.log(__dirname);
   console.log(path.join(__dirname,"frontend/build"));

app.get("*", (req,res) => {
    res.sendFile(path.join(__dirname, 'frontend/build/index.html'));
});
// start server
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})