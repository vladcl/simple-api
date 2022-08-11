import User from "../database/schemas/User";
import { Request, Response } from "express";

class UserController {

    async find(request: Request, response: Response) {
        try {
            const users = await User.find();
            return response.json(users);
        } catch (error) {
            return response.status(500).json({
                error: "Algo deu errado, tente novamente por favor!",
                message: error,
            });
        }
    }

    async create(request: Request, response: Response) {
        const { name, email, password } = request.body

        try {

            const userExists = await User.findOne({ email });

            if (userExists) {
                return response.status(400).json({
                    error: "Oooopss!",
                    message: "Usuário já cadastrado!",
                });
            }

            const user = await User.create({
                name,
                email,
                password
            });

            return response.json(user);

        } catch (error) {
            return response.status(500).json({
                error: "Registration Failed!",
                message: error,
            })
        }
    }

}

export default new UserController;