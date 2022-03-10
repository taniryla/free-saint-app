require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Item = require('./models/item');

(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'gluten-free', sortOrder: 10},
    {name: 'keto-friendly', sortOrder: 20},
    {name: 'paleo', sortOrder: 30},
    {name: 'pescatarian', sortOrder: 40},
    {name: 'vegan', sortOrder: 50},
    {name: 'vegetarian', sortOrder: 60},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([   
  { 
    name: 'banana', 
    calories: '89', 
    edamanId: 'food_bjsfxtcaidvmhaa3afrbna43q3hu', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/9f6/9f6181163a25c96022ee3fc66d9ebb11.jpg',
    qty: '1.0',
    measurementType: 'Serving',
  },
  { 
    name: 'avocado', 
    calories: '160', 
    edamanId: 'food_b0yuze4b1g3afpanijno5abtiu28', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/984/984a707ea8e9c6bf5f6498970a9e6d9d.jpg',
    qty: '1.0',
    measurementType: 'Serving',
  },
  { 
    name: 'apple', 
    calories: '52', 
    edamanId: 'food_a1gb9ubb72c7snbuxr3weagwv0dd', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/42c/42c006401027d35add93113548eeaae6.jpg',
    qty: '1.0',
    measurementType: 'Serving',
  },
  { 
    name: 'asparagus', 
    calories: '15', 
    edamanId: 'food_bpkl8kmahyao17b1pvce5bua1iao', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/9ca/9caf90492f148dc3deee587160c3990e.jpg',
    qty: '1.0',
    measurementType: 'Serving',
  },
  { 
    name: 'broccoli', 
    calories: '34', 
    edamanId: 'food_aahw0jha9f8337ajbopx9aec6z7i', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/3e4/3e47317a3dd54dc911b9c44122285df1.jpg',
    qty: '1.0',
    measurementType: 'Serving',
    caloricDensity: 'green'
  },
  { 
    name: 'grapefruit', 
    calories: '33', 
    edamanId: 'food_a5jyw74bd45tgfazfags0akmsjlv', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/ac6/ac6139365343036d75bd5999cca5145f.jpg',
    qty: '1.0',
    measurementType: 'Serving',
    caloricDensity: 'green'
  },
  { 
    name: 'blueberries', 
    calories: '57', 
    edamanId: 'food_b0yuze4b1g3afpanijno5abtiu28', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/984/984a707ea8e9c6bf5f6498970a9e6d9d.jpg',
    qty: '1.0',
    measurementType: 'Serving',
    caloricDensity: 'green'
  },
  { 
    name: 'cherries', 
    calories: '63', 
    edamanId: 'food_bv3hog1bd5qa4oafi7lb3bjz8i92', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/34b/34b23d901752b022d6ab1ee6f9ed0b74.jpg',
    qty: '1.0',
    measurementType: 'Serving',
    caloricDensity: 'green'
  },
  { 
    name: 'cherry tomatoes', 
    calories: '18', 
    edamanId: 'food_a30b0hpbvavginafe0tocbf6ymje', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/23e/23e727a14f1035bdc2733bb0477efbd2.jpg',
    qty: '1.0',
    measurementType: 'Serving',
  },
  { 
    name: 'cucumber', 
    calories: '15', 
    edamanId: 'food_bv7aggjag9rxsaatklqzobca5fzn', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/501/5015da0e5fc2b384696b3d949aefef86.jpg',
    qty: '1.0',
    measurementType: 'Serving',
  },
  { 
    name: 'grapes', 
    calories: '69', 
    edamanId: 'food_bncple4a2uagu1b4hov92budz2vs', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/ca5/ca55ac74deb991d159942c65777115df.jpg"https://www.edamam.com/food-img/ca5/ca55ac74deb991d159942c65777115df.jpg',
    qty: '1.0',
    measurementType: 'Serving',
  },
  { 
    name: 'mango', 
    calories: '60', 
    edamanId: 'food_an1dqoib8xj3tyb3pr7c0abi4rbw', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/6e0/6e04857756d0876f14bfc035ff238e0b.png',
    qty: '1.0',
    measurementType: 'Serving',
  },
  { 
    name: 'avocado"', 
    calories: '160', 
    edamanId: 'food_b0yuze4b1g3afpanijno5abtiu28', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/984/984a707ea8e9c6bf5f6498970a9e6d9d.jpg',
    qty: '1.0',
    measurementType: 'Serving',
  },
  ]);

  console.log(items)

  process.exit();

})();