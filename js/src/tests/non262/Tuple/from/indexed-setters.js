// |reftest| skip-if(!this.hasOwnProperty("Tuple"))

// If an indexed Array setter is overridden, TupleMap shouldn't use it
// when constructing the intermediate array

z = 5;
Object.defineProperty(Array.prototype, '0', { set: function(y) { z = 42; }});
newT = Tuple.from([1, 2, 3]);
assertEq(z, 5);

reportCompare(0, 0);

