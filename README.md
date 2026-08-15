# NoMiddleMail

🇦🇷 [Español](#español) | 🇺🇸 [English](#english)

---

## Español

API REST para reemplazar servicios de formularios de contacto como Formspree. Recibe los datos de un formulario (nombre, email y mensaje) y los envía automáticamente por mail, con validación, protección anti-spam por rate limiting y filtrado de origen (CORS).

### Dependencias:
    > Express
    > Cors
    > Dotenv
    > Morgan
    > Helmet
    > Nodemailer
    > Express-validator
    > Express-rate-limit

### Necesario:
    > Tener instalada la extensión "REST Client" de VS Code para ejecutar las pruebas.
    > Tener una cuenta de Gmail con la verificación en dos pasos activada.
    > Generar una "contraseña de aplicación" en Gmail (myaccount.google.com/apppasswords) para usar como credencial SMTP.

### ENVs:
    > GMAIL_USER = tu_correo@gmail.com
    > GMAIL_APP_PASSWORD = la_clave_de_16_caracteres
    > DESTINATION_EMAIL = correo_donde_queres_recibir_los_mensajes
    > PORT = 3000
    > ALLOWED_ORIGINS = enlaces_permitidos_separados_por_comas
    > MAX_MSG_LENGTH = maximo_tamano_de_mensaje
    > MAX_REQUESTS_PER_IP = maximo_numero_de_solicitudes_por_ip
    > WINDOW_MS = tiempo_en_milisegundos_para_reiniciar_el_contador_de_solicitudes

### Instalación:
    > Instalación de dependencias (Copiar texto entre comillas y ejecutar en terminal sobre raíz del proyecto) => 
        "npm i".
    > Copiar el archivo de variables de entorno. Ver .env.example.
    > Completar el .env con tus credenciales reales de Gmail (usuario + contraseña de aplicación) y el resto de las variables.
    > Para probar los endpoints, abrir test.http con la extensión REST Client y ajustar las variables @baseUrl y 
        @allowedOrigin del comienzo del archivo según tu configuración.

### Ejecución:
##### El proyecto tiene definido:
        > "npm run dev" => Levanta el server en modo desarrollo, con recarga automática ("node --watch server.js").
        > Alternativamente, "node server.js" levanta el server sin modo watch.

### Endpoints:
    > GET  => /health | Estado del servidor.
    > POST => /contact/msg | Recibe { name, email, message } y envía el mail al DESTINATION_EMAIL configurado. Protegido con rate limiting y validación de datos.
    > 404  => Definido para cualquier ruta que no sea alguna de las anteriores.

### Seguridad:
    > CORS restringido a los orígenes definidos en ALLOWED_ORIGINS (whitelist). Los requests sin header Origin o desde un origen no permitido devuelven 403.
    > Rate limiting por IP en /contact/msg, configurable vía MAX_REQUESTS_PER_IP y WINDOW_MS.
    > Validación de datos con express-validator: name (2-100 caracteres), email (formato válido), message (5 a MAX_MSG_LENGTH caracteres).
    > Headers de seguridad HTTP agregados con Helmet.
    > Credenciales de Gmail manejadas vía contraseña de aplicación (no la contraseña real de la cuenta) y nunca versionadas (.env en .gitignore).

### Notas:
    > El campo replyTo del mail enviado se completa con el email de quien llenó el formulario, para poder responder directamente desde el cliente de correo sin exponer la dirección propia como remitente visible para terceros.
    > Pendiente: honeypot field en el formulario del frontend, como capa adicional anti-bot.

---

## English

Self-hosted REST API to replace contact-form services like Formspree. It receives form data (name, email, and message) and automatically sends it by mail, with validation, rate-limit-based anti-spam protection, and origin filtering (CORS).

### Dependencies:
    > Express
    > Cors
    > Dotenv
    > Morgan
    > Helmet
    > Nodemailer
    > Express-validator
    > Express-rate-limit

### Required:
    > VS Code "REST Client" extension installed, to run the tests.
    > A Gmail account with two-step verification enabled.
    > An "app password" generated in Gmail (myaccount.google.com/apppasswords) to use as the SMTP credential.

### ENVs:
    > GMAIL_USER = your_email@gmail.com
    > GMAIL_APP_PASSWORD = the_16_character_key
    > DESTINATION_EMAIL = email_where_you_want_to_receive_messages
    > PORT = 3000
    > ALLOWED_ORIGINS = comma_separated_allowed_origins
    > MAX_MSG_LENGTH = maximum_message_length
    > MAX_REQUESTS_PER_IP = maximum_number_of_requests_per_ip
    > WINDOW_MS = time_in_milliseconds_to_reset_the_request_counter

### Installation:
    > Install dependencies (copy the text between quotes and run it in a terminal from the project root) => 
        "npm i express cors dotenv morgan helmet nodemailer express-validator express-rate-limit".
    > Copy the environment variables file. See .env.example.
    > Fill in .env with your real Gmail credentials (user + app password) and the rest of the variables.
    > To test the endpoints, open test.http with the REST Client extension and adjust the @baseUrl and 
        @allowedOrigin variables at the top of the file according to your setup.

### Running the project:
##### The project defines:
        > "npm run dev" => Starts the server in development mode, with auto-reload ("node --watch server.js").
        > Alternatively, "node server.js" starts the server without watch mode.

### Endpoints:
    > GET  => /health | Server status.
    > POST => /contact/msg | Receives { name, email, message } and sends the mail to the configured DESTINATION_EMAIL. Protected with rate limiting and data validation.
    > 404  => Defined for any route other than the ones above.

### Security:
    > CORS restricted to the origins defined in ALLOWED_ORIGINS (whitelist). Requests without an Origin header, or from a non-allowed origin, get a 403.
    > Per-IP rate limiting on /contact/msg, configurable via MAX_REQUESTS_PER_IP and WINDOW_MS.
    > Data validation with express-validator: name (2-100 characters), email (valid format), message (5 to MAX_MSG_LENGTH characters).
    > HTTP security headers added with Helmet.
    > Gmail credentials handled via an app password (not the real account password), never committed (.env in .gitignore).

### Notes:
    > The replyTo field of the sent mail is filled with the sender's email, so you can reply directly from your mail client without exposing your own address as the visible sender to third parties.
    > Pending: honeypot field on the frontend form, as an additional anti-bot layer.
