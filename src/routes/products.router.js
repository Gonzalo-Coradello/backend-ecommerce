import { Router } from 'express'
import {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/products.controller.js'
import { passportCall, authorization } from '../middleware/auth.js'

const router = Router()

router.get('/', passportCall('current'), getProducts)
router.get('/:pid', passportCall('current'), getProduct)
router.post('/', passportCall('current'), authorization(['premium', 'admin']), addProduct)
router.put('/:pid', passportCall('current'), authorization(['premium', 'admin']), updateProduct)
router.delete('/:pid', passportCall('current'), authorization(['premium', 'admin']), deleteProduct)

export default router
