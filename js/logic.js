//Use Dates with Ordinal Number Suffixes (-st, -nd, -rd, -th) using DayJS with Plugin AdvancedFormat
dayjs.extend(window.dayjs_plugin_advancedFormat);

// Get DOM elements.
var currentDay = $("#currentDay");
var flagStored = 0;
// Initialize variables.
var today = dayjs().format("dddd, MMMM Do");
var currentTime = dayjs();
currentDay.text(today);

function initializeTimeSlots() {
  let time = dayjs().hour(9).minute(0).second(0);
  let textAreaVal;
  let textAreaId;
  let currentHour = currentTime.hour();

  flagStored = localStorage.getItem("flagStored");
  console.log("Val of eventsCount:" + flagStored);
  console.log("***Current hour:" + currentHour);
  for (let hour = 9; hour <= 17; hour++) {
    console.log(time.format("hh:mm A"));
    let labelId = "#label" + hour;
    $(labelId).text(time.format("hh:mm A"));
    if (flagStored == null) {
      console.log("Value is null - First time of execution");
      localStorage.setItem(time.format("hh:mm A"), "");
    } else {
      console.log("Value is not null - Information stored");
      textAreaVal = localStorage.getItem(time.format("hh:mm A"));
      textAreaId = "#textArea" + hour;
      $(textAreaId).text(textAreaVal);
    }
    changeTextAreaStyle(textAreaId, currentHour, hour);
    time = time.add(1, "hour");
  }
  localStorage.setItem("flagStored", "1");
}

function changeTextAreaStyle(textArea, currentHour, currentVal) {
  console.log("Current Hour:" + currentHour + " CurrentVal:" + currentVal);
  if (currentHour > currentVal) {
    $(textArea).addClass("past");
  } else if (currentHour == currentVal) {
    $(textArea).addClass("present");
  } else {
    $(textArea).addClass("future");
  }
}

function setEventDescription(id = 0) {
  let time = dayjs().hour(id).minute(0).second(0);
  let labelId = "#label" + id;
  let textAreaId = "#textArea" + id;
  let btnId = "#btn" + id;
  console.log(time.format("hh:mm A"));
  console.log("Value to save:" + $(textAreaId).val());
  localStorage.setItem(time.format("hh:mm A"), $(textAreaId).val());
}

initializeTimeSlots();
$("#btn9").on("click", function () {
  setEventDescription(9);
});
$("#btn10").on("click", function () {
  setEventDescription(10);
});
$("#btn11").on("click", function () {
  setEventDescription(11);
});
$("#btn12").on("click", function () {
  setEventDescription(12);
});
$("#btn13").on("click", function () {
  setEventDescription(13);
});
$("#btn14").on("click", function () {
  setEventDescription(14);
});
$("#btn15").on("click", function () {
  setEventDescription(15);
});
$("#btn16").on("click", function () {
  setEventDescription(16);
});
$("#btn17").on("click", function () {
  setEventDescription(17);
});
