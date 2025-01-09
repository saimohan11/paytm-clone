import Routes from 'express'
// import user_route from './user_route.js'
import { signup } from '../controllers/user.js';
const router = Routes()

router.post('/user', signup);

export default router;