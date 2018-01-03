// addTask("Цибуля", "22:00", "21:45", "1", "Іди сапать цибулю");
// addTask("Цибуля не жде!", "22:30", "22:15", "2", "Ану бігом,сапать і поливать");
// addTask("Откісон", "22:35", "22:34", "5", "Поработав, ну пора б і отдихнуть");
// addTask("Цибуля2", "22:00", "21:45", "1", "Іди сапать цибулю");
// addTask("Цибуля не жде!2", "22:30", "22:15", "2", "Ану бігом,сапать і поливать");
// addTask("Откісон2", "22:35", "22:34", "5", "Поработав, ну пора б і отдихнуть");


function showTasksConsole() {
    getDB();
    sort();
    for (let counter = 0; counter < Tasks.length; counter++) {
        if (Tasks[counter].isDone === true) {
            console.log("DONE", Tasks[counter]);
        } else {
            console.log(Tasks[counter])
        }
    }
}


function find(UniqueId) {
    getDB();
    sort();
    for (let counter = 0; counter < Tasks.length; counter++) {
        if (Tasks[counter].UniqueId === UniqueId) {
            console.log(Tasks[counter]);
            break
        }
    }
}