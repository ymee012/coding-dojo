var arr = ["James", "Jill", "Jane", "Jack"]
function fancyPrint(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(i, '->', arr[i]);
    }
}
fancyPrint(arr);

//printing user defined symbol...
function fancyPrint(arr, symbol) {
    if (symbol == undefined) {
        symbol = "----";
    }
    for (var i = 0; i < arr.length; i++) {
        console.log(i, symbol, arr[i]);
    }
}
fancyPrint(arr);

//printing in reverse!
function fancyPrint(arr, symbol, reverse) {
    if (symbol == undefined) {
        symbol = "::";
    }
    for (var i = arr.length - 1; i >= 0; i--) {
            console.log(i, /*symbol,*/ arr[i]);
        }
}
fancyPrint(arr);