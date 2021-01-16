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

let selectionSort = (arr) => {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        let min = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        if (min !== i) {
            let tmp = arr[i];
            arr[i] = arr[min];
            arr[min] = tmp;
        }
    }
    return arr;
}