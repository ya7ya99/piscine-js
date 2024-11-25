// Helper functions
function filterEntries(obj, predicate) {
    return Object.fromEntries(Object.entries(obj).filter(predicate));
}

function mapEntries(obj, mapper) {
    return Object.fromEntries(Object.entries(obj).map(mapper));
};

function reduceEntries(obj, reducer, initialValue) {
    return Object.entries(obj).reduce(reducer, initialValue);
};

function totalCalories(cart) {
    let total = 0;
    for (const item in cart) {
      const quantity = cart[item] / 100;
      total += nutritionDB[item].calories * quantity;
    }
    return parseFloat(total.toFixed(1));
  }

function lowCarbs(cart) {
    return filterEntries(cart, ([item, grams]) => {
        return (nutritionDB[item].carbs * grams / 100) < 50;
    });
};

function cartTotal(cart) {
    return mapEntries(cart, ([item, grams]) => {
        const itemNutrition = mapEntries(nutritionDB[item], ([nutrient, value]) => {
            return [nutrient, parseFloat((value * grams / 100).toFixed(3))];
        });
        return [item, itemNutrition];
    });
};

// const groceriesCart = { orange: 500, oil: 20, sugar: 480 }

// // console.log('Total calories:')
// // console.log(totalCalories(groceriesCart))