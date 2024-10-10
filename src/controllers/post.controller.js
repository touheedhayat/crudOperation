import postModel from "../models/post.model.js"
// import userModel from "../models/user.model.js"

export const userInput = async (req, res) => {

    try {

        const {tittle, description, imageURL } = req.body
        if(!tittle || !description){
            throw Error("Post Tittle and Description is required")
        }

        const savePost = await postModel.create( {

            tittle,
            description,
            // imageURL 
        })

        return res.json(req.body)
    }
     catch (error) {
        return res.json({message: Error(error)})
    }
    
}

export const getUserPost = async (req, res) => {
    
    try {
        
        const getPost = await postModel.find()
        return res.json(getPost)

    } catch (error) {
        return res.json({message: Error(error)})
    }
}

export const updatePost = async (req,res) => {
    try {
        // const {id} = req.params
        const { id, tittle, description} = req.body        
         const updator1 = await postModel.findByIdAndUpdate(

            {_id:id},
            {

                tittle: tittle,
                description: description,
            },
            {new: true}

        )
        return res.json(updator1)

    } catch (error) {
        return res.json({message: Error(error)})
    }
    
}

export const deletePost = async (req, res) => {
    
    try {
        const {id} = req.body
        const deletedPost = await postModel.findByIdAndDelete({_id:id})

        return res.json(deletedPost, "The post has been deleted")

        
    } catch (error) {
        return res.json({message: Error(error)})
    }
}

