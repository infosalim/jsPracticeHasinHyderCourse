var mobiles = [
    {
        brand: "walton",
        price: 6500,
        camera: 9
    },
    {
        brand: "symphony",
        price: 5500,
        camera: 11
    },
    {
        brand: "walton",
        price: 4000,
        camera: 6
    },
    {
        brand: "samsung",
        price: 24500,
        camera: 12
    },
    {
        brand: "LG",
        price: 9500,
        camera: 12
    },
    {
        brand: "apple",
        price: 45500,
        camera: 8
    },
    {
        brand: "walton",
        price: 4500,
        camera: 8
    }
];

function sortComparaison(first,second){
    return first.price - second.price;
}
mobiles.sort(sortComparaison);
console.log("Prices from lower \n",mobiles);
console.log("\n");

function sortComparaisonDescending(first,second){
    return second.price - first.price;
}
mobiles.sort(sortComparaisonDescending);
console.log("Prices from higher \n",mobiles);