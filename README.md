# Random order number array

This code takes in an argument `num` and generates an array of numbers, in random order, 1 through `num` inclusive.

The logic for this array generation is found in the function `generateRandomOrderArray`. This function is imported into index.js and run there.

## Project setup

All of the code could have just been included in the index.js file, but separating the array generation logic into its own file makes the code more reusable. If this were a large project, the code would be more maintainable if separated into smaller, simpler modules. Now the `generateRandomOrderArray` function can be reused anywhere in the code, and if any changes need to be made to the logic, those changes can be implemented once in this file.

## Index.js

To make the code more reusable, I gave `generateRandomOrderArray` a parameter `num`. It isn't restricted only to 10,000, but can be reused with any number greater than 0. Currently num is set to 10,000, but feel free to change this to any other number to see what happens.

`generateRandomOrderArray` returns the array, and the array can be used however the developer chooses. In index.js it is saved to a variable and logged to the console. This way, the person running this code can verify that the array contains all required numbers in random order.

I also chose to keep track of the time it takes the function to run, as well as the memory used. This was not required, but it helped me understand how changes to the logic affected its performance. Node.js has a built in memoryUsage function, and its "heapUsed" property helped me determine an approximate value for the memory used by this code.

## generateRandomOrderArray.js

Since the elements of the random array, called `randomOrder`, needed to be unique and in a random order, there needed to be a way to keep track of which numbers had already been used as the array was being built. This meant there would need to be an additional data structure, or some kind of check would need to be performed upon adding a new number to the random array.

My solution was to create an initial array, called `inOrder`, filled with all the numbers between 1 and `num`. First an array of empty slots is created with a length of `num`, and `map` is used to create an array with all the values, using the current index and adding 1. This gives us an array with all unique numbers.

Next, we randomly remove an element from `inOrder` (using `splice()`) and add it to the `randomOrder`. We get the random element by using `Math.random()` to get a random number between 0 and 1, then multiplying it by the current length of the `inOrder`. The current length is used instead of `num` because as we remove elements from it, its size will decrease, and this ensures the random index we get always exists in the current version of the `inOrder`.

When the length of `inOrder` is 0, we know we have removed all its elements and `randomOrder` can be returned.

To ensure this all goes smoothly, before creating `inOrder`, `num` is checked to confirm that it is a number and that it is not negative. Otherwise, unexpected results can occur which may not even throw an error. If the check fails, an error is thrown.
