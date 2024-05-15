const {Router} = require ('express')
const {getStudents,addStudent, getStudentById, removeStudent, updateStudent}= require ('./controller')

const router = Router()

router.get('/', getStudents)
router.post('/', addStudent)
router.get('/:id', getStudentById)
router.delete('/:id', removeStudent)
router.put('/:id', updateStudent)

module.exports= router