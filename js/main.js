function getData() {


    let works = document.querySelector('#works').value;
    let Container = document.querySelector('.Container');

    // div
    let containerTask = document.createElement('div');
    containerTask.className = 'container-task';
    Container.appendChild(containerTask);

    if(containerTask.onclick = true){
        clickTask();
    }else{
        return false
    }

    function clickTask (){
        containerTask.onclick = function(){
            containerTask.style.background = '#6c757d67';
            Delete.style.background = '#17a3b867';
        }
    }


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