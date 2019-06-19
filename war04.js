// Leap Year Warmup Exercise

//1997 is not a leap year, it should return false
//1996 is a leap year, it should return true
//1900 is not a leap year, it should return false
//2000 is a leap year, it should return true


//-------------------------------

const leapYear = function(year) {

  console.log(year);

  if ((year % 4 === 0) && (year % 100 != 0) || (year % 400 == 0)) {
    console.log(" Leap year!");
    return true
  } else {
    console.log(" Not leap year!");
    return false
  }


  // return whether it is a leap year or not ;

}

leapYear(1904); //true
leapYear(1996); //true
leapYear(2000); //true
leapYear(1997); //false
leapYear(1900); //false
leapYear(2020); //true
