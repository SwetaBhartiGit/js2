function getEven(arr) {
    for (var i=0; i<arr.length;i++){
        if (arr%2===0)
        {
            arr.push(arr[i]);
        }

    }
    return arr;
    
    



    /* 
        Return an array containing only even numbers as a result
        Example
            Input: [1,4,5,77,8,90]
            Output: [4,8,90]

        Write you code below
    */

}

function multiplyByN(arr, n) {
    for (var i=0; i<arr.length;i++);
    {
        arr[i]*=n;
    }
    return arr


        
}

function removeNthElement(arr, n) {
    arr.splice(n,1);
    return arr;


    /*
        Return the array with the element present at index n removed
        Example
            Input: [1,3,4,6,7] 3
            Output: [1,3,4,7]
        Write you code below
    */
}

module.exports = {
    getEven,
    multiplyByN,
    removeNthElement
}