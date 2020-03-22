interface IMailTo{
  name: string;   // Nome do destinatário
  email: string; // email do destinatário
}
interface IMailMenssage{
  subject: string;         //Assunto do email
  body: string;           // Corpo do email
  attachment?: string[]; // Anexos
}

interface IMessageDTO{
  to: IMailTo;
  message: IMailMenssage;
}

interface IEmailService { 
  // Definindo que todos os que implementarem essa interface, devem obrigatoriamente possir os methods abaixo; 
  sendEmail(request: IMessageDTO): void;
}

// ? DTO : Significa "Data Transfer Object (Muito usado no DDD), ou seja Objeto de Tranferencia de Dados" 
class EmailService implements IEmailService {
  
  sendEmail({ to, message }: IMessageDTO){
    console.log(`Email enviado para ${to.name}: ${message.subject}`);
  }
}

export default EmailService;