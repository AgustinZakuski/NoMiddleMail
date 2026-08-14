export const config = {
    user: process.env.GMAIL_USER,
    password: process.env.APP_PASSWORD,
    receiver: process.env.DESTINATION_EMAIL,
    PORT: process.env.PORT || 3000,
    allowedOrigins: process.env.ALLOWED_ORIGINS,
    maxMsgLength: process.env.MAX_MSG_LENGTH || 5000,
    maxRequestsPerIP: process.env.MAX_REQUESTS_PER_IP || 1,
    windowMs: process.env.WINDOW_MS || 86400000, // 24 hs
}