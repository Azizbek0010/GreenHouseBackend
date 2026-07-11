const router = require('express').Router()
const ctrl   = require('../controllers/qarz.controller')
const auth   = require('../middleware/auth')
const role   = require('../middleware/role')

router.post('/',           auth, role('kassa'), ctrl.create)
router.get('/',            auth,                ctrl.getAll)
router.patch('/:id/tolov', auth, role('kassa'), ctrl.tolov)
router.get('/:id',         auth,                ctrl.getOne)

module.exports = router
