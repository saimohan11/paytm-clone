import Routes from 'express'
// import user_route from './user_route.js'
import { getUser, signin, signup, updateUser } from '../controllers/user.js';
import { authMiddleWare } from '../middleware/middleware.js';
import { balance, transfer } from '../controllers/account.js';

const router = Routes()

router.post('/signup', signup);
router.post('/signin',signin);
router.put('/',authMiddleWare,updateUser); //update
router.get('/balance',authMiddleWare,balance);
router.post('/transfer',authMiddleWare,transfer);
router.get("/bulk",getUser);

export default router;