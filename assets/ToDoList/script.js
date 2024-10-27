const taskInput = document.getElementById('task');
    const taskList = document.getElementById('taskList');
    
    function addTask() {
      const task = taskInput.value.trim();
      if (task === '') return;
      const li = document.createElement('li');
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.onclick = () => taskList.removeChild(li);
      li.textContent = task;
      li.appendChild(removeButton);
      taskList.appendChild(li);
      taskInput.value = '';
    }