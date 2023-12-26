/* // src/routes/messageRouter.js
const express = require('express');
const router = express.Router();
const MessageManager = require('../dao/models/MessageManager');

module.exports = () => {
  const messageManager = new MessageManager();

  router.get('/chat', async (req, res) => {
    try {
      const messages = await messageManager.getMessages();
      res.render('chat', { messages });
    } catch (error) {
      res.status(500).send('Internal Server Error');
    }
  });

  router.post('/chat', async (req, res) => {
    const { user, message } = req.body;
    try {
      await messageManager.addMessage(user, message);
      res.send('Message added successfully');
    } catch (error) {
      res.status(400).send(error.message);
    }
  });

  return router;
};
 */
// src/routes/messageRouter.js
const express = require('express');
const router = express.Router();
const MessageManager = require('../dao/models/MessageManager');

module.exports = () => {
  const messageManager = new MessageManager();

  router.get('/chat', async (req, res) => {
    try {
      const messages = await messageManager.getMessages();
      res.render('chat', { messages });
    } catch (error) {
      res.status(500).send('Internal Server Error');
    }
  });

  router.post('/chat', async (req, res) => {
    const { user, message } = req.body;
    try {
      await messageManager.addMessage(user, message);
      res.send('Message added successfully');
    } catch (error) {
      res.status(400).send(error.message);
    }
  });

  return router;
};
