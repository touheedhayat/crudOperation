import bcrypt from "bcrypt";
import userModel from "../models/user.model.js"
import  UserModel  from "../models/user.model.js"
import jwt from "jsonwebtoken"




 export const registerUser = async  function register ( req, res) {
    

 try {
    
    const {email, password, userName, fullName} = req.body

   const checkExistingUser =await userModel.findOne({ $or:[
    {email:email},
    { userName:userName}
   ] 
   })

  if (checkExistingUser){
     return res.json({message:"User Already exist"})
  } 

    const hashedPassword = await bcrypt.hash(password, 10) 


     !email || !password || !userName ||!fullName ? Error("Required fields are not available"): await UserModel.create({
            userName, fullName, email, password: hashedPassword
        })


        return res.json("User is created")

}
catch (error) {
    return res.json({message: Error(error)})
}}

// loginUser

export const loginUser = async (req, res ) => {

    try {
        const {userName, password}= req.body

        const checkForUser = await userModel.findOne({
            userName: userName,
        })

        const passwordCheck = await bcrypt.compare(password, checkForUser.password)

        if (!checkForUser || !passwordCheck){
         return res.json({message:"UserName or Password incorrect"})
        }

        
      const token = await jwt.sign({id:checkForUser._id}, 'khpofiqwerlfkdsvpiuiuihdffokjnsd')
            
      console.log(token)

        return res.json({message:`User Login Sucessfully: Token: ${token}`})
        


    } catch (error) {
        
       return res.json({message: error.message})
    }
    
    
}

export const getAllUsers = async (req, res) => {

    try {

        const UserDetails = await userModel.find()
        return res.json(UserDetails)        

    } catch (error) {
        return res.json({message: Error(error)})

    }

}

export const getUserById = async(req, res) =>{
    try {
        const {id} = req.params
        const user= await UserModel.findById(
            {
                _id: id 
            }
        )
        return res.json(user)

    } catch (error) {
        return res.json({message: Error(error)})

    }

}


export const updateUserId = async(req, res) =>{

    try {
       const {id} = req.params
       const {userName, fullName}= req.body
        const updateUser = await userModel.findByIdAndUpdate(

           { _id : id},
           { new: true },
           {
             userName: userName,
             fullName:fullName
           }
        )

        return res.json(updateUser)
    } catch (error) {
        return res.json({message: Error(error)})
    }
}


 export const deleteUser = async (req, res) => {

    try {

        const {id} = req.params
        const deleteUserId = await userModel.findByIdAndDelete(
            
            {_id:id},
            // { new: true }            
        )
      return res.json("This user is deleted")
        
    } catch (error) {

      return res.json({message: Error(error)})
        
    }
}


export const getUserFromTocken = async (req, res) => {
    return res.json(data)
        
}