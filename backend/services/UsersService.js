const Users=require('../model/Users');
const bcrypt = require('bcrypt');
module.exports={
    create:(body)=>Users.create(body),

    find:()=>Users.find({is_active:true}),

    findOne: (id)=>Users.findById(id),
    
    update: (id,body)=>Users.findByIdAndUpdate(id,body,{new:true}),

    uploadPhoto: (user,url)=>{
    user.images.push(url)
    return user.save();
    },
        

    delete: (id)=>Users.findByIdAndDelete(id),

    findByEmail:(email)=>Users.findOne({email}),

    comparePasswords:(candidatePassword, password) => {
        return bcrypt.compareSync(candidatePassword, password);
      },
    
    addRole:(user,role)=> {
      Users.create(user.roles.push(role))
      return user.save();
    }
    }
