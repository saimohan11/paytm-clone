import Routes from 'express'
// import user_route from './user_route.js'
import { signin, signup } from '../controllers/user.js';
const router = Routes()

router.post('/user', signup);
router.post('/signin',signin)

export default router;