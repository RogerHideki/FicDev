const { NutritionistModel } = require('../models/nutritionist-model');

class CreateNutritionistController {
    async create(request, response) {
        try {
            const { userId } = request;
            const { crn } = request.body;

            if (!crn) {
                return response.status(400).json({
                    error: 'CRN é obrigatório!'
                });
            }

            const nutritionistAlreadyExists = await NutritionistModel.findOne({
                where: { crn }
            });

            if (nutritionistAlreadyExists) {
                return response.status(400).json({
                    error: 'CRN já cadastrado!'
                });
            }

            const nutritionist = await NutritionistModel.create({
                crn,
                userId
            });

            return response.status(201).json(nutritionist);
        } catch (error) {
            return response.status(500).json({
                error: `Erro interno: ${error}`
            })
        }
    }
}

module.exports = new CreateNutritionistController();
