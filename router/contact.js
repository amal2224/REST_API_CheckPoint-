const express =require("express");
const { addContact, getAllContact, getOneContact, deleteOneContact, updateOneContact, justForTest } = require("../controllers/contact.controllers");
const Contact = require("../models/Contact");
const router=express.Router();
router.get("/test",justForTest);
//CRUD
//methode: POST
//data: req.body
//url : http://localhost:6000/api/contact/
router.post("/",addContact);

//methode: GET
//data:
// url : http://localhost:6000/api/contact/
router.get("/",getAllContact);

//methode: Get one contact by id
//data: req.params
// url : http://localhost:6000/api/contact/:id
router.get("/:id",getOneContact);

//methode: Delete one contact by id
//data: id=req.params
// url : http://localhost:6000/api/contact/:id
router.delete("/:id",deleteOneContact);

//methode: Put one contact by id
//data: id=req.params +body(modification)
// url : http://localhost:6000/api/contact/:id
router.put("/:id",updateOneContact);

module.exports=router;