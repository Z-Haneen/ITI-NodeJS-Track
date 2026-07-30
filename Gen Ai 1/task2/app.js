const express = require('express');
const app = express();

app.use(express.json());

const requestLogger = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
};

const apiKeyAuth = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  if (!apiKey || apiKey !== 'my-secret-api-key') {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
};

const validateUserInput = (req, res, next) => {
  const { name, email } = req.body;
  if (!name || typeof name !== 'string') {
    return res.status(400).json({ error: 'Invalid or missing name' });
  }
  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Invalid or missing email' });
  }
  next();
};

app.use(requestLogger);

app.post('/api/data', apiKeyAuth, validateUserInput, (req, res) => {
  res.status(200).json({ message: 'Success', data: req.body });
});

app.listen(3000, () => console.log('Server running on port 3000'));