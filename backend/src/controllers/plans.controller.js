const PlansModel = require("../models/plans.model");
const PlansService = require("../services/plans.service");

class PlansController {
  static async getAll(req, res, next) {
    try {
      const includeServices = req.query.include;
      const plans = await PlansService.getAllPlans( includeServices );
      res.json(plans);
      console.log('DESDE BACK: ', res.json(plans))
    } catch (error) {
      next(error);
    }
  }

  static async getById(req, res, next) {
    try {
      const { id } = req.params;
      const plan = await PlansService.getPlanById(id);
      res.json(plan);
    } catch (error) {
      next(error);
    }
  }

  static async create(req, res, next) {
    try {
      const {
        code,
        name,
        short_description,
        long_description,
        billing_period,
        price_cents,
        currency,
        is_active,
        stripe_product_id,
        stripe_price_id,
      } = req.body;
      const newPlan = await PlansService.createPlan({
        code,
        name,
        short_description,
        long_description,
        billing_period,
        price_cents,
        currency,
        is_active,
        stripe_product_id,
        stripe_price_id,
      });
      res.status(201).json(newPlan);
    } catch (error) {
        next(error);
    }
  }
}

module.exports = PlansController;