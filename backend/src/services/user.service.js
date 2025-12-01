const UserModel = require("../models/user.model");

class UserService {
    
    static async getAllUsers() {
        const users = await UserModel.findAll();
        return users;
    }

    static async getUserById(id){
        const user = await UserModel.findById(id);
        if(!user){
            const error = new Error("User not found");
            error.statusCode = 404;
            throw error;
        }
        return user;
    }

    static async createUser(data){
        // Aquí habría que hacer validación de los datos que me vienen
        const user = await UserModel.create(data);
        return user;
    }
}

module.exports = UserService;