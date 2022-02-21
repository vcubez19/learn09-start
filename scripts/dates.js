/* JavaScript Dates: https://www.w3schools.com/js/js_dates.asp */

// Create a variable, assign it to a new date object
// display the variable in the basic paragraph


let date = new Date();
document.getElementById("basic").innerText = date;


// create a new date variable and load the information for today into it
// display the results in the today paragraph (Year, Month, Day)


let today = new Date(2022, 1, 20);
document.getElementById("today").innerText = today;


// Create a new date variable based on the dateString and store your birthday in it
// display the variable in the birthday paragraph


let birthday = new Date("March 20, 2001");
document.getElementById("birthday").innerText = birthday;


// Convert your basic date to the ISO string format and display the result
// in the iso paragraph


let isoDate = new Date("2022-02-20");
document.getElementById("iso").innerText = isoDate;


//  Date Formats: https://www.w3schools.com/js/js_date_formats.asp
// Demonstrate 3 date formats of your choice to date1, date2, and date3 paragraphs


let date1 = new Date("2022-03-20");
let date2 = new Date("12/25/22");
let date3 = new Date("Mar 20 2022");


document.getElementById("date1").innerText = date1;
document.getElementById("date2").innerText = date2;
document.getElementById("date3").innerText = date3;


//  getDate() Methods: https://www.w3schools.com/js/js_date_methods.asp
// Demonstrate 4 get date methods of your choice to get1-get4 paragraphs


let getVariable = new Date();
document.getElementById("get1").innerText = getVariable.getDate();
document.getElementById("get2").innerText = getVariable.getMonth();
document.getElementById("get3").innerText = getVariable.getMilliseconds();
document.getElementById("get4").innerText = getVariable.getMinutes();


// set date methods: https://www.w3schools.com/js/js_date_methods_set.asp
// Demonstrate 4 set date methods of your choice to set1-set4 paragraphs


let setYearVariable = new Date();
setYearVariable.setFullYear(2018);
document.getElementById("set1").innerText = setYearVariable;


let setHoursVariable = new Date();
setHoursVariable.setHours(14);
document.getElementById("set2").innerText = setHoursVariable;


let setSecondsVariable = new Date();
setSecondsVariable.setSeconds(44);
document.getElementById("set3").innerText = setSecondsVariable;


let setMinutesVariable = new Date();
setMinutesVariable.setMinutes(44);
document.getElementById("set4").innerText = setMinutesVariable;

