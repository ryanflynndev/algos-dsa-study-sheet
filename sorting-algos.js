//Bubble Sort
function bubbleSort(arr){
    let noSwaps
    for(let i = arr.length; i > 0; i--){
        noSwaps = true
        for(let j = 0; j < i - 1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                noSwaps= false
            }
        }
        if(noSwaps) break;
    }
    return arr
}
//The reason for the variable "noSwaps" is so if you have a nearly sorted array it doesn't keep swapping

//It is O(n**2), but it can be O(n) if the list is nearly sorted

console.log(bubbleSort([45, 32, 87, 43]))

//Selection sort is good if you want to minizmize the amount of swapping. O(n**2)
function selectionSort(arr){
    for(let i = 0; i < arr.length; i++){
        let min = i
        for(let j = i + 1; j < arr.length; j++){
            if (arr[j] < arr[min]){
                min = j
            }
        }
        if(i !== min){
            let temp = arr[i]
            arr[i] = arr[min]
            arr[min] = temp 
        }
    } 
}

console.log(selectionSort([34,22,10,19,17]))

let insertionSort = (inputArr) => {
    let length = inputArr.length;
    for (let i = 1; i < length; i++) {
        let key = inputArr[i];
        let j = i - 1;
        while (j >= 0 && inputArr[j] > key) {
            inputArr[j + 1] = inputArr[j];
            j = j - 1;
        }
        inputArr[j + 1] = key;
    }
    return inputArr;
};