
import favoriteModel from "../models/favorite.model.js"

export const createFavPost = async (req,res) => {
    
    try {
        const {userId, postId} = req.body
        const finduser = await favoriteModel.findOne({
       
            userId,postId
         })
         
         if (finduser){
            throw new Error("this post is already exist in your fav list");
         }
        const createFavList  = await favoriteModel.create({
            postId,
            userId
        })

        res.json( createFavList);

    } catch (error) {
        return res.json({meassage:error.message})
      
    }
}

export const deleteFavPost =  async (req, res) => {
    
    try {
        const {id}= req.params

        const deleteFromFav = await favoriteModel.findByIdAndDelete({
            
            _id:id
        })
        res.json("You unfav post")

    } catch (error) {
        
        return res.json({meassage:error.message})

    }
}

    export const getAllFavUsersById = async (req, res) => {

        try {
            const {id}= req.params
            const getAllFavUsers = await favoriteModel.find({
                userId: id,
            })

        
            return res.json(getAllFavUsers) 

        } catch (error) {
          return  res.json({message: error.meassage})
        }
    }







