import { createMsg } from '../services/contact.service.js';

export const postMsg = async (req, res) => {
    const msgData = req.body;
    if (!msgData.name || !msgData.email || !msgData.message) {
        return res.status(400).json({ errMsg: "Message data is missing" });
    }
    try {
        const newMsg = await createMsg(msgData);
        return res.status(201).json({ msg: "Message sent successfully", data: newMsg });
    } catch (error) {
        console.error("Error creating message:", error);
        return res.status(500).json({ errMsg: "Internal server error" });
    }
};
