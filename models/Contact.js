const mongoose=require("mongoose");
const {Schema} =mongoose;
// creation de model
const contactSchema=new Schema({
    name:
    {
        type:String,
        required:true,
    },
    lastName:String,
    email:
    {
        type:String,
        required:true,
    },
    phone:Number,
    adresse:String,
});

// create model in DB
// notre modele appelé : contact(just one contact) et avec une squelette contactSchema
// aprés mongoose il va crée une collection aux plurielle >contacts>contact
//notre modele est appeler "contact" 
module.exports=Contact=mongoose.model("contact",contactSchema);