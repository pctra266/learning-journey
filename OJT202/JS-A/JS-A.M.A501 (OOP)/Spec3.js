let map = {one : '1234', two: true,hasOwnProperty:true};

console.log(Object.prototype.hasOwnProperty.call(map, 'one'));