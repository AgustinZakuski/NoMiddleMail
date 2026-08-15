export const config = {
    user: process.env.GMAIL_USER,
    password: process.env.GMAIL_APP_PASSWORD,
    receiver: process.env.DESTINATION_EMAIL,
    PORT: process.env.PORT || 3000,
    allowedOrigins: process.env.ALLOWED_ORIGINS,
    maxMsgLength: Number(process.env.MAX_MSG_LENGTH || 5000),
    maxRequestsPerIP: Number(process.env.MAX_REQUESTS_PER_IP || 1),
    windowMs: Number(process.env.WINDOW_MS || 86400000), // 24 hs
}