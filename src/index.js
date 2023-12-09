// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqqIK_i-I2uUCrkv3rLD_pQX_icc_BvOM",
  authDomain: "microservices-db4ab.firebaseapp.com",
  projectId: "microservices-db4ab",
  storageBucket: "microservices-db4ab.appspot.com",
  messagingSenderId: "244539160275",
  appId: "1:244539160275:web:d4ad8c5ac567cd3c908626",
  measurementId: "G-3112GFYX92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

// const app = express();
const port = process.env.PORT || 3001;
const secretKey = 'your-secret-key'; // Replace with a strong, random secret key

app.use(bodyParser.json());

// Mock user data (in a real-world scenario, use a database)
const users = [
    { id: 1, username: 'user1', password: 'password1' },
    { id: 2, username: 'user2', password: 'password2' },
  ];
// Register a new user
app.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ username, password: hashedPassword });
    res.status(201).send('User registered successfully.');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Login and generate a JWT token
app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    // const { username, password } = req.query;
    // const hashedPassword = await bcrypt.hash(password, 10);
    const user = users.find((user) => user.username === username);
    if ( !user || !(await bcrypt.compare( password, user.password )) ) {
      return res.status(401).send( 'Invalid credentials.' );
    }

    const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Authentication Service listening at http://localhost:${port}`);
});
