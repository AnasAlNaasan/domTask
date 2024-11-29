function getData() {


    let works = document.querySelector('#works').value;
    let Container = document.querySelector('.Container');

    // div
    let containerTask = document.createElement('div');
    containerTask.className = 'container-task';
    Container.appendChild(containerTask);

    // p
    let task = document.createElement('p');
    task.id = 'task';
    task.innerHTML = works;
    containerTask.append(task);

    // delete
    let Delete = document.createElement('button');
    Delete.className = "delete";
    Delete.innerHTML = 'Delete';
    containerTask.appendChild(Delete);
    Delete.addEventListener('click',function(){
        containerTask.style.display = 'none'
    })

    return false;
}