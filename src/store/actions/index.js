export function getRecipe() {
  const request = fetch(
    'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/479101/information',
    {
      method: 'GET',
      headers: {
        'x-rapidapi-host':
          'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
        'x-rapidapi-key': '34c7de6165msh7590624f4d29298p17edcejsn257308d89ee1',
      },
    },
  )
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.error(err);
    });
  return {
    type: 'GET_RECIPE',
    payload: request,
  };
}
