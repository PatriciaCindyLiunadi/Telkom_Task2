class Car {
    constructor(brand, year, country) {
      this.brand = brand;
      this.year = year;
      this.country = country;
    }
  
    getAge() {
      let currentYear = new Date().getFullYear();
      return currentYear - this.year;
    }
  
    isMadeInUS() {[]
      return this.country === "US";
    }
  }

let myCar = new Car("Toyota", 2015, "Japan");

console.log(myCar.brand);
console.log(myCar.year);
console.log(myCar.country);
console.log(myCar.getAge());
console.log(myCar.isMadeInUS());