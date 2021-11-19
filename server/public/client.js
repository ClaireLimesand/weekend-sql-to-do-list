$(document).ready(onReady);

function onReady() {
    console.log('jquery working')
    $('#addButton').on('click', addTask);
}

function addTask() {
    const newTask = {
        task: $('#taskInput').val(),
        details: $('#detailsInput').val()
    }
    $.ajax({
        type: 'POST',
        url: '/tasks',
        data: newTask
    }).then((response) => {
        console.log('POST /tasks succeeded')
        $('#taskInput').val(''),
        $('#detailsInput').val(''),
        console.log('howdy')
    });
}

// function renderTasks() {
//     $.ajax({
//         type: 'GET',
//         url: '/tasks'
//     }).then((response) => {
//         $("#songsTableBody").empty();
//         console.log("GET /songs response", response);
//         for (let object of response) {
//         $('#addTask').append(`
//         <tr>
//             <td>${object.task}</td>
//             <td>${object.details}</td>
//         </tr>
//         `);
//         }
//     });
// }