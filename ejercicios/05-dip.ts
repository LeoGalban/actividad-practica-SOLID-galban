// Abstracción: cualquier forma de avisar al cliente
interface Notifier {
  send(to: string, message: string): void;
}

class EmailNotifier implements Notifier {
  send(to: string, message: string): void {
    console.log(`Correo para ${to}: ${message}`);
  }
}

class SmsNotifier implements Notifier {
  send(to: string, message: string): void {
    console.log(`SMS para ${to}: ${message}`);
  }
}

// Depende de la interfaz, no de una clase concreta
class OrderService {
  private notifier: Notifier;

  // La dependencia llega desde afuera
  constructor(notifier: Notifier) {
    this.notifier = notifier;
  }

  createOrder(customerEmail: string): void {
    console.log("Pedido creado");
    this.notifier.send(customerEmail, "Tu pedido fue creado");
  }
}

new OrderService(new EmailNotifier()).createOrder("ana@example.com");
