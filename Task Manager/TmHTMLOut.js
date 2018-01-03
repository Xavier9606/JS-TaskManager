// addTask("Цибуля", "22:00", "21:45", "1", "Іди сапать цибулю");
// addTask("Цибуля не жде!", "22:30", "22:15", "2", "Ану бігом,сапать і поливать");
// addTask("Откісон", "22:35", "22:34", "5", "Поработав, ну пора б і отдихнуть");
// addTask("Цибуля2", "22:00", "21:45", "1", "Іди сапать цибулю");
// // addTask("Цибуля не жде!2", "22:30", "22:15", "2", "Ану бігом,сапать і поливать");
// addTask({
//     taskName: "Откісон2",
//     time: "22:35",
//     timeToAlert: "22:34",
//     alertLevel: "5",
//     _toDo: "Поработав, ну пора б і отдихнуть"
// });

function showTasks() {
    getDB();
    sort();
    for (let counter = 0; counter < Tasks.length; counter++) {
        if (Tasks[counter].isDone === true) {
            document.write("<p>");
            document.write(JSON.stringify(Tasks[counter].id + ' '));
            document.write('DONE' + JSON.stringify(Tasks[counter].name + ' '));
            document.write(JSON.stringify(Tasks[counter].time + ' '));
            document.write('Коли нагадати: ' + JSON.stringify(Tasks[counter].timeToAlert + ' '));
            document.write('Рівень важливості: ' + JSON.stringify(Tasks[counter].alertLevel + ' '));
            document.write('Виконано: ' + JSON.stringify(Tasks[counter].timeWhenDone + ' '));
            document.write(JSON.stringify(Tasks[counter].toDo + ' '));
            document.write("</p>");
        }

        else {
            document.write("<p>");
            document.write(JSON.stringify(Tasks[counter].id + ' '));
            document.write(JSON.stringify(Tasks[counter].name + ' '));
            document.write(JSON.stringify(Tasks[counter].time + ' '));
            document.write('Коли нагадати: ' + JSON.stringify(Tasks[counter].timeToAlert + ' '));
            document.write('Рівень важливості: ' + JSON.stringify(Tasks[counter].alertLevel + ' '));
            document.write(JSON.stringify(Tasks[counter].toDo + ' '));
            document.write("</p>");

        }
    }
    document.write('<meta http-equiv="refresh">');
}