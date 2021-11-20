$(document).ready(onReady);

function onReady() {
    console.log('jquery working')
    $('#addButton').on('click', addTask);
    $('#taskList').on('click', '.deleteButton', deleteTask);
    $('#taskList').on('click', '.completeBox', completeTask);
    renderTasks()
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
        // $('#taskList').on('click', '.deleteButton', deleteTask);
        renderTasks()
    });
}

function renderTasks() {
    $.ajax({
        type: 'GET',
        url: '/tasks'
    }).then((response) => {
        $("#taskList").empty();
        console.log("GET /songs response", response);
        for (let object of response) {
        $('#taskList').append(`
        <tr>
            <td>${object.task}</td>
            <td>${object.details}</td>
            <input type="checkbox">
            <td><input type="checkbox" class="completeBox" data-id="${object.id}" data-status="${object.status}"></td>
            <td><button class="deleteButton" data-id="${object.id}">Delete Task</button></td>
        </tr>
        `);
        }
    });
}

function deleteTask() {
    console.log('in Delete')
    const taskIdToDelete = $(this).data('id');
    $.ajax({
        type: 'DELETE',
        url: `/tasks/${taskIdToDelete}`
    }).then((response) => {
        console.log(response);
        renderTasks();
    })
};

function completeTask() {
    console.log('tashi delek')
    const taskToComplete = $(this).data('id');
    const completeStatus = $(this).data('status');

    console.log('taskToComplete', taskToComplete);
    console.log('completeStatus', completeStatus);
    $.ajax({
        type: 'PUT',
        url: `/tasks/${taskToComplete}`,
        data: { status: completeStatus }
    }).then((res) => {
        renderTasks();
    }).catch((err) => {
        console.error(err);
    })
}