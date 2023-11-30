/**
 * generates an array of numbers in random order, including all numbers 1 through num
 *
 * @param {number} num
 * @returns {number[]}
 */
const generateRandomOrderArray = (num) => {
  if (typeof num !== "number" || num <= 0)
    throw new Error("num must be a positive number");

  let inOrder = [...new Array(num)].map((_, i) => i + 1);
  let randomOrder = [];

  while (inOrder.length > 0) {
    const index = Math.floor(Math.random() * inOrder.length);

    randomOrder.push(inOrder[index]);

    inOrder.splice(index, 1);
  }

  return randomOrder;
};

module.exports = generateRandomOrderArray;
