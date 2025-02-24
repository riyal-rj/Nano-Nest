import express from 'express';
import { protectedRoute } from '../middleware/auth.middleware.js';
import { addToCart, clearCartItems, getAllProdsFromCart, removeAllFromCart, updateQuantity,  } from '../controllers/cart.controller.js';


const router=express.Router();

router.get('/',protectedRoute,getAllProdsFromCart);
router.post('/',protectedRoute,addToCart)
router.delete('/',protectedRoute,removeAllFromCart);
router.put('/:id',protectedRoute,updateQuantity);
router.patch('/clear-cartItems',protectedRoute,clearCartItems);

export default router;