const getAllStudents= 'SELECT * FROM students'
const checkIfEmailExists= 'SELECT FROM students WHERE email =$1'
const addNewStudent = 'INSERT INTO students (name, email, age, dob) VALUES ($1,$2,$3,$4)'
const getStudentByIdQuery = 'SELECT * FROM students WHERE id=$1'
const deleteStudent = 'DELETE FROM students WHERE id=$1'
const updateAStudent = 'UPDATE students SET name = $1 WHERE id = $2'





module.exports={getAllStudents, checkIfEmailExists, addNewStudent, getStudentByIdQuery,deleteStudent, updateAStudent}