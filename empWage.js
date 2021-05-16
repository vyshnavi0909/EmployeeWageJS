const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HRS = 4;
const FULL_TIME_HRS = 8;
const WAGE_PER_HR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 100;

function getWorkingHrs(empCheck){
    switch(empCheck){
        case IS_PART_TIME:
            empHrs = PART_TIME_HRS;
            break;
        case IS_FULL_TIME:
            empHrs = FULL_TIME_HRS;
            break;
        default:
            empHrs = 0;
    }
    return empHrs;
}

function calDailyWage(empHrs){
    return empHrs * WAGE_PER_HR;
}

function sum(dailyWage){
    totalEmpWage += dailyWage;
}

function totalWages(totalWage, dailyWage){
    return totalWage + dailyWage;
}

function totalDaysWorked(numOfDays, dailyWage) {
    if (dailyWage > 0) {
        return numOfDays + 1;
    }
    return numOfDays;
}

function mapDayWithWage(dailyWage){
    dailyCntr++;
    return dailyCntr + " = " + dailyWage;
}

function findFullTimeWage(dailyWage){
    return dailyWage.includes("160");
}

function fullTimeWage(dailyWage){
    return dailyWage.includes("160");
}

function isAllFullTimeWage(dailyWage){
    return dailyWage.includes("160");
}

function isAnyPartTimeWage(dailyWage){
    return dailyWage.includes("80");
}

let totalEmpWage = 0;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empWageArray = new Array();

while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10 ) % 3;
    let empHrs = getWorkingHrs(empCheck);
    totalEmpHrs += empHrs;
    empWageArray.push(calDailyWage(empHrs));
}

empWageArray.forEach(sum);

let dailyCntr = 0;
let mapDayWithWageArray = empWageArray.map(mapDayWithWage);
let fullDayWageArray = mapDayWithWageArray.filter(fullTimeWage);


console.log("Employee's total working days:" + totalWorkingDays + ", total hours: " + totalEmpHrs + " and total wage: " + totalEmpWage);
console.log("Employee wage with reduce: " + empWageArray.reduce(totalWages, 0));
console.log("Daily Wage Map:");
console.log(mapDayWithWageArray);
console.log("Daily Wage filter when full time wage earned:");
console.log(fullDayWageArray);
console.log("First time full time wage was earned on day: " + mapDayWithWageArray.find(findFullTimeWage));
console.log("Check all element have full time wage: " + fullDayWageArray.every(isAllFullTimeWage));
console.log("Check if any part time wage: " + mapDayWithWageArray.some(isAnyPartTimeWage));
console.log("Number of days employee worked: "+ empWageArray.reduce(totalDaysWorked, 0));
