let shopingList = [
    {
        productName : 'Banana',
        amount : 3,
        payedOrNot : true,
        price : 10,
        totalPrice : 30
    },
    {
        productName : 'Orange',
        amount : 4,
        payedOrNot : false,
        price : 5,
        totalPrice : 20
    },
    {
        productName : 'Pineapple',
        amount : 1,
        payedOrNot : true,
        price : 25,
        totalPrice : 25
    },
    {
        productName : 'Grape',
        amount : 5,
        payedOrNot : false,
        price : 8,
        totalPrice : 40
    },
];

console.log(shopingList);

//first//

let results = shopingList.filter(shopingList => shopingList.payedOrNot == true);
let result = shopingList.filter(shopingList => shopingList.payedOrNot == false);
let neKupleni = [];
let kupleni = [];
neKupleni.push(results);
kupleni.push(result);
console.log(neKupleni);
console.log(kupleni);
let masiv = result.concat(results);
console.log(masiv);

//second//

let prodName = shopingList.productName;

function pay (a) {
    a == 1;
}

pay(shopingList.productName = 'Grape');

console.log(shopingList);

//third//

let resultat = shopingList.filter(shopingList => shopingList.payedOrNot == true);
console.log(resultat);

//norma//

//first//

function firstNorma () {
    let product = prompt('vvedit nazvu produktu');
    let r;

    for(let i = 0; i <= shopingList.length; i++) {
        if (product == shopingList[i].productName) {
            r = shopingList.filter(shopingList => shopingList.productName != product);
            console.log(r);
        }
    }
}



//second//

shopingList.push(
{
    productName : 'Apple',
    amount : 6,
    payedOrNot : true,
    price : 6,
    totalPrice : 36
}
);

// for(let i = 0; i <= shopingList.length; i++) {
//     if (shopingList.productName = shopingList.productName) {
//         console.log('take uzhe ye');
//     }
// }

console.log(shopingList);

//Maximum//

//First//

// let totalSum = 0;

// for(let i = 0; i <= shopingList.length; i++) {
//     totalSum = totalSum + shopingList[i].price;
//     console.log(totalSum);
// }

//second//

// let totalSum2 = 0;

// for(let i = 0; i <= result.length; i++) {
//     totalSum2 = totalSum2 + result[i].price;
//     console.log(totalSum2);
// }

//third//

function thirdTask () {

    let fisrtParameter = prompt('Почати сортування з "Меншого" чи "Більшого"');
    let secondParameter = prompt('Закінчити сортування "Меншого" чи "Більшого"');


    function sorting(z,h) {
        if (z == 'Меншого') {
            function sortingLow() {
                shopingList.sort((x,y) => x.price > y.price ? 1 : -1);
            }
            
            sortingLow(shopingList);

        } else if (z == 'Більшого') {
            function sortingMax() {
                shopingList.sort((x,y) => x.price > y.price ? -1 : 1);
            }
            
            sortingMax(shopingList);
        } else {
            console.log('Щось пішло не так!');
        }

    }

    sorting(fisrtParameter,secondParameter);
}


