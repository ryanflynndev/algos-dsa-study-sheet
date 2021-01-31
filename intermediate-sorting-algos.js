//Merge Sort

function merge(arr1, arr2){
    let result = []
    let i = 0
    let j = 0
    
    while( i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            result.push(arr1[i])
            i++
        } else {
            result.push(arr2[j])
            j++
        }
    }
    
    while(i < arr1.length){
        result.push(arr1[i])
        i++
    }
    while(j < arr2.length){
        result.push(arr2[j])
        j++
    }
    
    return result
}

function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)
    
}

console.log(mergeSort([2,3,8,9,2,4]))

//Merge Sort is O(n log n) 
//This is beceause we have O(log n) compositons and O(n) comparisons per decomposition

//Pivot function for Quick Sort

function swap(array, i , j){
    let temp = array[i]
    array[i] = array[j]
    array[j] = temp
}

function pivot(arr, start=0, end=arr.length){
    let pivot = arr[start]
    let swapIndex = start
    
    for(let i = start + 1; i < end; i++){
        if(pivot > arr[i]){
            swapIndex++
            swap(arr, swapIndex, i)
        }
    }
    swap(arr, start, swapIndex)
    return swapIndex
}

function quicksortHoare(array, left, right) {
    // left-pointer would be the index of the first element which is 0 and right-pointer would be the index of the last element which would be (length -1).
    left = left || 0;
    right = right || array.length - 1;

    var pivot = partitionHoare(array, left, right);

    if (left < pivot - 1) {
        quicksortHoare(array, left, pivot - 1);
    }

    if (right > pivot) {
        quicksortHoare(array, pivot, right)
    }

    return array;

}

//Pivot returns the index, but it also swap all of the less than items to the left side of the existing array


//Radix Sort

const getNum = (num, index) => {
    const strNum = String(num);
    let end = strNum.length - 1;
    const foundNum = strNum[end - index];
  
    if (foundNum === undefined) return 0;
    else return foundNum;
  };

  const largestNum = arr => {
    let largest = "0";
  
    arr.forEach(num => {
      const strNum = String(num);
  
      if (strNum.length > largest.length) largest = strNum;
    });
  
    return largest.length;
  };

  const radixSort = arr => {
    let maxLength = largestNum(arr);
  
    for (let i = 0; i < maxLength; i++) {
      let buckets = Array.from({ length: 10 }, () => []);
  
      for (let j = 0; j < arr.length; j++) {
        let num = getNum(arr[j], i);
  
        if (num !== undefined) buckets[num].push(arr[j]);
      };
      arr = buckets.flat();
    };
    return arr;
  };