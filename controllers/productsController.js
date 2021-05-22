const productsController = (Product) => {
  
    const getProducts = async (req,res) => {
      try {
        const {query} = req
        const response = await Product.find(query)
        if (response.length == 0){
          return res.status(202).json({message: 'No matches found'})
        } 
        else {
          return res.json(response) 
        }
      } 
      catch(err){
        console.log(err)
        res.status(500).json({message:"Internal Server Error"})
        throw err
      }
    }
    
    const postProducts = async (req,res) => {
      try {
        const product = new Product (req.body)
        await product.save()
        return res.status(201).json(product)
      }
      catch (err) {
        console.log(err)
        res.status(500).json({message:"Internal Server Error"})
        throw err
      }
    }
  
    const getProductById = async (req,res) => {
      try {
        const {params} = req
        const response = await Product.findById(params.productId)
        console.log("responseById:", response)
        if(response == null){
          return res.json({message: "No matches found"})
        }
        else {
          return res.json(response)
        }
      }
      catch (err){
        console.log(err)
        res.status(500).json({message:"Internal Server Error"})
        throw err
      }
    }
  /*
    const putBookById = async(req,res) => {
      try {
          const {params,body} = req
          const response = await Book.updateOne({
            _id: params.bookId
          }, {
            $set: {
              title: body.title,
              genre: body.genre,
              author: body.author,
              read:  body.read
            }
          })
        return res.status(202).json(response)
      }
      catch (err){
      console.log(err)
      res.status(500).json({message:"Internal Server Error"})
      throw err
      }
    }
  */
    const deleteProductById = async(req,res)=>{
       try{
      const {params} = req
      await Product.findByIdAndDelete(params.productId)
      return res.status(202).json({message:'Product succesfully deleted'})
      }
      catch (err) {
      console.log(err)
      res.status(500).json({message:"Internal Server Error"})
      throw err
      }
    }
    
  return {getProducts, postProducts, getProductById, deleteProductById}  // despues acordarme de agregar los demas contoladores en el return: getBookByID, putBookById,deleteBookById
  }
  
  module.exports = productsController