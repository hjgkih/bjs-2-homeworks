function compareArrays(arr1, arr2) {
let array = [arr1, arr2];

let result = array.every(element => element.length === arr2.length && JSON.stringify(element) === JSON.stringify(arr2));

return result;
}





function getUsersNamesInAgeRange(users, gender) {
   let result = users.filter(user => user.gender === gender).map((user) => user.age).reduce((acc, item, index, arr)=> {
     acc += item;
     if (index === arr.length - 1) {
        return acc / arr.length;
     }

     return acc;
   }, 0)

   return result;
}