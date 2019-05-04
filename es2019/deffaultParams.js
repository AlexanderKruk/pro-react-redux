function fetchOrdersOld(count, start){
    if (count === undefined) {
        count = 10;
    }

    if (start === undefined) {
        start = 0;
    }

    console.log('Getting', count,
    'orders starting from ', start);
}

function fetchOrdersNew(count = 10, start = 0) {
    console.log('Getting', count,
      'orders starting from ', start);
}

fetchOrdersOld();
fetchOrdersNew();

function findProducts(opts = { minPrice: 10, maxPrice: 20}) {
    console.log(opts);
}

findProducts({});