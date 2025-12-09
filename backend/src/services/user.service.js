const UserModel = require("../models/user.model");

// TODA LA LÓGICA DE NEGOCIO HA DE IR AQUÍ (YANN). LA INTENCIÓN DE ESTE ARCHIVO ES NO ENSUCIAR EL MODELO CON FILTROS EXCESIVOS, ETC. SI TENGO QUE BUSCAR UN USUARIO QUE TIENE EL PELO ROJO, POR EJEMPLO, LO HAGO AQUÍ
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