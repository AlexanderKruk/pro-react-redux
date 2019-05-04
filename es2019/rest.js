

function maxOld(){
    var numbers = Array.prototype.slice.call(arguments);
}

function maxNew(a, ...numbers){
    console.log(numbers);
}

maxNew(1, 3);
maxNew(1, 3, 3, 5, 6);
maxNew(1);
maxNew();


