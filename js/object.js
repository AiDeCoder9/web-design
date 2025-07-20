const laptop = {
  display: "led",
  size: 14,
  processor: "i5",
  ram: 8,
  graphicsCard: true,
  storage: 512,
  brand: "Apple",
  battery: "litheim",
  color: "space green",
};
console.log(laptop.display);
console.log(laptop.size);

const car = {
  color: "black",
  company: "BYD",
  engine: "v8",
  power: "4400",
  tire: {
    count: 4,
    company: "mrf",
  },
  seat: 12,
  ev: true,
  door: 2,
  type: "sport",
  topSpeed: 220,
};
car.color = "red";
car.power = "5500";
const newCar = {
  ...car, // spread operator
  power: "6600",
  color: "yellow",
};
console.log(car.color);
const newObject = {
  ...laptop,
  ...car,
};
console.log(newObject);

console.log(car.tire.company, car.company);
