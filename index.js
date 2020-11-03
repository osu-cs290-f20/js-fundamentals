console.log("Hello world!");

console.log("\n===========================");
console.log("== Variables");
console.log("===========================\n");

/*
 * This is a comment.
 */
// This is also a comment.

var n;
console.log("== n:", n);

n = 8;
console.log("== n:", n);
console.log("== typeof(n):", typeof(n));

n = "some string value";
console.log("== n:", n);
console.log("== typeof(n):", typeof(n));

n = 3.1415;
console.log("== n:", n);
console.log("== typeof(n):", typeof(n));

n = true;
console.log("== n:", n);
console.log("== typeof(n):", typeof(n));

console.log("\n===========================");
console.log("== Numbers");
console.log("===========================\n");

console.log("== 9 / 5:", 9 / 5);
console.log("== Math.sqrt(2):", Math.sqrt(2));

console.log("\n===========================");
console.log("== Comparisons");
console.log("===========================\n");

console.log("== 2 == 2:", 2 == 2);
console.log("== 2 == 2.0:", 2 == 2.0);
console.log("== 2 == '2':", 2 == '2');
console.log("== 2 == ' 2':", 2 == ' 2');

console.log("== 2 === 2:", 2 === 2);
console.log("== 2 === 2.0:", 2 === 2.0);
console.log("== 2 === '2':", 2 === '2');

console.log("== 2 != 2:", 2 != 2);
console.log("== 2 != '2':", 2 != '2');
console.log("== 2 !== 2:", 2 !== 2);
console.log("== 2 !== 3:", 2 !== 3);
console.log("== 2 !== '3':", 2 !== '3');

console.log("\n===========================");
console.log("== Strings");
console.log("===========================\n");

var str = "This is a string.";
var str2 = 'This is also a string.';

console.log("== str + str2:", str + str2);
console.log("== str + ' ' + 16:", str + ' ' + 16);
console.log("== str.length:", str.length);

var concatenatedStrings =
  "This is a number: " + 16 + " and this is a boolean: " + true;
console.log("== concatenatedStrings:", concatenatedStrings);

var decathlon = "decathlon";
console.log("== decathlon.indexOf('cat'):", decathlon.indexOf('cat'));

var team = "team";
console.log("== team.indexOf('i'):", team.indexOf('i'));

console.log("\n===========================");
console.log("== Functions");
console.log("===========================\n");

function addThreeThings(a, b, c) {
  // console.log("  -- inside addThreeThings(), arguments:", arguments);
  return a + b + c;
}

function foo() {
  console.log("== inside foo()");
}

console.log("== addThreeThings(1, 2, 3):", addThreeThings(1, 2, 3));
console.log("== addThreeThings('1', '2', '3'):", addThreeThings('1', '2', '3'));
console.log("== addThreeThings(1, 2):", addThreeThings(1, 2));
console.log("== addThreeThings('1', '2'):", addThreeThings('1', '2'));
console.log("== addThreeThings(1, 2, 3, 4, 5):", addThreeThings(1, 2, 3, 4, 5));
foo();
console.log("== foo():", foo());
console.log("== typeof(foo):", typeof(foo));
console.log("== foo:", foo);

console.log("\n===========================");
console.log("== Arrays");
console.log("===========================\n");

var arr = [ 1, 2, 3, 'a', 'b', 'c', [ 4, 5, 6 ], addThreeThings ];
console.log("== arr:", arr);
console.log("== arr.length:", arr.length);
console.log("== arr[0]:", arr[0]);
console.log("== arr[6]:", arr[6]);
console.log("== arr[6][2]:", arr[6][2]);
console.log("== arr[7](1, 2, 3):", arr[7](1, 2, 3));

console.log("== contents of arr:")
for (var i = 0; i < arr.length; i++) {
  console.log("  -- arr[" + i + "]:", arr[i]);
}

arr.forEach(foo);

function printArrayElem(blah, blorg) {
  console.log("  -- blorg:", blorg, "\tblah:", blah);
}

console.log("== contents of arr using forEach():");
arr.forEach(printArrayElem);

console.log("== contents of arr using forEach() and anonymous function:");
arr.forEach(function (elem) {
  console.log("  -- elem:", elem);
});

console.log("\n===========================");
console.log("== Objects");
console.log("===========================\n");

var person = {
  firstName: "Luke",
  lastName: "Skywalker",
  age: 24,
  getFullName: function (reverse) {
    if (reverse) {
      return this.lastName + ", " + this.firstName;
    } else {
      return this.firstName + " " + this.lastName;
    }
  }
};
console.log("== person:", person);
console.log("== person['firstName']:", person['firstName']);
console.log("== person.firstName:", person.firstName);
console.log("== person.getFullName():", person.getFullName());
console.log("== person.getFullName(true):", person.getFullName(true));

// var person2 = {
//   firstName: "Rey",
//   lastName: "?"
// };

// var fieldToAccess = "firstName";
// console.log("== person[fieldToAccess]:", person[fieldToAccess]);
//
// var arrayOfPeople = [
//   { firstName: "Luke" },
//   { firstName: "Rey" },
//   { firstName: "Finn" }
// ];
// console.log("== arrayOfPeople[2].firstName:", arrayOfPeople[2].firstName);
