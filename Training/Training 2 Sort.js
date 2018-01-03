//Sum of array
//Min value of array
//Index of minimal element in array
//Index of maximal element in array (recursive)
//Max value of array (recursive)

let arr = [324, 4, 234, 23, 5, 345, 34, 5, 6, 546, 54, 654, 6, 546, 54, 654, 6, 54, 6, 56, 67, 567, 54, 6, 367, 4, 654, 7, 657567, 55, 67, 567, 54, 3];
arr.name = ('Array');
let numbers = [2, 76, 58, 59, 6537, 2, 4, 2, 6759, 8, 5, 86, 8, 246, 345, 235435, 24, 6, 2547, 1352, 3561346, 756, 111, 3, 5, 656, 52, 4234, 23, 4, 35, 4, 53, 6, 31, 63463467, 7, 5, 47,];
numbers.name = ('Numbers');


//Sort


let i = 0, arrResult = arr.slice(), elementTemp = 0;


function sort(arr) {
    arrResult.name = (arr.name + '_Sorted');
    if (i < arr.length) {

        if (arrResult[i] > arrResult[i + 1]) {
            elementTemp = arrResult[i + 1];
            arrResult[i + 1] = arrResult[i];
            arrResult[i] = elementTemp;
            elementTemp = 0;
            i = 0;
            return (sort(arr));
        }
        i++;
        return (sort(arr));

    }

    return (arrResult)
}

function Sort_inConsoleLine(arr) {

    function line(arrInput) {
        let line_string = '';
        for (let i = 0; i < arrInput.length; i++) {
            line_string += arrInput[i] + ' '
        }
        return line_string;
    }

    sort(arr);
    line(arr);
    console.log('Original array is ', '"', arr.name, '"', ': ', line(arr));
    console.log('Sorted array is: ', line(sort(arr)));
    console.log();

}


Sort_inConsoleLine(arr);
Sort_inConsoleLine(numbers);
// console.log(sort(numbers));
// console.log(arrResult);
//
// console.log(arr);


// //Sum of array

// var sum=0;
// for (var i=0; i<arr.length; i++){
//     sum += arr[i];
// }
// console.log(sum);
// sum=0;


// Min value of array

// let element1=arr[0], element2=0;
// for (let i=0; i<arr.length; i++){
//     element2=arr[i+1];
//     if (element1 > element2){
//         i=0;
//         element1=element2;
//     }
// }console.log(element1);


// //Index of minimal element in array

// let element1=arr[0], element2=0;
// for (let i=0; i<arr.length; i++){
//     element2=arr[i+1];
//     if (element1 > element2){
//         element1=element2;
//     }
// } console.log('Minimal element is',element1,'and its indexes are: ');
// for (let i=0; i<arr.length; i++){
//     element2=arr[i]
//     if (element2==element1){
//         console.log(i)
//     }
// }


//Index of maximal element in array (recursive)

// let i=0,count=0, val=arr[i];
//
// function maxVal(val) {
//     if (i < arr.length) {
//
//         if (val<arr[i]){count=0;val=arr[i];  return maxVal (val)
//         }i++; count++; return maxVal (val)
//     }return val
// }
// console.log('Max value of array is',maxVal(val),'(',arr.length-count,')')


// //Max value of array (recursive)
//
// let i=0, val=arr[i];
//
// function maxVal(val) {
//     if (i < arr.length) {
//         if (val<arr[i]){val=arr[i];  return maxVal (val)
//         }i++; return maxVal (val)
//     }return val
// }
// console.log('Max value of array is',maxVal(val))


// function fib(el) {
//     if (el <= 1) return el;
//     return fib(el - 1) + fib(el - 2)
// }
// console.log(fib(15))


// var i=0;
// var arr2 = []
// for (var index1=i, index2=i+1;i<arr.length;i++){
//  }


// for (var i=0; i<arr.length; i++){
//     console.log(arr[i])
// }


