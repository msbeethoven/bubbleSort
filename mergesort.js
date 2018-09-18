let firstHalf;
let secondHalf;



function split(wholeArray) {
   /* your code here to define the firstHalf and secondHalf arrays */
 let midPoint = Math.ceil(wholeArray.length / 2)
 firstHalf = wholeArray.slice(0, midPoint)
 secondHalf = wholeArray.slice(midPoint,wholeArray.length)
 return [firstHalf, secondHalf];
};



function merge(firstHalf,secondHalf){
   let mergedArr = [];
   let leftIdx = 0
   let rightIdx = 0

   while (leftIdx<firstHalf.length || rightIdx < secondHalf.length) {
     if (firstHalf[leftIdx] < secondHalf[rightIdx] || !secondHalf[rightIdx]){
       mergedArr.push(firstHalf[leftIdx])
       console.log('mergedArray:', mergedArr)
       leftIdx++
        }
    else if (firstHalf[leftIdx] > secondHalf[rightIdx] || !firstHalf[leftIdx]) {
       mergedArr.push(secondHalf[rightIdx])
       rightIdx++
     }
  }

   return mergedArr;
}

// function mergeSort(array) {
//   if(array.length ===1){
//       return array;
//   } else {
//       split(array)
//   }
