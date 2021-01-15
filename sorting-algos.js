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

console.log(bubbleSort([45, 32, 87, 43]))