const { Router } = require('express')
const router = Router()
const {registration, login} = require('../controllers/index')

// routes

router.post('/registration', registration);
router.post('/login', login);


module.exports = router