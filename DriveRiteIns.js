/**
 *   @author Essmaker, JoAnne (joannessmaker@gmail.com)
 *   @summary Project 2 || created: 09.30.2017
 */

'use strict';
const PROMPT = require('readline-sync');

let continueResponse;
let PolicyNumber, Age, DateOfBirth, PremiumDueDate, AtFaultAccidents, InsurancePremium;
let LastName, FirstName;

function main() {
    if (continueResponse !== 0 && continueResponse !== 1) {
        setContinueResponse();
    }
    if (continueResponse = 1) {
        setContinueResponse();
        setLastName();
        setFirstName();
        setDateOfBirth();
        setAge();
        setAtFaultAccidents();
        setPolicyNumber();
        setInsurancePremium();
        setPremiumDueDate();
        printInsurancePremium();
        return main();
    }
    printGoodbye();
}

main();

/**
 * @method setContinueResponse
 * @desc
 * @returns (null)
 */
function setContinueResponse() {
    if (continueResponse === 1 || continueResponse !== 0) {
        continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        if (continueResponse === 0 || continueResponse !== 1) {
            console.log(`${continueResponse} is an incorrect value. Please try again.`);
            continueResponse = 1;

            return setContinueResponse();
        } else {
            continueResponse = 1;
        }
    }
}

/**
 * @method setLastName
 * @desc Customer Last Name Mutator
 * @input Prompt
 * @output Customer Last Name
 * @returns (null)
 */
function setLastName() {
    LastName = PROMPT.question(`\nPlease Enter Last Name: `);
}

/**
 * @method setFirstName
 * @desc Customer First Name Mutator
 * @input Prompt
 * @output Customer First Name
 * @returns (null)
 */
function setFirstName() {
    FirstName = PROMPT.question(`\nPlease Enter First Name: `);
}

/**
 * @method setPolicyNumber
 * @desc Policy Number Mutator
 * @intput none
 * @output Pre-calculated Policy Number to be shown at Monthly Premium output
 * @returns (method)
 */
function setPolicyNumber() {
    PolicyNumber = Math.floor((Math.random() * 200) + 1);
}

/**
 * @method setAge
 * @desc Mutator for Customers Age
 * @input Prompt
 * @output Customer Age
 * @returns (method)
 */
function setAge() {
    Age = Number(PROMPT.question(`\nPlease Enter Your Current Age: `));
    if (Age < 18 || Age > 100) {
        console.log(`I'm Sorry, That is an Incorrect Age.  Please Try Again. `);
        return setAge();
    }
}

/**
 * @method setDateOfBirth
 * @desc Date Of Birth Mutator
 * @input Date of Birth
 * @output Date of Birth
 * @return (null)
 */
function setDateOfBirth() {
    DateOfBirth = String(PROMPT.question(`\nPlease Enter Your Date Of Birth (mm/dd/yyyy): `));
}

/**
 * @method setAtFaultAccidents
 * @desc Mutator for Number of At-Fault Accidents within the last 3 years
 * @input Prompt
 * @output Number of At-Fault Accidents
 * @returns (method)
 */
function setAtFaultAccidents() {
    AtFaultAccidents = Number(PROMPT.question(`\nPlease Enter the Number of At-Fault Accidents Within the Last 3 Years: `));
}

/**
 * @method Set Insurance Premium
 * @desc Monthly Premium Mutator
 * @input none
 * @output Monthly Premium
 * @returns (method)
 */
function setInsurancePremium() {
    InsurancePremium = 0;
    const BASE_PRICE = 100;
    const AGE_OVER_15 = 20;
    const AGE_OVER_30 = 10;
    const AGE_OVER_60 = 30;
    const EACH_A_F_A = 50;
    const A_F_A_TOTAL = AtFaultAccidents * EACH_A_F_A;
    if (Age > 0) {
        if (Age >= 15 && Age < 30) {
            InsurancePremium = AGE_OVER_15 + BASE_PRICE + A_F_A_TOTAL;
        } else if (Age >= 30 && Age < 45) {
            InsurancePremium = AGE_OVER_30 + BASE_PRICE + A_F_A_TOTAL;
        } else if (Age >= 60) {
            InsurancePremium = AGE_OVER_60 + BASE_PRICE + A_F_A_TOTAL;
        } else {
            InsurancePremium = BASE_PRICE + A_F_A_TOTAL;
        }
    }
}

/**
 * @method setPremiumDueDate
 * @desc Premium Due Date Mutator
 * @input none
 * @output Premium Due Date
 * @returns (method)
 */
function setPremiumDueDate() {
    PremiumDueDate = ('PAID');
}

/**
 * @method Print Insurance Premium
 * @desc Utility Output Print
 * @input none
 * @output Monthly Premium
 * @returns (null)
 */
function printInsurancePremium() {
    process.stdout.write('\x1Bc');
    console.log(`\nPolicy #${PolicyNumber} \n${FirstName} ${LastName} \nDOB ${DateOfBirth} \nInsurance Premium: \$${InsurancePremium}\nPremium Due Date: ${PremiumDueDate}`);
}

/**
 * @method Print GoodBye
 * @desc Utility Output GoodBye
 * @input none
 * @output Monthly Premium
 * @returns (null)
 */
function printGoodbye() {
    console.log(`\n\tThank You! Good-Bye! `);
}


/*
A program that accepts insurance policy data, including a policy number, customer last name,
customer first name, birth date, premium due date (month, day, and year), and number of at-fault
driver accidents in the last three years. Calculate customer age and set monthly insurance premium
using the following criteria:
Base price = $100
Age >15 && < 30 = + $20
Age >= 30 && < 45 + $10
Age >=60 +30
Each at-fault accident = + 50
Use proper recursion looping and input validation/sanitization.
 */