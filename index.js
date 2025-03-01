const completeBtnSection = document.querySelectorAll('#complete-btn-section div button ');

document.getElementById('task-count').innerText = completeBtnSection.length;

for (const btn of completeBtnSection) {
    btn.addEventListener('click', function (event) {
        alert('Task added')
        const buttonDisabled = event.target.setAttribute('disabled', 'true');
        const title = event.target.parentNode.parentNode.previousSibling.previousSibling.previousSibling.previousSibling;
        decrementTask('task-count');
        incrementTask('increment-task');

        const addedTask = document.getElementById('added-task');
        const createTaskHeading = document.createElement('p');
        createTaskHeading.classList.add('p-3', 'my-3', 'bg-blue-50', 'text-sm',);
        createTaskHeading.innerText = `You have Complete The Task ${title.innerText} at `;
        addedTask.appendChild(createTaskHeading)
    })
}

const changeBgColor = document.getElementById('change-bg-color');
changeBgColor.addEventListener('click', function () {
    const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'lightblue', 'tomato', 'golden', 'cyan'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});