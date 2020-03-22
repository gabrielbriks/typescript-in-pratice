import { Request, Response } from 'express';
import EmailService from "../services/EmailService";

const users = [
   {
     name: 'Gabriel', email: 'gabriel@briks.com.br'
   },
 ]
 
 export default {
  async index(req: Request, res: Response){
    return res.json(users);
  },

  async create(req: Request, res: Response){
    const emailService = new EmailService();
    
    emailService.sendEmail({
      to: 
      { 
        name: 'Gabriel Briks', 
        email: 'gabriel@briks.com.br'
      },
      message:
      {
        subject: 'Bem vindo ao Briks Coins',
        body: 'Seja bem-vindo'
      }
    })
    return res.send('Sent');
  }
 };