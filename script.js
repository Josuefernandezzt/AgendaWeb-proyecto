const modal = document.querySelector(".ventana");

function openModal(){
    modal.classList.remove("hidden");
    modal.classList.add("visible");
}

function closeModal() {
    const close = document.querySelector("#buttonClose");
    modal.classList.remove("visible");
    modal.classList.add("hidden")
    modals.classList.remove("visible");
    modals.classList.add("hidden")
}

const title = document.querySelector(".about");
const day = document.querySelector(".day");
const description = document.querySelector(".wInput");

title.addEventListener("keypress", function (event) {
  	title.classList.remove('is-invalid');
});
day.addEventListener("keypress", function (event) {
  	day.classList.remove('is-invalid');
});

let list = [];

const weekDays = ["lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

const onclickSendTask= () => {

    (title.value === '') ? title.classList.add('is-invalid') : title.classList.add('is-valid');
    (day.value === '') ? day.classList.add('is-invalid') : day.classList.add('is-valid');
    if (title.value && day.value) {
        console.log('ok')
    }
   
    showInfoHtml();
     add()

    
}

const add= () => {
    const newTask = {
        id: 0,
        title : title.value,
        description: description.value,
        day : day.value,
    }

    list.push(newTask)
    
    console.log(list)
    cleanImputs()

}

const cleanImputs = () => {
    
    title.value = "";
    day.value = "";
   
}
const arrayLength = weekDays.length;


function addTaskSchedule() {
   let miercoles =  weekDays.slice(2, 5);
    console.log(miercoles)
    console.log(weekDays)

    for (let index = 0; index < weekDays.length; index++) {
        const element = weekDays[index];
        console.log(element)
    }
}

function showInfoHtml(){
    const  titleValue = title.value;
    const dayValue = day.value;

    const parrafo = document.querySelector(".infoTask");
    const taskCalendar = document.querySelector(".task__calendar");

    const infoDay = document.querySelector(".days");
    const horario = document.querySelector(".horario")
    let titleHtml = parrafo.innerText = "" + titleValue;
    let taskHtml = taskCalendar.innerText = "" + titleValue;
    let dayHtml = infoDay.innerText =  "" + dayValue;
    
    return titleValue + dayValue;
}

function clickScheduleDay() {
    const schedule = document.querySelector(".horario");
    const scheduleDay = schedule.innerText = "Dia";
    console.log(scheduleDay);
    return scheduleDay;
   
} 
function clickScheduleNight (){
    const schedule = document.querySelector(".horario");

    const img = document.querySelector("#moonImg")

    const scheduleNigth = schedule.innerText = "Noche";
    
    console.log(scheduleNigth)
    return  scheduleNigth;
}

const modals = document.querySelector(".modals");
const button = document.querySelector(".button");

function showTask(){
    modals.classList.remove("hidden");
    modals.classList.add("visible");
}


