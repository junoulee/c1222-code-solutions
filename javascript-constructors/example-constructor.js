function ExampleConstructor() {}
console.log('value of prototype:', Object.getPrototypeOf(ExampleConstructor));
console.log('typeof prototype:', typeof ExampleConstructor);

var newValue = new ExampleConstructor();
console.log('value of newValue:', newValue);
var newerValue = newValue instanceof ExampleConstructor;
console.log('value of newerValue:', newerValue);
