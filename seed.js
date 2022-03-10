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
    calories: '105', 
    edamanId: 'food_bjsfxtcaidvmhaa3afrbna43q3hu', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/9f6/9f6181163a25c96022ee3fc66d9ebb11.jpg',
    qty: '1.0',
    measurementType: 'Medium Banana',
  },
  { 
    name: 'avocado', 
    calories: '322', 
    edamanId: 'food_b0yuze4b1g3afpanijno5abtiu28', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/984/984a707ea8e9c6bf5f6498970a9e6d9d.jpg',
    qty: '1.0',
    measurementType: 'Avocado',
  },
  { 
    name: 'apple', 
    calories: '95', 
    edamanId: 'food_a1gb9ubb72c7snbuxr3weagwv0dd', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/42c/42c006401027d35add93113548eeaae6.jpg',
    qty: '1.0',
    measurementType: 'Apple',
  },
  { 
    name: 'asparagus', 
    calories: '48', 
    edamanId: 'food_bpkl8kmahyao17b1pvce5bua1iao', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/9ca/9caf90492f148dc3deee587160c3990e.jpg',
    qty: '12.0',
    measurementType: 'Large Asparagus',
  },
  { 
    name: 'broccoli', 
    calories: '105', 
    edamanId: 'food_aahw0jha9f8337ajbopx9aec6z7i', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/3e4/3e47317a3dd54dc911b9c44122285df1.jpg',
    qty: '30.0',
    measurementType: 'Florets',
    caloricDensity: 'green'
  },
  { 
    name: 'grapefruit', 
    calories: '104', 
    edamanId: 'food_a5jyw74bd45tgfazfags0akmsjlv', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/ac6/ac6139365343036d75bd5999cca5145f.jpg',
    qty: '1.0',
    measurementType: 'Fruit',
    caloricDensity: 'green'
  },
  { 
    name: 'blueberries', 
    calories: '80', 
    edamanId: 'food_b0yuze4b1g3afpanijno5abtiu28', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/984/984a707ea8e9c6bf5f6498970a9e6d9d.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green'
  },
  { 
    name: 'cherries', 
    calories: '134', 
    edamanId: 'food_bv3hog1bd5qa4oafi7lb3bjz8i92', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/34b/34b23d901752b022d6ab1ee6f9ed0b74.jpg',
    qty: '20.0',
    measurementType: 'Cherries',
    caloricDensity: 'green'
  },
  { 
    name: 'cherry tomatoes', 
    calories: '27', 
    edamanId: 'food_a30b0hpbvavginafe0tocbf6ymje', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/23e/23e727a14f1035bdc2733bb0477efbd2.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green'
  },
  { 
    name: 'cucumber', 
    calories: '18', 
    edamanId: 'food_bv7aggjag9rxsaatklqzobca5fzn', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/501/5015da0e5fc2b384696b3d949aefef86.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green'
  },
  { 
    name: 'grapes', 
    calories: '54', 
    edamanId: 'food_bncple4a2uagu1b4hov92budz2vs', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/ca5/ca55ac74deb991d159942c65777115df.jpg"https://www.edamam.com/food-img/ca5/ca55ac74deb991d159942c65777115df.jpg',
    qty: '16.0',
    measurementType: 'Grapes',
    caloricDensity: 'green'
  },
  { 
    name: 'mango', 
    calories: '201', 
    edamanId: 'food_an1dqoib8xj3tyb3pr7c0abi4rbw', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/6e0/6e04857756d0876f14bfc035ff238e0b.png',
    qty: '1.0',
    measurementType: 'Mango',
    caloricDensity: 'green'
  },
  { 
    name: 'mixed berries', 
    calories: '65', 
    edamanId: 'food_b0yuze4b1g3afpanijno5abtiu28', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/984/984a707ea8e9c6bf5f6498970a9e6d9d.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green'
  },
  { 
    name: 'pear', 
    calories: '65', 
    edamanId: 'food_bq6stkiaxkwhxia9q4v7wanjnew0"', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/65a/65aec51d264db28bbe27117c9fdaaca7.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green'
  },
  { 
    name: 'pinneapple', 
    calories: '65', 
    edamanId: 'food_b5maw38amr54vpat8d5vhbgmqfxn', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/2da/2da6f2397ab64ed185c082edebc4dd7c.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green'
  },
  { 
    name: 'pomegranate', 
    calories: '65', 
    edamanId: 'food_b43po6ubmv934gb4dfd1kaic8fxa', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/342/342903acce5f863b7683cff3644931a8.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green'
  },
  { 
    name: 'raspberries', 
    calories: '65', 
    edamanId: 'food_al3e7s2a1lm4i6bga7o0abp399zg', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/a67/a671e604bed03c27259eab176c781e22.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green'
  },
  { 
    name: 'strawberries', 
    calories: '65', 
    edamanId: 'food_b4s2ibkbrrucmbabbaxhfau8ay42', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/00c/00c8851e401bf7975be7f73499b4b573.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green'
  },
  { 
    name: 'tomatoes', 
    calories: '65', 
    edamanId: 'food_a6k79rrahp8fe2b26zussa3wtkqh', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/23e/23e727a14f1035bdc2733bb0477efbd2.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'fruit'
  },
  { 
    name: 'watermelon', 
    calories: '65', 
    edamanId: 'food_b0yuze4b1g3afpanijno5abtiu28', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/984/984a707ea8e9c6bf5f6498970a9e6d9d.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green'
  },
  { 
    name: 'mixed berries', 
    calories: '65', 
    edamanId: 'food_b0yuze4b1g3afpanijno5abtiu28', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/984/984a707ea8e9c6bf5f6498970a9e6d9d.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green'
  },
  { 
    name: 'mixed berries', 
    calories: '65', 
    edamanId: 'food_b0yuze4b1g3afpanijno5abtiu28', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/984/984a707ea8e9c6bf5f6498970a9e6d9d.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green'
  },
  { 
    name: 'mixed berries', 
    calories: '65', 
    edamanId: 'food_b0yuze4b1g3afpanijno5abtiu28', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/984/984a707ea8e9c6bf5f6498970a9e6d9d.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green'
  },
  { 
    name: 'mixed berries', 
    calories: '65', 
    edamanId: 'food_b0yuze4b1g3afpanijno5abtiu28', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/984/984a707ea8e9c6bf5f6498970a9e6d9d.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green'
  },
  { 
    name: 'mixed berries', 
    calories: '65', 
    edamanId: 'food_b0yuze4b1g3afpanijno5abtiu28', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/984/984a707ea8e9c6bf5f6498970a9e6d9d.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green'
  },
  { 
    name: 'mixed berries', 
    calories: '65', 
    edamanId: 'food_b0yuze4b1g3afpanijno5abtiu28', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/984/984a707ea8e9c6bf5f6498970a9e6d9d.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green'
  },
  { 
    name: 'mixed berries', 
    calories: '65', 
    edamanId: 'food_b0yuze4b1g3afpanijno5abtiu28', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/984/984a707ea8e9c6bf5f6498970a9e6d9d.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green'
  },
  { 
    name: 'mixed berries', 
    calories: '65', 
    edamanId: 'food_b0yuze4b1g3afpanijno5abtiu28', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/984/984a707ea8e9c6bf5f6498970a9e6d9d.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green'
  },
  { 
    name: 'mixed berries', 
    calories: '65', 
    edamanId: 'food_b0yuze4b1g3afpanijno5abtiu28', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/984/984a707ea8e9c6bf5f6498970a9e6d9d.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green'
  },
  { 
    name: 'mixed berries', 
    calories: '65', 
    edamanId: 'food_b0yuze4b1g3afpanijno5abtiu28', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/984/984a707ea8e9c6bf5f6498970a9e6d9d.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green'
  },
  { 
    name: 'mixed berries', 
    calories: '65', 
    edamanId: 'food_b0yuze4b1g3afpanijno5abtiu28', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/984/984a707ea8e9c6bf5f6498970a9e6d9d.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green'
  },
  { 
    name: 'mixed berries', 
    calories: '65', 
    edamanId: 'food_b0yuze4b1g3afpanijno5abtiu28', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/984/984a707ea8e9c6bf5f6498970a9e6d9d.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green'
  },
  ]);

  console.log(items)

  process.exit();

})();