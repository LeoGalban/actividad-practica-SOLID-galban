# Respuestas

## 1. SRP

**¿Qué responsabilidades tiene `UserManager`?**
Tres: valida el email, guarda el usuario en la lista y envía el correo de bienvenida. Son tres motivos distintos para cambiar la misma clase.

**¿Qué ocurre si cambia la forma de guardar datos?**
Hay que tocar `UserManager`, aunque la validación y el correo no cambien, y se puede romper algo que no tenía nada que ver. Separado, solo se cambia `UserRepository`.

**¿Qué clase podría encargarse de enviar correos?**
Una clase `EmailService`, que solo sepa mandar correos. `UserRegistrationService` la usa sin saber cómo funciona por dentro.
