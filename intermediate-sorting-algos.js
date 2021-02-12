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

//Heap Sort

var array_length;
/* to create MAX  array */  
function heap_root(input, i) {
    var left = 2 * i + 1;
    var right = 2 * i + 2;
    var max = i;

    if (left < array_length && input[left] > input[max]) {
        max = left;
    }

    if (right < array_length && input[right] > input[max])     {
        max = right;
    }

    if (max != i) {
        swap(input, i, max);
        heap_root(input, max);
    }
}

function swap(input, index_A, index_B) {
    var temp = input[index_A];

    input[index_A] = input[index_B];
    input[index_B] = temp;
}

function heapSort(input) {
    
    array_length = input.length;

    for (var i = Math.floor(array_length / 2); i >= 0; i -= 1)      {
        heap_root(input, i);
      }

    for (i = input.length - 1; i > 0; i--) {
        swap(input, 0, i);
        array_length--;
      
      
        heap_root(input, 0);
    }
}

var arr = [3, 0, 2, 5, -1, 4, 1];
heapSort(arr);
console.log(arr);


function shellSort(arr) {
	let n = arr.length;

	for (let gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2))	{
		for (let i = gap; i < n; i += 1)  {
			let temp = arr[i];
			
			let j;
			for (j = i; j >= gap && arr[j-gap] > temp; j-=gap)  {
				arr[j] = arr[j-gap];
			}

			arr[j] = temp;
		}
	}

	return arr;
}

let countingSort = (arr, min, max) => {
    let i = min,
        j = 0,
        len = arr.length,
        count = [];
    for (i; i <= max; i++) {
        count[i] = 0;
    }
    for (i = 0; i < len; i++) {
        count[arr[i]] += 1;
    }
    for (i = min; i <= max; i++) {
        while (count[i] > 0) {
            arr[j] = i;
            j++;
            count[i]--;
        }
    }
    return arr;
};

function insertionSort(array) {
    var length = array.length;
    
    for(var i = 1; i < length; i++) {
      var temp = array[i];
      for(var j = i - 1; j >= 0 && array[j] > temp; j--) {
        array[j+1] = array[j];
      }
      array[j+1] = temp;
    }
    
    return array;
  }
  
  // Implement bucket sort
  function bucketSort(array, bucketSize) {
    if (array.length === 0) {
      return array;
    }
  
    // Declaring vars
    var i,
        minValue = array[0],
        maxValue = array[0],
        bucketSize = bucketSize || 5;
    
    // Setting min and max values
    array.forEach(function (currentVal) {
        if (currentVal < minValue) {
            minValue = currentVal;
        } else if (currentVal > maxValue) {
            maxValue = currentVal;
        }
    })
  
    // Initializing buckets
    var bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
    var allBuckets = new Array(bucketCount);
    
    for (i = 0; i < allBuckets.length; i++) {
      allBuckets[i] = [];
    }
    
    // Pushing values to buckets
    array.forEach(function (currentVal) {
        allBuckets[Math.floor((currentVal - minValue) / bucketSize)].push(currentVal);
    });
  
    // Sorting buckets
    array.length = 0;
    
    allBuckets.forEach(function(bucket) {
        insertionSort(bucket);
        bucket.forEach(function (element) {
            array.push(element)
        });
    });
  
    return array;
  }

  function cycleSort(array) {
    // loop from the beginning of the array to the second to last item
    for (let currentIndex = 0; currentIndex < array.length - 1; currentIndex++) {
      // save the value of the item at the currentIndex
      let item = array[currentIndex]
  
      let currentIndexCopy = currentIndex
      // loop through all indexes that proceed the currentIndex
      for (let i = currentIndex + 1; i < array.length; i++)
        if (array[i] < item)
          currentIndexCopy++
  
      // if currentIndexCopy has not changed, the item at the currentIndex is already in the correct currentIndexCopy
      if (currentIndexCopy == currentIndex)
        continue
  
      // skip duplicates
      while (item == array[currentIndexCopy])
        currentIndexCopy++
  
      // swap
      let temp = array[currentIndexCopy]
      array[currentIndexCopy] = item
      item = temp
  
      // repeat above steps as long as we can find values to swap
      while (currentIndexCopy != currentIndex) {
        currentIndexCopy = currentIndex
        // loop through all indexes that proceed the currentIndex
        for (let i = currentIndex + 1; i < array.length; i++)
          if (array[i] < item)
            currentIndexCopy++
  
        // skip duplicates
        while (item == array[currentIndexCopy])
          currentIndexCopy++
  
        // swap
        temp = array[currentIndexCopy]
        array[currentIndexCopy] = item
        item = temp
      }
    }
  }
  