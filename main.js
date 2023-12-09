//task1
function reverse (str) {
    return str
    .split(" ")
    .map(word => word.length >= 6 ? word.split("").reverse().join("") : word)
    .join(" ");
}
console.log(reverse("This is a typical example"));


//task2
function getMiddle (str) {
    
    let length = str.length;
    let middleIndex = Math.floor(length / 2);
    
    if (length % 2 === 0) {
        return str.substr(middleIndex - 1, 2);
    } else {
        return str.charAt(middleIndex);
    }
}
console.log(getMiddle("test"));

//task3
function checkSquareAndCube(arr) {
    
    let num1 = arr[0];
    let num2 = arr[1];
    
    return Math.sqrt(num1) === Math.cbrt(num2);
}
console.log(checkSquareAndCube([4, 8]));


//task4
function arrBetween(arr1, arr2, arr) {
    return arr.filter(num => num > arr1 && num < arr2);
}
console.log(arrBetween(3, 8, [1, 5, 95, 0, 4, 7])); 


//task5
function maximumScore(tiles) {
    let totalScore = 0;
    for (let i = 0; i < tiles.length; i++) {
        totalScore += tiles[i].score;
    }
    return totalScore;
}
console.log(maximumScore([{ tile: "N", score: 1}, {tile: "K", score:5},
  { tile: "Z", score: 10}, {tile: "X", score:8},
  { tile: "D", score: 2}, {tile: "A", score:1},
  { tile: "E", score: 1}
])); 


//task6
function invert(obj) {
    return Object.keys(obj).reduce((acc, key) => {
        acc[obj[key]] = key;
        return acc;
    }, {});
}
console.log(invert({ "a":1, "b":2, "c":3 }));

//task7
function createObjectFromArrays(keys, values) {
    let newObj = {};
    for (let i = 0; i < keys.length; i++) {
        newObj[keys[i]] = values[i];
    }
    
    return newObj;
}
console.log(createObjectFromArrays(["name", "age", "city"], ["Alice", 25, "New York"])); 


//task8
function currentMonth (now) {
  return new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
}
console.log(currentMonth(new Date("2023-09-20")));


//task9
function leap(year) {
    
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(leap(1988));


//task10
function calculate(...students) {
    let result = students.map((student) => { 
        let averageGrade =
        student.grades.reduce((acc, grade) => acc + grade, 0) / student.grades.length;
        return { name: student.name, averageGrade };
    });
    return result;
}
console.log( calculate(
    { name: "Alice", age: 22, grades: [90, 85, 88] },
    { name: "Bob", age: 22, grades: [75, 92, 80] },
    { name: "Charlie", age: 22, grades: [88, 85, 90] }
  )
);