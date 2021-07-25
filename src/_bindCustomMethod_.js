//Something like
// Function.prototype.bind1 = function(callback, context, ...restParams) {
// return function(...params) {
//     return callback.apply(context, restParams.concat(params))
//   }
// };

//I use the call to bind the context in the newly created function. And concat all the firstCalled params with future
//arguments in the newly created function.

//We get a warning that the prototype properties are 'Read only'.
//We can create a new function with constructor and extend the prototype by adding our method.
// All inherited new functions will have this method.





