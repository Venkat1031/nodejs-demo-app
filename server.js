const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send("Node.js CI/CD Pipeline Demo is Working!");
});

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
