import path from '../datas/logements.json'

async function fetchItems ()  {
       try {
         const response = await fetch(path);
         const data = await response.json();
         return data;
       } catch (error) {
         console.log('Une erreur s\'est produite lors de la récupération des données :', error);
         return [];
       }
     };

export default fetchItems