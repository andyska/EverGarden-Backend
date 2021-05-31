 const jwt = require ('jsonwebtoken');
//const User = require ('./models/usermodel')

const checkToken = async (req, res, next) =>{
    try{
   // const token = req.headers.authorization
    const token = req.headers.authorization.split(' ')[1];

    console.log('checkToken:',token)

    if (!token) {
        return res.status(403).json({message:'No token'})}
 
        const decoded = jwt.verify(token, 'secret')
        console.log('decoded.id', decoded.id ) 
        req.userId = decoded.id 
        
    
   /*  const user = await User.findById( req.userId)

    if (!user) {
        return res.status(404).json({message:'User not found'})} */
    
    next()}
    catch(error){
        return res.status(401).json({message: error})
    }
}

module.exports = checkToken 