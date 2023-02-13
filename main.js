const express = require('express');
const app = express();


app.use('/api/addition', require('./routes/api/addition'));
app.use('/api/multiplication', require('./routes/api/multiplication'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));