


var checkLeapYear = function (leapYear) {
    if ((leapYear < 0 || leapYear == undefined || leapYear == null || isNaN(leapYear))) {
        console.log(`${leapYear} Invalid year please enter valid year`);
    }



    if (leapYear % 4 == 0) {
        console.log(`${leapYear} Leap year`);

    } else {
        console.log(`${leapYear} is not leap year`);

    }
}




checkLeapYear(2020);
checkLeapYear(1999);
checkLeapYear(1600);
checkLeapYear(2022);
checkLeapYear(1648);
checkLeapYear(null);
checkLeapYear(undefined);
checkLeapYear(NaN);
checkLeapYear(1975);



