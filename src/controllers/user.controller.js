import userModel from "../models/user.model.js"
import  UserModel  from "../models/user.model.js"

 export const registerUser = async  function register ( req, res) {
    
 const {email, password, userName, fullName} = req.body

 try {
    
if (!email || !password || !userName ||!fullName){
    throw Error("Required fields are not available")
}
  const saveUser =  await UserModel.create({
    userName, fullName, email, password
  })

return res.json(saveUser)

}
catch (error) {
    return res.json({message: Error(error)})
}}

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