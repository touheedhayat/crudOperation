import likeModel from "../models/like.model.js";

export const likeAndDislike = async (req, res) => {
    
    try {
        const {userId, postId} = req.body
        const findUserLiked = await likeModel.findOne({
            userId,postId
        })

        findUserLiked?  await findUserLiked.deleteOne({_id:findUserLiked._id}) : await likeModel.create({
            userId,postId
        })

        res.json(findUserLiked)

    } catch (error) {
        res.json({message: Error(error)})
    }
}