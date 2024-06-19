const express = require("express");
const app = express();

app.get('/', (request, resource) => {
    resource.json({ info: 'Done'});
});

const port = 22111;

app.listen(port, (info) => {
    console.log(info);
    console.log('Server started on port: ' + port);
});


