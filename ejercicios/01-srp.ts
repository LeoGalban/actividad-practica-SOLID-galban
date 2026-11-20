interface User {
  username: string;
  email: string;
}

// Responsabilidad 1: validar los datos
class UserValidator {
  validate(email: string): void {
    if (!email.includes("@")) {
      throw new Error("El correo no es valido");
    }
  }
}

// Responsabilidad 2: guardar los usuarios
class UserRepository {
  private users: User[] = [];

  save(user: User): void {
    this.users.push(user);
  }
}

// Responsabilidad 3: enviar correos
class EmailService {
  sendWelcomeEmail(email: string): string {
    return `Email enviado a ${email}`;
  }
}

// Coordina las otras clases (composición), no hace el trabajo él mismo
class UserRegistrationService {
  private validator: UserValidator;
  private repository: UserRepository;
  private emailService: EmailService;

  constructor(validator: UserValidator, repository: UserRepository, emailService: EmailService) {
    this.validator = validator;
    this.repository = repository;
    this.emailService = emailService;
  }

  register(username: string, email: string): string {
    this.validator.validate(email);
    this.repository.save({ username, email });
    return this.emailService.sendWelcomeEmail(email);
  }
}

// Igual que el original: el archivo no imprime nada.
// Ejemplo de uso:
// const service = new UserRegistrationService(new UserValidator(), new UserRepository(), new EmailService());
// console.log(service.register("ana", "ana@example.com"));
