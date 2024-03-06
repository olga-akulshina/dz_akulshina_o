'use strict'

const toDoList = { //объект с методами из прошлого домашнего задания
    tasks: [
        {
            title: 'Помыть посуду',
            id: 1,
            priority: 1
        }
    ],
    getTask(title, id, priority) {
        return this.tasks.push({ title, id, priority });
    },
    removeTask: function (id) {
        const index = this.tasks.findIndex(el => el.id == id);
        if (index != -1) {
            this.tasks.splice(index, 1);
        } else {
            console.log('Задачи с таким id не существует');
        }
    },
    updateData: function (id, newInfo) {
        const index = this.tasks.findIndex(el => el.id == id);
        if (newInfo !== null && newInfo !== '' && typeof (newInfo) === 'string') {
            this.tasks[index].title = newInfo;
        }
        if (newInfo !== null && newInfo !== '' && Number.isInteger(newInfo)) {
            this.tasks[index].priority = newInfo;
        }
        return this.tasks[index];
    },
    sortTasks: function () {
        return this.tasks.sort((a, b) => a.priority - b.priority);
    }
}


const newTask = {
    tasks: [
        {
            title: 'тест',
            id: 1,
            priority: 2
        }
    ]
}

const getTasks1 = toDoList.getTask.call(newTask, 'Помыть машину', 2, 3);
const getTasks2 = toDoList.getTask.apply(newTask, ['Погулять с собакой', 3, 1]);
console.log(newTask.tasks);

const bindRemoveTasks = toDoList.removeTask.bind(newTask);
bindRemoveTasks(2);
console.log(newTask.tasks);

const updateDatas = toDoList.updateData.bind(newTask);
updateDatas(3, 'Погулять с котом');
console.log(newTask.tasks);

const sortFullTasks = toDoList.sortTasks.call(newTask);
console.log(newTask.tasks);