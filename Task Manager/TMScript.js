//     Завдання з зірочкой: Якщо таки вирішиш зробити для цього інтерфейс на хтмл,
//     то це має працювати без перезавантаження сторінки.


var currentdate = new Date();
var datetime = currentdate.getDate() + "/"
    + (currentdate.getMonth() + 1) + "/"
    + currentdate.getFullYear() + " @ "
    + currentdate.getHours() + ":"
    + currentdate.getMinutes() + ":"
    + currentdate.getSeconds();


//Перевіряє чи локальне хранилище браузера не пусте і якщо пусте то
//поміщає туди перший елемент для адекватної роботи усього.
//Адже в коді немає жодної глобальної змінної (окрім часу)
//Точніше вона є віртуально і знаходиться в локальному сховищі
function getDB() {

    Tasks = JSON.parse(localStorage.getItem('TasksList'));
    if (Tasks === null) {
        Tasks = [];
        localStorage.setItem('TasksList', JSON.stringify(Tasks));
    }

}

//Отримує унікальне айді для кожного таска, зберігається в локалстореджі
function getDBID() {

    taskUniqueIdCounter = JSON.parse(localStorage.getItem('taskPersonalIdCounter'));

    if (taskUniqueIdCounter === null) {
        taskUniqueIdCounter = -1;

        localStorage.setItem('taskPersonalIdCounter', JSON.stringify(taskUniqueIdCounter));
    }

}

//обновлює Базу Даних в локал стореджі відповідно до того, що відбулося всередині скріпта
function updateDB() {
    //try/catch не работає в JS
    try {
        localStorage.setItem('TasksList', JSON.stringify(Tasks));
    } catch (err) {
        if (err == QUOTA_EXCEEDED_ERR) {
            alert("Пам'ять переповнено!");
        }
    }
    getDB();
}

//Створити новий таск
function addTask(taskName, time, timeToAlert, alertLevel, toDo) {
    updateDB();
    getDBID();

//     class Task {
//         constructor(taskName, time, timeToAlert, alertLevel, toDo){
//         this.id= Tasks.length;
//         this.UniqueId= taskUniqueIdCounter + 1;
//         this.timeAdded= datetime;
//         this.name= taskName;
//         this.time= time;
//         this.timeToAlert= timeToAlert;
//         this.alertLevel= alertLevel;
//         this.toDo= toDo;
//         this.isDone= false;
//         this.timeWhenDone= '';}
//     }
// let NewTask= new Task;
//

    newTask = {

        id: Tasks.length,
        UniqueId: taskUniqueIdCounter + 1,
        timeAdded: datetime,
        name: taskName,
        time: time,
        timeToAlert: timeToAlert,
        alertLevel: alertLevel,
        toDo: toDo,
        isDone: false,
        timeWhenDone: '',
    };
    Tasks.push(newTask);
    localStorage.setItem('taskPersonalIdCounter', JSON.stringify(Tasks[Tasks.length - 1].UniqueId));
    sort();

    updateDB()
}

//Редагувати існуючий таск
function editTask(taskId, newName, time, timeToAlert, alertLevel, toDo) {
    updateDB();


    let editTaskId = taskId;

    if (newName !== "") {
        if (newName !== undefined) {
            Tasks[editTaskId].name = newName
        }
    }
    if (time !== "") {
        if (time !== undefined) {
            Tasks[editTaskId].time = time
        }
    }
    if (timeToAlert !== "") {
        if (timeToAlert !== undefined) {
            Tasks[editTaskId].time = timeToAlert
        }
    }
    if (alertLevel !== "") {
        if (alertLevel !== undefined) {
            Tasks[editTaskId].alertLevel = alertLevel;
        }
    }
    if (toDo !== "") {
        if (toDo !== undefined) {
            Tasks[editTaskId].toDo = toDo;
        }
    }

    updateDB()
}

//Видалити таск
function deleteTask(taskId) {
    updateDB();

    Tasks.splice(taskId, 1);
    for (let newCounter = taskId; newCounter < Tasks.length; newCounter++) {
        Tasks[newCounter].id -= 1;
    }
    updateDB()
}

//Присвоїти таску статус "Виконано" та перемістити вниз списку
function taskDone(taskId) {
    updateDB();

    let taskDoneId = taskId;

    Tasks[taskDoneId].isDone = true;
    Tasks[taskDoneId].timeWhenDone = datetime;

    sort();

    updateDB()
}

//Видалити усі виконані завдання
function deleteDone() {
    updateDB();
    for (let counter = 0; counter < Tasks.length; counter++) {
        if (Tasks[counter].isDone === true) {
            deleteTask(counter);
            counter = -1;
        }
    }
    updateDB();
}

//Присвоїти таску статус "Не виконано"
function taskUnDone(taskId) {
    updateDB();

    Tasks[taskId].isDone = false;
    Tasks[taskId].timeWhenDone = '';

    sort();

    updateDB();
}

//Видалити усі не виконані таски
function deleteUnDone() {
    updateDB();
    for (let counter = 0; counter < Tasks.length; counter++) {
        if (Tasks[counter].isDone === false) {
            deleteTask(counter);
            counter = -1;
        }
    }
    updateDB();
}

//Видалити усі таски
function deleteAll() {
    Tasks = [];
    updateDB();
}

//Поміняти місцями 2 таска за індексом (Тільки виконані або тільки не виконані)
function relocateTask(id1, id2) {
    updateDB();

    //підфунція що апускається тільки після кучі провєрок
    function swap(id1, id2) {

        let tempObject1 = Tasks[id1], tempIndex;

        tempIndex = Tasks[id2].id;
        Tasks[id1] = Tasks[id2];
        Tasks[id2] = tempObject1;
        Tasks[id1].id = tempObject1.id;
        Tasks[id2].id = tempIndex;
    }

    if (id1 !== ""
        && id1 !== undefined
        && id1 !== null
        && id1 >= 0
        && id1 < Tasks.length
        && id2 !== ""               //Куча провєрок
        && id2 !== undefined
        && id2 !== null
        && id2 >= 0
        && id2 < Tasks.length) {
        if (Tasks[id1].isDone !== true
            && Tasks[id2].isDone !== true) {
            swap(id1, id2)
        }
        if (Tasks[id1].isDone === true
            && Tasks[id2].isDone === true) {
            swap(id1, id2)
        }
    }
    updateDB();

}

//Внутрішня фунція для переміщення між собою
// зроблених і незроблених таксів
function relocateAny(id1, id2) {
    updateDB();

    function swap(id1, id2) {

        let tempObject1 = Tasks[id1], tempIndex;

        tempIndex = Tasks[id2].id;
        Tasks[id1] = Tasks[id2];
        Tasks[id2] = tempObject1;
        Tasks[id1].id = tempObject1.id;
        Tasks[id2].id = tempIndex;
    }

    if (id1 !== ""
        && id1 !== undefined
        && id1 !== null
        && id1 >= 0
        && id1 < Tasks.length
        && id2 !== ""
        && id2 !== undefined
        && id2 !== null
        && id2 >= 0
        && id2 < Tasks.length) {
        swap(id1, id2)
    }
    updateDB();
}

//Внутрішня функція що сортирує таски так щоб виконані завжди були знизу списку
function sort() {
    updateDB();

    for (let counter = 0; counter < Tasks.length - 1; counter++) {
        // if (Tasks[counter + 1] === undefined) {
        //     break
        // }

        if (Tasks[counter].isDone === true
            && Tasks[counter + 1].isDone === false) {

            relocateAny(counter, counter + 1);
            counter = -1;
        }
    }


    updateDB();

}

//localStorage.clear() тільки коротко
function clear() {
    localStorage.clear();

}

getDB();