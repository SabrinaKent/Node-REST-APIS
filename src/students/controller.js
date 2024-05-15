const pool = require("../../db");
const {
  getAllStudents,
  checkIfEmailExists,
  addNewStudent,
  getStudentByIdQuery,
  deleteStudent,
  updateAStudent
} = require("./queries");



// get All Studnts 
const getStudents = (req, res) => {
  pool.query(getAllStudents, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};


// add new student in the db by checking email already not exists in the db 
const addStudent = (req, res) => {
  const { name, email, age, dob } = req.body;
  //check if email exists
  pool.query(checkIfEmailExists, [email], (error, results) => {
    if (results.rows.length > 0) {
      res.send("Email alredy exists.");
    }
    //add student to db
    pool.query(addNewStudent, [name, email, age, dob], (error, results) => {
      if (error) throw error;
      res.status(201).send("Student added Succesfully!");
    });
  });
};


//get student by id 
const getStudentById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(getStudentByIdQuery, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

//Delete/Remove student
const removeStudent=(req, res)=>{
    const id = parseInt(req.params.id)

    pool.query(deleteStudent, [id],(error, results)=>{
        const noStudentFound = !results.rows.length
        if(noStudentFound)
        res.send("Student does not exist in the db!")
    })

    pool.query(deleteStudent, [id],(error, results)=>{
        if(error) throw error
        res.status(200).send("student removed succesfully")
    })
}


// update student
const updateStudent =(req,res)=>{
    const id = parseInt(req.params.id);
    const {name}= req.body
    pool.query(getStudentByIdQuery,[id],(error,results)=>{
        const noStudentFound = !results.rows.length
        if(noStudentFound){
            res.send("Student does not exist in the db")
        }

        pool.query(updateAStudent, [name, id], (error, results)=>{
            if(error) throw error
            res.status(200).send("student updated succesfully")
        })
    })
}

module.exports = {
  getStudents,
  addStudent,
  getStudentById,
  removeStudent,
  updateStudent
};
