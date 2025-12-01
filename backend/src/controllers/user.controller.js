const UserService = require("../services/user.service");

class UserController {
    static async getAll(req, res, next) {
        try {
            const users = await UserService.getAllUsers();
            res.json(users);
        } catch (error) {
            next(error);
        }
    }

    static async getById(req, res, next){
        try {
            const { id } = req.params;
            const user = await UserService.getUserById(id);
            res.json(user);
        } catch (error) {
            next(error);
        }
    }

    static async create(req, res, next){
        try{
            const {name, email} = req.body;
            const newUser = await UserService.createUser({name, email, password});
            res.status(201).json(newUser);
        }catch(error){
            next(error);
        }
    }
}

module.exports = UserController;