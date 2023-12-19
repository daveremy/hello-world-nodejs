const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

process.on('SIGINT', function() {
  console.log("Caught interrupt signal");
  // Perform necessary cleanup
  process.exit();
});
