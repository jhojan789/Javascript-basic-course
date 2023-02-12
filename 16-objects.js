var myCar;

myCar ={
    brand: 'Toyota',
    model: 'Corolla',
    year: 2020,
    carDetail: function(){
        console.log(`Car ${this.brand} Year ${this.year}`)
    }
};

console.log(myCar.brand);
console.log(myCar.model);
myCar.carDetail();



