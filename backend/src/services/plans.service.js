const PlansModel = require("../models/plans.model");

class PlansService{
    static async getAllPlans(includeServices){
         console.log("includeServices en service =>", includeServices, typeof includeServices);
        const plans = await PlansModel.findAll();
        if(includeServices === "services"){
            return "incluye servicios";
        }
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
    
    static async getAllPlanServices(){
        const plan_services = await PlansModel.getAllPlanServices();
        return plan_services;
    }
}

module.exports = PlansService;