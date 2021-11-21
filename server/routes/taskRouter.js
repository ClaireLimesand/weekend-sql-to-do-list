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

router.get( '/', (req, res) => {
    console.log('in GET');
    const sqlText = 'SELECT * FROM "checklist" ORDER BY "id" ASC;';
    pool.query( sqlText )
        .then( dbResult => {
        console.log(`${dbResult.rows.length} rows to send.`)
        res.send(dbResult.rows );
    }).catch( dbErr => {
        console.error(dbErr);
        res.sendStatus( 500 );
    });
});

router.delete('/:id', (req, res) => {
    console.log('DELETE /songs/:id');
    console.log('req.params:', req.params);
    const taskIdToDelete = req.params.id;
    const sqlText = `
    DELETE FROM "checklist"
        WHERE "id"=$1;
    `;
    const sqlValues = [ taskIdToDelete ];

    pool.query(sqlText, sqlValues)
    .then((dbResult) => {
        res.sendStatus(200);
    })
    .catch((dbErr) => {
        console.error(dbErr);
        res.sendStatus(500);
    })
});

router.put('/:id', (req, res) => {
    console.log('req.params', req.params);
    console.log('req.body', req.body);
    const taskToUpdate = req.params.id;
    let currentStatus = req.body.status;
    currentStatus = true;
    const sqlText = `
    UPDATE "checklist"
        SET "status"=$1
        WHERE "id"=$2;
    `;
    const sqlValues = [
    currentStatus,
    taskToUpdate
    ]

    pool.query(sqlText, sqlValues)
    .then((dbResult) => {
        res.sendStatus(200);
    })
    .catch((dbErr) => {
        console.error(dbErr);
        res.sendStatus(500);
    })
});

module.exports = router;