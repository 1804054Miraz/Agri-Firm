const express = require('express');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

const uri = "mongodb+srv://u1804054:u1804054@cluster0.gpnyllc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(cors());
app.use(bodyParser.json());

// Registration endpoint
app.post('/register', async (req, res) => {
  const { email, password } = req.body;

  try {
    await client.connect();
    const db = client.db('SE');
    const collection = db.collection('signin');

    // Check if the user already exists
    const existingUser = await collection.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Insert the user data into the collection
    await collection.insertOne({ email, password });

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  } finally {
    await client.close();
  }
});

// Sign-in endpoint (unchanged)
app.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  try {
    await client.connect();
    const db = client.db('SE');
    const collection = db.collection('signin');

    const user = await collection.findOne({ email, password });

    if (user) {
      res.status(200).json({ message: 'Sign-in successful', user });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  } finally {
    await client.close();
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
