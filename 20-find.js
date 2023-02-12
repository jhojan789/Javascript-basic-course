var items = [
    { name: "Bici", cost: 3000 },
    { name: "Bici", cost: 4000 },
    { name: "TV", cost: 2500 },
    { name: "Libro", cost: 320 },
    { name: "Celular", cost: 10000 },
    { name: "Laptop", cost: 20000 },
    { name: "Teclado", cost: 500 },
    { name: "Audifonos", cost: 1700 },
  ];

  

  var findElement = items.find(function(item){
    return item.name === "Bici";
  });

  console.log(findElement);