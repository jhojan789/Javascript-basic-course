var items = [
    { name: "Bici", cost: 3000 },
    { name: "TV", cost: 2500 },
    { name: "Libro", cost: 320 },
    { name: "Celular", cost: 10000 },
    { name: "Laptop", cost: 20000 },
    { name: "Teclado", cost: 500 },
    { name: "Audifonos", cost: 1700 },
  ];

var cheapItems = items.some(function(item){
    return item.cost <= 700;
});

console.log(cheapItems);