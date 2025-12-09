const PlansModel = require("../models/plans.model");

class PlansService{
    static async getAllPlans(){
        const plans = await PlansModel.findAll();
        return plans;
    };

    static async getPlanById(id){
        const plan = await PlansModel.findById(id);
        if(!plan){
            const error = new Error("Plan not found");
            error.statusCode = 404;
            throw error;
        }
        return plan;
    }

    static async createPlan(data){
        // Aquí habría que hacer valiación de los datos que me vienen
        const plans = await PlansModel.createPlan(data);
        return plans;
    }
}

module.exports = PlansService;