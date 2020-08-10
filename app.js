const express = require('express');
const app = express();

app.get('/', (req, res) =>{
	res.send("Welcome Terminator");
});

app.listen(3000, () => {
	console.log('Log');
});


