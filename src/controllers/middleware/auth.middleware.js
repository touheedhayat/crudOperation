import JWT from "jsonwebtoken"

export const authenticated = async (req, res, next) => {
    console.log("Auth in",req.headers.authorization)

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){

        const token = req.headers.authorization.split(' ')[1];
        
        const decode = await JWT.decode(token)
        console.log(decode)
        if(!decode){
            return next({})   
        } 
    }
    
}
