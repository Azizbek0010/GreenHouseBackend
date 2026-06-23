const router = require('express').Router()
const ctrl   = require('../controllers/auth.controller')
const auth   = require('../middleware/auth')
const role   = require('../middleware/role')
const upload = require('../middleware/upload')

const setAvatarFolder = (req, res, next) => { req.uploadFolder = 'avatar'; next() }

router.post('/login',      ctrl.login)
router.post('/push-token', auth, ctrl.savePushToken)
router.post('/users',      auth, role('admin'), ctrl.createUser)
router.get('/users',       auth, role('admin'), ctrl.getUsers)
router.get('/kassalar',    auth, role('teplitsa', 'admin'), ctrl.getKassalar)
router.patch('/profile',   auth, setAvatarFolder, upload.single('avatar'), ctrl.updateProfile)

module.exports = router
