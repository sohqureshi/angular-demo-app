const express = require('express');
const app = express();
app.use(express.json());

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  if (email === 'john@example.com' && password === 'john@123') {
    res.json({ token: 'mock-token', user: { email } });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

app.get('/api/items', (req, res) => {
  setTimeout(() => {
    res.json([
      { id: 1, name: 'Item One', description: 'Description for item one.' },
      { id: 2, name: 'Item Two', description: 'Description for item two.' },
      { id: 3, name: 'Item Three', description: 'Description for item three.' }
    ]);
  }, 1000); // 1.2 seconds delay
});

app.listen(3000, () => console.log('API server running on port 3000'));
