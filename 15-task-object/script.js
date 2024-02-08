'use strict'

const toDoList = {
    tasks: [
        {
            title: 'Помыть посуду',
            id: 1,
            priority: 1
        }
    ],
    getTask: (title, id, priority) => {
        return toDoList.tasks.push({ title, id, priority });
    },
    removeTask: function (id) {
        const index = this.tasks.findIndex(el => el.id == id);
        if (index != -1) {
            toDoList.tasks.splice(index, 1);
            return toDoList.tasks;
        } else {
            console.log('Задачи с таким id не существует');
        }
    },
    updateData: function (id, newInfo) {
        const index = this.tasks.findIndex(el => el.id == id);
        if (newInfo != null && newInfo != '' && typeof (newInfo) === 'string') {
            this.tasks[index].title = newInfo;
        }
        if (newInfo != null && newInfo != '' && Number.isInteger(newInfo)) {
            this.tasks[index].priority = newInfo;
        }
        return this.tasks[index];
    },
    sortTasks: function () {
        return this.tasks.sort((a, b) => a.priority - b.priority);
    }
}

toDoList.getTask('Помыть машину', 2, 3);
toDoList.getTask('Полить цветы', 3, 1);
toDoList.getTask('Покормить кота', 4, 2);
console.log(toDoList.removeTask(3));
console.log(toDoList.removeTask(7));
console.log(toDoList.updateData(1, 'Тестовая задача')); // метод двояко поставлен в качестве задачи, я ориентировась на чек-лист задач
console.log(toDoList.updateData(1, 3));
console.log(toDoList.sortTasks());
