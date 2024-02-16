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


const newTask = { // объект, на который нужно переопределить методы
    tasks: [
        {
            id: 1,
            name: 'тест',
            description: 'описание',
            order: 0
        }
    ]
}


