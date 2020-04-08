function doMath(x, y, f) {
    f(x, y);
}

function doAllMath(a,b,fs) {
    for (let f of fs) {
        f(a, b);
    }
}

function myForEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    
    }
}

function myMap(arr, callback) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        newArray.push(callback(arr[i], i, arr));
    }
    return newArray;
}

function myFilter(arr, callback) {
    let newArray = [];
    for (let i = 0; i < arr.length; i ++) {
        if (callback(arr[i], i, arr)) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}

function mySome(arr, callback) {
    for (let i = 0; i < arr.length; i ++)
    {
        if (callback(arr[i], i, arr)) {
            return true;
        }
    }
    return false;
}

function myEvery(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (!(callback(arr[i], i, arr))) {
            return false;
        }
    }
    return true;
}