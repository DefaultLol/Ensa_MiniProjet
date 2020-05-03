const mongoose = require('mongoose')
const today=new Date();
const Notification = new mongoose.Schema({

   senderEtudiant : {
    type: mongoose.Schema.Types.ObjectId,
    ref:'Etudiant'
   },
   senderProf:{
       type:mongoose.Schema.Types.ObjectId,
       ref:'prof'
   },
   receiver : {
    type: String
    },
   
   content : {
       type : String  
   },

   read:{
       type:Boolean,
       default:false
   },
   
   postDate:{
    type:String,
    default:today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear()
}

  })
  
  module.exports = mongoose.model('Notification', Notification)