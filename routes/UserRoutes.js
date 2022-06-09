const express=require('express');
const controller=require('../controllers/userController');
const router=express.Router();

// app.use(express.json())
router.get('/',controller.geyAllUsers);
router.get('/:id/orders',controller.getUserOrders);
router.get('/:id',controller.getUserById);
router.get('/:email/:password',controller.Login);
router.put('/:id',controller.updateUser);
router.post('/',controller.addNewUser);
router.delete('/:id',controller.deleteUser);

module.exports=router;

