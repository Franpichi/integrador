const Message = require('../schemas/messageSchema');

class MessageManager {
  async addMessage(user, message) {
    try {
      const newMessage = new Message({
        user,
        message,
      });

      await newMessage.save();
      return newMessage;
    } catch (error) {
      throw new Error('Error adding message');
    }
  }

  async getMessages() {
    try {
      const messages = await Message.find();
      return messages;
    } catch (error) {
      throw new Error('Error getting messages');
    }
  }
}

module.exports = MessageManager;
