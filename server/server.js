const express = require('express');

const app = express();
const PORT = 5000;

const taskRouter = require('./routes/taskRouter');

app.use(express.urlencoded({extended: true}));
app.use(express.static('server/public'));

app.use('/tasks', taskRouter);

app.listen(PORT, () => {
    console.log(`Server is running on`)
});