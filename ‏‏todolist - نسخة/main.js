const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
const status = JSON.parse(localStorage.getItem('status')) || [];

const show_menu = () => {
    console.log(`Task Manager Menu:
    1- Add Task
    2- View Tasks
    3- Toggle Task Completion
    4- Edit Task
    5- Delete Task
    6- Search
    7- Exit
`);
}
show_menu();
let input = prompt("Enter your choice (1-7):");
while (input !== '7') {  
    switch (input) {
        case '1': {
            let task_name = prompt("Enter the name of the task:");
            tasks.push(task_name)
            status.push('Not Completed')
            console.log(`Task added : ${task_name}`)
            break;
        }
        case '2': {
            tasks.length === 0 ? console.log("Task List Is Empty") :
                console.log('   Task                 Status         ')
            tasks.forEach((element,index) => {
                console.log(`${index + 1} - ${element}            ${status[index]}                    `);
            });
            break;
        }
        case '3': {
            let Toggle = prompt("Enter the Number of the task to toggle:");
            if (Toggle > 0 && Toggle <= tasks.length) {
                const index = Toggle - 1;
                status[index] = (status[index] === "Not Completed") ? "Completed" : "Not Completed";            
                console.log(`${tasks[index]} - ${status[index]}`);
            } else {
                console.log("Invalid task number.");
            }            
            break;
        }
        case '4': {
            let Edit = prompt("Enter the Number of the task to Edit:");
            if (Edit > 0 && Edit <= tasks.length) {
                const index = Edit - 1;
                let Edit_description = prompt("Enter The New Description:");
                tasks[index] = Edit_description;
                
                console.log(`${tasks[index]}`);
            } else {
                console.log("Invalid task number.");
            } 
            break;
        }
        case '5': {
            let deleteTask = prompt("Enter the Number of the task To Deleted :");
            if (deleteTask > 0 && deleteTask <= tasks.length) {
                delet = tasks[(deleteTask - 1)];
                tasks.splice((deleteTask-1), 1);  
                status.splice((deleteTask-1), 1);                
                console.log(`Task ${delet} has been deleted.`);
            } else {
                console.log("Invalid task number.");
            } 
            break;
        }
        case '6': { 
            let search1 = prompt("Search:");
            
            let search = tasks.filter(task => task.includes(search1));
            if (search.length > 0) {
                search.forEach((element, index) => {
                    console.log(`${index + 1} - ${element}\n`);
                });
            }
            else {
                console.log("No results found.");
            }
            break;
        }    
        default: {
            console.log('Invalid choice, please choose between 1 and 7.');
            break;
        }
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
    localStorage.setItem('status', JSON.stringify(status));
    input = prompt("Enter your choice (1-7):");
    show_menu();
}
console.log('Exiting Task Manager....');
