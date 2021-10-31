exports.justForTest=(req,res)=>{res.send("test api")}
// ========================
exports.addContact=async (req,res)=>{
try {
    // ********
    // step avancer aprés get by id
    const findContact=await Contact.findOne({email:req.body.email})
    if(findContact){return res.status(400).send({msg:"email should be unique"});}
    // ********

     //create a new contact
    const newContact=new Contact(req.body);
    // req.body = objet , aprés l'importation chaque filds prend sont place dans la DB
    // save it in DB(save async method + promisses)
    await newContact.save();
    res.status(200).send({msg:"Add contact succ",contact:newContact});
} catch (error) {
    res.status(400).send({msg:"can not save the Contact",error})
}
}
// ===================================
exports.getAllContact=async (req,res)=>{
try {
        const listContact=await Contact.find();
    res.status(200).send({msg:"get all the contact",contacts:listContact})
} catch (error) {
    res.status(400).send({msg:"can not get Contact"})
}
}
// ===================================
exports.getOneContact=async(req,res)=>{
try {
    const FindContact=await Contact.findById(req.params.id);
    res.status(200).send({msg:"get it succ", contact:FindContact});
} catch (error) {
    res.status(400).send({msg:"can not get it"})
}
}
// ===================================
exports.deleteOneContact= async (req,res)=>{
    try {
        await Contact.deleteOne({_id:req.params.id})
        res.status(200).send({msg:"delete succ"})
    } catch (error) {
        res.status(400).send({msg:"can not delete it"})
    }
}
// ==================================
exports.updateOneContact=async (req,res)=>{
    try {
        const result=await Contact.updateOne({_id:req.params.id},{$set:{...req.body}});
        // nModified || modifiedCount if fama modification traja3 1 sinn traja3 0
        if(result.modifiedCount){return res.status(200).send({msg:"update contact succ"})}
        // else
        res.status(200).send({msg:"there is no modification"})
    } catch (error) {
        res.status(400).send({msg:"can not updated"})
    }
}
// ===================================