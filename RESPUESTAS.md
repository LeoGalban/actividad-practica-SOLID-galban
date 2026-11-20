# Respuestas

## 1. SRP

**¿Qué responsabilidades tiene `UserManager`?**
Tres: valida el email, guarda el usuario en la lista y envía el correo de bienvenida. Son tres motivos distintos para cambiar la misma clase.

**¿Qué ocurre si cambia la forma de guardar datos?**
Hay que tocar `UserManager`, aunque la validación y el correo no cambien, y se puede romper algo que no tenía nada que ver. Separado, solo se cambia `UserRepository`.

**¿Qué clase podría encargarse de enviar correos?**
Una clase `EmailService`, que solo sepa mandar correos. `UserRegistrationService` la usa sin saber cómo funciona por dentro.

## 2. OCP

**¿Qué parte debe modificarse para agregar pago con transferencia?**
En el original hay que tocar `PaymentProcessor`: agregar `"transfer"` al tipo y otro `case` al `switch`. Cada medio nuevo obliga a modificar una clase que ya funcionaba.

**¿Cómo podríamos representar un medio de pago?**
Con una interfaz `PaymentMethod` y una clase por cada medio (`CardPayment`, `CashPayment`, `TransferPayment`).

**¿Qué comportamiento común tienen todos los medios de pago?**
Todos pagan un monto: el método `pay(amount)`. Cada uno lo hace a su manera, pero `PaymentProcessor` solo necesita saber que existe.

## 3. LSP

**¿Por qué el área final no coincide con lo que espera `resizeRectangle`?**
Porque `Square` cambia el ancho y el alto juntos. Al hacer `setHeight(10)` también pisa el ancho, y queda 10x10 = 100 en vez de 5x10 = 50.

**¿Es siempre correcto modelar un cuadrado como un rectángulo por herencia?**
No. En geometría un cuadrado es un rectángulo, pero en código no se comporta igual: no se le puede cambiar un lado sin cambiar el otro. Entonces no puede reemplazar al rectángulo sin romper el programa.

**¿Qué abstracción común podríamos usar?**
Una interfaz `Shape` con `area()`. Es lo único que toda figura cumple, y cada figura se modela por separado.
