export const validateBody = (schema) => {
    return (req,res,next) => {
        const data = req.body
        const validate = schema.validate(data)
        if(validate.error){
            res.status(422).send(validate.error.message)
        }else {
            next()
        }
    }
}