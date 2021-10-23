import axios from 'axios';
export const getRecipeInfo = () => {
  const options = {
    method: 'GET',
    url: 'https://love-calculator.p.rapidapi.com/getPercentage',
    params: {sname: 'Alice', fname: 'John'},
    headers: {
      'x-rapidapi-host': 'love-calculator.p.rapidapi.com',
      'x-rapidapi-key': '34c7de6165msh7590624f4d29298p17edcejsn257308d89ee1',
    },
  };
  axios
    .request(options)
    .then(response => response.data)
    .catch(function (error) {
      console.error(error);
    });
};
