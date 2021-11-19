const pool = require('../modules/pool.js');
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    console.log('POST /tasks');
    console.log('req.body:', req.body);
    const newTask = req.body;
    const sqlText = `
        INSERT INTO "checklist"
            ("task", "details")
        VALUES
            ($1, $2);
        `;
    const sqlValues = [
        newTask.task,
        newTask.details,
    ];
    pool.query(sqlText, sqlValues)
    .then((dbRes) => {
        console.log('INSERT succeeded.');
        res.sendStatus(201);
    })
    .catch((dbErr) => {
        console.error('Error is: ', dbErr);
        res.sendStatus(500);
    });
});



module.exports = router;