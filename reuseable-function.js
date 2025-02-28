function incrementTask(id) {
    const incrementTask = parseInt(document.getElementById(id).innerText);
    const newIncrementTask = incrementTask + 1;
    document.getElementById('increment-task').innerText = newIncrementTask;
}

function decrementTask(id) {
    const taskCount = parseInt(document.getElementById(id).innerText);
    const newTaskCount = taskCount - 1;
    document.getElementById('task-count').innerText = newTaskCount;
    if(newTaskCount <= 0){
        alert('you have done...')
    }
}