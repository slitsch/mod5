/**
 * Created by Owner on 7/21/2014.
 */
//var str = " hi, how    are you?";
//var st2 = "";
//var result = wordCount2(str);
//console.log(result);
//console.log(wordCount2(st2));
//console.log(wordCount2(";"));

//console.log(wordCount(str));
//console.log(wordCount(st2));
//console.log(wordCount(";"));

function wordCount(str1) {
    if (!str1)return 0;
    if (typeof str1 !=="string") {
        return 0;
        try {
            String(str1);
        }
        catch (err) {
            return err;
        }
    }
    var reg = /\s+/;
   // var test = str1.split(" ");
    var test = str1.replace(reg, " ");
    console.log(test);
    return test.length;
}

function wordCount2(str1) {
    if (!str1)return 0;
    var test = str1.split(" ");
    return test.length;
}

//var num = 105.43;
//console.log(makeChange2(num));

function makeChange2 (num){
//   input number, return an object
//    with twenties, tens, fives, ones, quarters, dimes, nickels, pennies
    var units = {
        twenties:0,
        tens:0,
        fives:0,
        ones:0,
        quarters:0,
        dimes:0,
        nickels:0,
        pennies:0
    };
    var cents = String(num).split('.')[1];
    cents = parseInt(cents);
//    console.log(cents);
    var twenties = Math.floor(num / 20);
    var remainder = num % 20;
    var tens = Math.floor(remainder / 10);
    remainder = remainder % 10;
    var fives = Math.floor(remainder / 5);
    remainder = remainder % 5;
    var ones = Math.floor(remainder / 1);

    var quarters = Math.floor(cents / 25);
    remainder = cents %  25;
    var dimes = Math.floor(remainder / 10);
    remainder = remainder % 10;
    var nickels = Math.floor(remainder / 5);
    remainder = remainder % 5;
    var pennies = remainder;
    console.log(twenties, tens, fives, ones, quarters, dimes, nickels, pennies);
    console.log(quarters);
    return units;
}

//var units = {
//    twenties:0,
//    tens:0,
//    fives:0,
//    ones:0,
//    quarters:0,
//    dimes:0,
//    nickels:0,
//    pennies:0
//};
console.log(makeChange(543.03));
function makeChange (amount){
//   input number, return an object
//    with twenties, tens, fives, ones, quarters, dimes, nickels, pennies
    var change = {};
    var lookup = {
        twenties: 20,
        tens: 10,
        fives: 5,
        ones: 1,
        quarters: 0.25,
        dimes: 0.1,
        nickels: 0.05,
        pennies: 0.01
};

    for (var unit in lookup) {
        change[unit] = Math.floor(amount/lookup[unit]);
        var diff = change[unit] * lookup[unit];
        amount = parseFloat((amount-diff).toFixed(2));
     }
     return change;
}

