const AppError = require("../utils/AppError")


class UserController{
   async create(request, response){
        const { name, email, password} = request.body;

    if(!name){
        throw new AppError("Nome é obrigatório")
    }
        
        return response.status(201).json();
    }
}


module.exports = UserController;