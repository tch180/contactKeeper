const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

// connect db
connectDB();

//init middleware
app.use(express.json({ extended: false }));

// Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

app.get('/', function (req, res) {
  res.json(path.join(__dirname, 'public/index.html'));
});

//Serve Static assets in productions
// if (process.env.NODE_ENV === 'production') {
//   //set static folder
//   app.use(express.static('client/build'));

//   app.get('*', (req, res) =>
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
//   );
// }

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is up on running on ${PORT}`));
