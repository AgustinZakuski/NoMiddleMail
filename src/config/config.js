export const config = {
    user: process.env.GMAIL_USER,
    password: process.env.APP_PASSWORD,
    receiver: process.env.DESTINATION_EMAIL,
    PORT: process.env.PORT || 3000,
    allowedOrigins: process.env.ALLOWED_ORIGINS
}