import Message from './messageModel';

const saveMessage = async (username, text) => {
    try {
        const newMessage = new Message({user: username, message: text});
        await newMessage.save();
        console.log("Message saved");
    } catch (e) {
        console.error("Error saving message: ", e);
    }
};

const getMessages = async () => {
    try {
        const messages = await Message.find();
        console.log("Messages fetched");
        return messages;
    } catch (e) {
        console.error("Error fetching messages: ", e);
    }
};

// The saveMessage and getMessages functions can be exported and used
// in your request handlers to interact with your MongoDB database.

export {saveMessage, getMessages};
