const express = require('express');
const app = express();


app.use('/api/addition', require('./addition'));
app.use('/api/multiplication', require('./multiplication'));

// const PORT = process.env.PORT || 5000;

app.listen(8000, () => console.log(`Server running on port 8000...`));