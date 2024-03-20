const tasks = [
    { name: 'task1', time: 1000 },
    { name: 'task2', time: 2000 },
    { name: 'task3', time: 3000 },
    { name: 'task4', time: 4000 },
    { name: 'task5', time: 5000 }
];

const allTasks = (taskList, interval) => {
    let delay = 0;
    taskList.forEach(task => {
        setTimeout(() => {
            console.log(task.name);
        }, delay);
        delay += task.time;
    });
}
allTasks(tasks, 1000);