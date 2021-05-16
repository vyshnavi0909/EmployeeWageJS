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

let empWage = calDailyWage(totalEmpHrs);
console.log("Employee's total working days:" + totalWorkingDays + ", total hours: " + totalEmpHrs + " and total wage: " + empWage);