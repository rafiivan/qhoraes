const express = require('express');
const app = express();

app.get('/', (req, res) =>{
	res.send("Welcome Terminator");
});


const port = process.env.port || 3000;
app.listen(port, () => {
	console.log('Log');
});


