//  1-masala
function copyObject(source, method) {
  if (method === 1) {
    return Object.assign({}, source);
  } else if (method === 2) {
    return JSON.parse(JSON.stringify(source));
  } else if (method === 3) {
    return { ...source };
  } else if (method === 4) {
    function deepClone(obj) {
      if (obj === null || typeof obj !== "object") {
        return obj;
      }
      if (Array.isArray(obj)) {
        const arrCopy = [];
        for (let item of obj) {
          arrCopy.push(deepClone(item));
        }
        return arrCopy;
      }
      const objCopy = {};
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          objCopy[key] = deepClone(obj[key]);
        }
      }
      return objCopy;
    }
    return deepClone(source);
  } else {
    console.error("Noto'g'ri nusxalash usuli!");
    return null;
  }
}
const originalObject = { a: 1, b: 2, c: { d: 3 } };
const copy1 = copyObject(originalObject, 1);
const copy2 = copyObject(originalObject, 2);
const copy3 = copyObject(originalObject, 3);
const copy4 = copyObject(originalObject, 4);
console.log("Object.assign() orqali:", copy1);
console.log("JSON.stringify va JSON.parse orqali:", copy2);
console.log("Spread operator orqali:", copy3);
console.log("Deep clone orqali:", copy4);


// 2-masala
// function test(arr) {
//   const testArr = [];
//   for (let i = 0; i < arr.length; i += 2) {
//     testArr.push(arr[i]);
//   }
//   return testArr;
// }
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(test(arr)); 


// 3-masala
// function test(arr) {
//   const testArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     const a = Math.pow(arr[i], 3);
//     testArr.push(a);
//   }
//   return testArr;
// }
// const arr = [1, 2, 3, 4, 5];
// console.log(test(arr)); 


// 4-masala
// function test(arr) {
//   return arr.some(element => element % 5 === 0);
// }
// const arr1 = [2, 4, 8, 18, 12, 16];
// const arr2 = [3, 7, 9, 11, 25, 20];
// console.log("Massiv 1-da 5 ga karrali element bor: " + test(arr1)); 
// console.log("Massiv 2-da 5 ga karrali element bor: " + test(arr2)); 


// 5-masala
// function test(arr) {
//   let sum = 0;
//   arr.forEach(element => {
//     if (element % 3 === 0) {
//       sum += element;
//     }
//   });
//   return sum;
// }
// const arr = [1, 3, 6, 9, 12, 15, 18];
// console.log("3 ga karralilar yig'indisi: " + test(arr)); 


// 6-masala
// function test(arr) {
//   const index = arr.findIndex(element => element % 5 === 0);
//   return index;
// }
// const arr = [2, 4, 8, 10, 12, 16, 15];
// console.log("Birinchi 5 ga karrali elementning indeksi: " +  test(arr)); 


// 7-masala
// function test(arr, value) {
//   return arr.includes(value);
// }
// const array = [1, 2, 3, 4, 5];
// const value1 = 3;
// const value2 = 6;
// console.log("1-massiv: " + test(array, value1)); 
// console.log("2-massiv: " + test(array, value2)); 


// 8-masala
// function test(a) {
//   const keysArr = [];
//   for (let key in a) {
//     if (a.hasOwnProperty(key)) {
//       keysArr.push(key);
//     }
//   }
//   return keysArr;
// }
// const testobject = {
//   name: "John",
//   age: 30,
//   gender: "male",
// };
// console.log(test(testobject)); 


// 9-masala
// function test(arr) {
//   let sum = 0;
//   for (let n of arr) {
//     if (n % 2 === 0) {
//       sum += n * n;
//     }
//   }
//   return sum;
// }
// const arr = [1, 2, 3, 4, 5, 6];
// console.log("Juft sonlar kvadratlarining yig'indisi: " + test(arr)); 


// 10-masala
// function test(a) {
//   const values = Object.values(a);
//   let sum = 0;
//   for (let value of values) {
//     if (typeof value === 'number') {
//       sum += value;
//     }
//   }
//   return sum;
// }
// const testobect= {
//   a: 15,
//   b: 10,
//   c: 15,
// };
// console.log("Yeg'indisi: " + test(testobect)); 







