const fetchRecipes = async (id, newIngredientList = []) => {
  var ingredientListParam = newIngredientList.map((ingredient) => `${ingredient.ingredientName}`).join(',');
  if (newIngredientList.length == 0) {
    ingredientListParam = "empty";
  }
  const response = await fetch(`https://pantri-server.herokuapp.com/testRecipes/${id}/${ingredientListParam}`);
  const data = await response.json();
  return data;
};

export default fetchRecipes;
