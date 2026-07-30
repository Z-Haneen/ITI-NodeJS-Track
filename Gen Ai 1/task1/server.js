const express = require('express'); 
const app = express(); 

// fix: add body parser middleware to parse json bodies
app.use(express.json());

app.post('/api/users', (req, res) => { 
  const { name, email } = req.body; 
  if (!name || !email) return res.status(400).send('Missing fields'); 
  res.status(201).json({ name, email }); 
}); 

// fix: change http method from post to get for fetching user by id
app.get('/api/users/:id', (req, res) => { 
  res.json({ id: req.params.id, name: 'Ahmed' }); 
}); 

// fix: update response message to reflect deletion instead of creation
app.delete('/api/users/:id', (req, res) => { 
  res.status(200).json({ message: 'Deleted successfully' }); 
}); 

// fix: pass number 3000 instead of string 'three thousand'
app.listen(3000, () => console.log('Running on port 3000'));