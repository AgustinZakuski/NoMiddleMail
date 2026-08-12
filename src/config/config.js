export const config = {
    user = env.process.GMAIL_USER,
    password = env.process.APP_PASSWORD,
    receiver = env.process.DESTINATION_EMAIL,
    PORT = env.process.PORT || 3000
}