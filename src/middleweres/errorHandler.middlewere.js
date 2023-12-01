export const errorHandler = (err,req,res,next) => {
    if(err.name === "notFound"){
        res.status(404).send(err.message)
        return
    }
    console.log(err)
    
    res.status(500).send("algo de errado aconteceu")
}