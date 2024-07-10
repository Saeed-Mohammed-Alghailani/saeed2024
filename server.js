const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));
// I'm a comment, u should pull me
app.get('/*', function(req, res){

    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
 // main is hereee!!!! before rebase, different
app.listen(PORT, () => {
    console.log(`Server is Running on port: ${PORT}`)
} )
