console.log(solution({ licensePlate: 'RGB255'  }));

 


function solution(car) {
    // Tu código aquí 👈

    if (car.licensePlate === undefined){
        car.drivingLicense = false;
    }else if(car.licensePlate != undefined){
        car.drivingLicense = true;
        
    }

    return car;
    
  }
