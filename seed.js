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
    caloricDensity: 'green',
    foodType: 'fruit'
  },
  { 
    name: 'avocado', 
    calories: '322', 
    edamanId: 'food_b0yuze4b1g3afpanijno5abtiu28', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/984/984a707ea8e9c6bf5f6498970a9e6d9d.jpg',
    qty: '1.0',
    measurementType: 'Avocado',
    caloricDensity: 'green',
    foodType: 'fruit'
  },
  { 
    name: 'apple', 
    calories: '95', 
    edamanId: 'food_a1gb9ubb72c7snbuxr3weagwv0dd', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/42c/42c006401027d35add93113548eeaae6.jpg',
    qty: '1.0',
    measurementType: 'Apple',
    caloricDensity: 'green',
    foodType: 'fruit'
  },
  { 
    name: 'asparagus', 
    calories: '48', 
    edamanId: 'food_bpkl8kmahyao17b1pvce5bua1iao', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/9ca/9caf90492f148dc3deee587160c3990e.jpg',
    qty: '12.0',
    measurementType: 'Large Asparagus',
    caloricDensity: 'green',
    foodType: 'vegetables'
  },
  { 
    name: 'broccoli', 
    calories: '105', 
    edamanId: 'food_aahw0jha9f8337ajbopx9aec6z7i', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/3e4/3e47317a3dd54dc911b9c44122285df1.jpg',
    qty: '30.0',
    measurementType: 'Florets',
    caloricDensity: 'green',
    foodType: 'vegetables'
  },
  { 
    name: 'grapefruit', 
    calories: '104', 
    edamanId: 'food_a5jyw74bd45tgfazfags0akmsjlv', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/ac6/ac6139365343036d75bd5999cca5145f.jpg',
    qty: '1.0',
    measurementType: 'Fruit',
    caloricDensity: 'green',
    foodType: 'fruit'
  },
  { 
    name: 'blueberries', 
    calories: '80', 
    edamanId: 'food_b0yuze4b1g3afpanijno5abtiu28', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/984/984a707ea8e9c6bf5f6498970a9e6d9d.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'fruit'
  },
  { 
    name: 'cherries', 
    calories: '134', 
    edamanId: 'food_bv3hog1bd5qa4oafi7lb3bjz8i92', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/34b/34b23d901752b022d6ab1ee6f9ed0b74.jpg',
    qty: '20.0',
    measurementType: 'Cherries',
    caloricDensity: 'green',
    foodType: 'fruit'
  },
  { 
    name: 'cherry tomatoes', 
    calories: '27', 
    edamanId: 'food_a30b0hpbvavginafe0tocbf6ymje', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/23e/23e727a14f1035bdc2733bb0477efbd2.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'fruit'
  },
  { 
    name: 'cucumber', 
    calories: '18', 
    edamanId: 'food_bv7aggjag9rxsaatklqzobca5fzn', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/501/5015da0e5fc2b384696b3d949aefef86.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'fruit'
  },
  { 
    name: 'grapes', 
    calories: '54', 
    edamanId: 'food_bncple4a2uagu1b4hov92budz2vs', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/ca5/ca55ac74deb991d159942c65777115df.jpg"https://www.edamam.com/food-img/ca5/ca55ac74deb991d159942c65777115df.jpg',
    qty: '16.0',
    measurementType: 'Grapes',
    caloricDensity: 'green',
    foodType: 'fruit'
  },
  { 
    name: 'mango', 
    calories: '201', 
    edamanId: 'food_an1dqoib8xj3tyb3pr7c0abi4rbw', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/6e0/6e04857756d0876f14bfc035ff238e0b.png',
    qty: '1.0',
    measurementType: 'Mango',
    caloricDensity: 'green',
    foodType: 'fruit'
  },
  { 
    name: 'mixed berries', 
    calories: '65', 
    edamanId: 'food_b0yuze4b1g3afpanijno5abtiu28', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/984/984a707ea8e9c6bf5f6498970a9e6d9d.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'fruit'
  },
  { 
    name: 'pear', 
    calories: '84', 
    edamanId: 'food_bq6stkiaxkwhxia9q4v7wanjnew0"', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/65a/65aec51d264db28bbe27117c9fdaaca7.jpg',
    qty: '1.0',
    measurementType: '1 Pear, Small',
    caloricDensity: 'green',
    foodType: 'fruit'
  },
  { 
    name: 'pinneapple', 
    calories: '82', 
    edamanId: 'food_b5maw38amr54vpat8d5vhbgmqfxn', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/2da/2da6f2397ab64ed185c082edebc4dd7c.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'fruit'
  },
  { 
    name: 'pomegranate', 
    calories: '144', 
    edamanId: 'food_b43po6ubmv934gb4dfd1kaic8fxa', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/342/342903acce5f863b7683cff3644931a8.jpg',
    qty: '1.0',
    measurementType: 'Cup Arils(Seed/Juice Sacs)',
    caloricDensity: 'green',
    foodType: 'fruit'
  },
  { 
    name: 'raspberries', 
    calories: '56', 
    edamanId: 'food_al3e7s2a1lm4i6bga7o0abp399zg', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/a67/a671e604bed03c27259eab176c781e22.jpg',
    qty: '4.0',
    measurementType: 'Serving (oz)',
    caloricDensity: 'green',
    foodType: 'fruit'
  },
  { 
    name: 'strawberries', 
    calories: '58', 
    edamanId: 'food_b4s2ibkbrrucmbabbaxhfau8ay42', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/00c/00c8851e401bf7975be7f73499b4b573.jpg',
    qty: '10.0',
    measurementType: 'Large Strawberries',
    caloricDensity: 'green',
    foodType: 'fruit'
  },
  { 
    name: 'tomatoes', 
    calories: '22', 
    edamanId: 'food_a6k79rrahp8fe2b26zussa3wtkqh', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/23e/23e727a14f1035bdc2733bb0477efbd2.jpg',
    qty: '1.0',
    measurementType: 'Medium',
    caloricDensity: 'green',
    foodType: 'fruit'
  },
  { 
    name: 'watermelon', 
    calories: '46', 
    edamanId: 'food_aom4czfarp4wsxaeshkohaig1ou5', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/e83/e83c09ce97ecd44e00b8c561ab682202.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'fruit'
  },
  { 
    name: 'barley', 
    calories: '193', 
    edamanId: 'food_aqhng66a3do8dqbef41d6bgw6cin', 
    category: ['vegan', 'vegetarian', 'pescatarian'],    
    image: 'https://www.edamam.com/food-img/9b1/9b1add099acc71e8e7a31be0729b6936.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'grains'
  },
  { 
    name: 'bread wheat sprouted', 
    calories: '110', 
    edamanId: 'food_a3049hmbqj5wstaeeb3udaz6uaqv"', 
    category: ['vegan', 'vegetarian', 'pescatarian'],    
    image: 'https://www.edamam.com/food-img/886/886960f6ce6ccec5b9163bacf2996853.jpg',
    qty: '1.0',
    measurementType: 'Slice',
    caloricDensity: 'green',
    foodType: 'grains'
  },
  { 
    name: 'brown cooked rice', 
    calories: '327', 
    edamanId: 'food_brqcp7fardef20b44y8riax4k0yz', 
    category: ['vegan', 'vegetarian', 'pescatarian'],    
    image: 'https://www.edamam.com/food-img/43e/43e669c6de11504972da1ae1898ac19e.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'grains'
  },
  { 
    name: 'bulgur wheat', 
    calories: '151', 
    edamanId: 'food_bkevmilaxvl8qubrav0bab1gvbr3', 
    category: ['vegan', 'vegetarian', 'pescatarian'],    
    image: 'https://www.edamam.com/food-img/183/183954dec093fbb5929dae32031cacc7.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'grains'
  },
  { 
    name: 'cooked oatmeal', 
    calories: '166', 
    edamanId: 'food_bd8e66ca0ktqncbnahohzas7tgzg', 
    category: ['vegan', 'vegetarian', 'pescatarian'],    
    image: 'https://www.edamam.com/food-img/d73/d7368938b793cea3d033553e012be544.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'grains'
  },
  { 
    name: 'corn tortillas', 
    calories: '208', 
    edamanId: 'food_bhw0b95agm97s0abfignnb8fsvb3', 
    category: ['vegan', 'vegetarian', 'pescatarian'],    
    image: 'https://www.edamam.com/food-img/b8a/b8ad23dcc06f2324f944e47eb579d644.jpg',
    qty: '4.0',
    measurementType: 'Tortillas',
    caloricDensity: 'green',
    foodType: 'grains'
  },
  { 
    name: 'grits', 
    calories: '151', 
    edamanId: 'food_axnhyzqblo14jxabouwarbc2bs7l', 
    category: ['vegan', 'vegetarian', 'pescatarian'],    
    image: 'https://www.edamam.com/food-img/78c/78ce41c9ac3abdcf8857ba7c5aae47ce.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'grains'
  },
  { 
    name: 'quinoa', 
    calories: '222', 
    edamanId: 'food_acc1dplaepqqd3a5wrj6la1s34zw', 
    category: ['vegan', 'vegetarian', 'pescatarian'],    
    image: 'https://www.edamam.com/food-img/e02/e02246c3856098598f4b7e04fd2d4e4e.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'grains'
  },
  { 
    name: 'soba noodles', 
    calories: '113', 
    edamanId: 'food_bjqs981ba4brmoarvdtxaah1pgsl', 
    category: ['vegan', 'vegetarian', 'pescatarian'],    
    image: 'https://www.edamam.com/food-img/25d/25d50c574c99a627c1b9ade0034fca12.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'grains'
  },
  { 
    name: 'whole grain english muffin', 
    calories: '134', 
    edamanId: 'food_bq9xyjcbffze0tao2b3z8a646cp3', 
    category: ['vegan', 'vegetarian', 'pescatarian'],    
    image: 'https://www.edamam.com/food-img/cac/cac9a071d5da19d9c8b8af9ddaa9a186.jpg',
    qty: '1.0',
    measurementType: 'Muffin',
    caloricDensity: 'green',
    foodType: 'grains'
  },
  { 
    name: 'whole grain pasta', 
    calories: '238', 
    edamanId: 'food_aup73tlbxslvhwa3ja27ca2gr51o', 
    category: ['vegan', 'vegetarian', 'pescatarian'],    
    image: 'https://www.edamam.com/food-img/738/73846a8750bb3134aada6b711dc2919d.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'grains'
  },
  { 
    name: 'whole grain wheat bread', 
    calories: '100', 
    edamanId: 'food_a3049hmbqj5wstaeeb3udaz6uaqv', 
    category: ['vegan', 'vegetarian', 'pescatarian'],    
    image: 'https://www.edamam.com/food-img/886/886960f6ce6ccec5b9163bacf2996853.jpg',
    qty: '1.0',
    measurementType: 'Thick Slice',
    caloricDensity: 'green',
    foodType: 'grains'
  },
  { 
    name: 'almond milk', 
    calories: '56', 
    edamanId: 'food_a3049hmbqj5wstaeeb3udaz6uaqv', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/b26/b267bf598feaabd7349fddda7a481f00.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'beverages'
  },
  { 
    name: 'coffee', 
    calories: '2', 
    edamanId: 'food_ax0a0yxbbe4hx0apiz1tla01s2w7', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/ee9/ee9566349cb84dfd9ddac1fdf8cbc907.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'beverages'
  },
  { 
    name: 'kombucha', 
    calories: '34', 
    edamanId: 'food_be4bvp5bk9dn4mbfwpglkb66dexe', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/2e2/2e2fe81e1b63a61f6e4adec76220a11b.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'beverages'
  },
  { 
    name: 'smoothie, fruit only', 
    calories: '161', 
    edamanId: 'food_bglm6vxahuauteb0n6ynfbg9eryu', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/e31/e310952d214e78a4cb8b73f30ceeaaf2.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'beverages'
  },
  { 
    name: 'soy latte', 
    calories: '148', 
    edamanId: 'food_a9s841ya6wbvz9a338e34b9a64k7', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/2ef/2effbc5aa3e4169159ddc7204026a79e.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'beverages'
  },
  { 
    name: 'tea', 
    calories: '2', 
    edamanId: 'food_b8aoe5qbgar9fbbcvdj8ea7ekske', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/793/79376cb6e124624e22780db7401601a4.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'beverages'
  },
  { 
    name: 'vegetable juice', 
    calories: '56', 
    edamanId: 'food_anr6fyyaq3kaztb6an13va45c6sf', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://i.imgur.com/Xeh9FpH.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'beverages'
  },
  { 
    name: 'bell peppers', 
    calories: '32', 
    edamanId: 'food_a8g63g7ak6bnmvbu7agxibp4a0dy', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/4dc/4dc48b1a506d334b4ab6671b9d56a18f.jpeg',
    qty: '1.0',
    measurementType: 'Pepper',
    caloricDensity: 'green',
    foodType: 'vegetables'
  },
  { 
    name: 'brussel sprouts', 
    calories: '28', 
    edamanId: 'food_bkr6xbxbvl7pgua0vy4ibblf93qq', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/28a/28a88a795cd97a3b3b28b65eb8bff5aa.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'vegetables'
  },
  { 
    name: 'cabbage', 
    calories: '22', 
    edamanId: 'food_afb4o8kb767k0iapchxupaifxk1z', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/cb1/cb1411c925c19de26620e63cb90d0e14.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'vegetables'
  },
  { 
    name: 'carrots', 
    calories: '100', 
    edamanId: 'food_buqfaxubzh6hi5asev8a5aj9sr71', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/121/121e33fce0bb9546ed7d060b6c114e29.jpg',
    qty: '4.0',
    measurementType: 'Serving (2 oz per Serving)',
    caloricDensity: 'green',
    foodType: 'vegetables'
  },
  { 
    name: 'cauliflower', 
    calories: '3', 
    edamanId: 'food_buqfaxubzh6hi5asev8a5aj9sr71', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/ca2/ca217d31067dffd35ce1215e7f336bd8.jpg',
    qty: '1.0',
    measurementType: 'Floweret',
    caloricDensity: 'green',
    foodType: 'vegetables'
  },
  { 
    name: 'celery', 
    calories: '6', 
    edamanId: 'food_bffeoksbyyur8ja4da73ub2xs57g', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/d91/d91d2aed1c36d8fad54c4d7dc58f5a18.jpg',
    qty: '1.0',
    measurementType: 'Stalk',
    caloricDensity: 'green',
    foodType: 'vegetables'
  },
  { 
    name: 'green beans', 
    calories: '44', 
    edamanId: 'food_aceucvpau4a8v6atkx5eabxyoqdn', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/891/89135f10639878a2360e6a33c9af3d91.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'vegetables'
  },
  { 
    name: 'green salad', 
    calories: '34', 
    edamanId: 'food_bqalyxzbzu04hcb8xj930bzar7xg', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/b6d/b6d9f3052d27a3c71220cfa55c6f0a42.jpg',
    qty: '3.0',
    measurementType: 'Bowl(s)',
    caloricDensity: 'green',
    foodType: 'vegetables'
  },
  { 
    name: 'kale', 
    calories: '18', 
    edamanId: 'food_avmg2xfbv1p91yavoxjg7bddvfaz', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/8e9/8e9c5417fa012e5ca068fddc5f8d3d6c.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'vegetables'
  },
  { 
    name: 'lettuce', 
    calories: '8', 
    edamanId: 'food_bf5fxtkbc9alwoajuvsi7amonr5w', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/719/71996625d0cb47e197093ecd52c97dc2.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'vegetables'
  },
  { 
    name: 'mixed greens', 
    calories: '8', 
    edamanId: 'food_bqalyxzbzu04hcb8xj930bzar7xg', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/b6d/b6d9f3052d27a3c71220cfa55c6f0a42.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'vegetables'
  },
  { 
    name: 'mushrooms', 
    calories: '15', 
    edamanId: 'food_bvlose6arfl26ra396sjrb7hetqh', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/d63/d639cf4a2afc7407c1d1ce286028136b.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'vegetables'
  },
  { 
    name: 'onion', 
    calories: '28', 
    edamanId: 'food_bmrvi4ob4binw9a5m7l07amlfcoy', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg',
    qty: '1.0',
    measurementType: 'Small Onion',
    caloricDensity: 'green',
    foodType: 'vegetables'
  },
  { 
    name: 'peas', 
    calories: '134', 
    edamanId: 'food_bbi35jtbjt7un9bsa2m7eazlsk91', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/5ed/5ed641d646c028598a90bdb9ece34fc8.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'vegetables'
  },
  { 
    name: 'potatoes', 
    calories: '158', 
    edamanId: 'food_b2srd0cbo1zyudatmv3y5ad3umes', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://i.imgur.com/mdRwfHb.jpg',
    qty: '1.0',
    measurementType: 'Medium',
    caloricDensity: 'green',
    foodType: 'vegetables'
  },
  { 
    name: 'spaghetti squash', 
    calories: '126', 
    edamanId: 'food_bj1y3fnbefpaaoagd8c1dad4mdhr', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/bc0/bc073855712255d9478fb9baec6f2afc.jpg',
    qty: '1.0',
    measurementType: 'Bowl',
    caloricDensity: 'green',
    foodType: 'vegetables'
  },
  { 
    name: 'spinach', 
    calories: '82', 
    edamanId: 'food_aoceuc6bshdej1bbsdammbnj6l6o', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/e6e/e6e4be375c4554ce01c8ea75232efaa6.jpg',
    qty: '1.0',
    measurementType: 'Bowl',
    caloricDensity: 'green',
    foodType: 'vegetables'
  },
  { 
    name: 'sweet potatoes', 
    calories: '110', 
    edamanId: 'food_bg68yf2b3dlfusawgs590bjloxfd', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/b66/b660e3d37b4ea9d58cb98e8ea73933b6.jpg',
    qty: '1.0',
    measurementType: 'Sweet Potato',
    caloricDensity: 'green',
    foodType: 'vegetables'
  },
  { 
    name: 'zucchini', 
    calories: '21', 
    edamanId: 'food_avpihljbuwpd8ibbmahcabaros5s', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/f63/f637280594e4a731eccc1199194a8847.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'vegetables'
  },
  { 
    name: 'boiled or grilled lobster', 
    calories: '286', 
    edamanId: 'food_bljyewkaowvjseb7k6wctb5a1rrt', 
    category: ['gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://i.imgur.com/p1qj3K2.jpg',
    qty: '1.0',
    measurementType: 'Lobster',
    caloricDensity: 'green',
    foodType: 'meat protein'
  },
  { 
    name: 'boiled or grilled mahi-mahi', 
    calories: '85', 
    edamanId: 'food_bljyewkaowvjseb7k6wctb5a1rrt', 
    category: ['gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/3ea/3ea9d821fddd8c398f1dd083f0688864.jpg',
    qty: '1.0',
    measurementType: 'Fillet',
    caloricDensity: 'green',
    foodType: 'meat protein'
  },
  { 
    name: 'cooked shrimp', 
    calories: '105', 
    edamanId: 'food_bguh25xb1ibqqha7jdl8ha8ur8mw', 
    category: ['gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/78e/78e022770d4d46e0fe9e7e3c5a13110c.jpg',
    qty: '20.0',
    measurementType: 'Shrimps',
    caloricDensity: 'green',
    foodType: 'meat protein'
  },
  { 
    name: 'crab', 
    calories: '98', 
    edamanId: 'food_aj7w3xab0epj7cbgkbkpwadysovd"', 
    category: ['gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/c23/c23e20823b442067307aa436969358f1.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'meat protein'
  },
  { 
    name: 'egg whites', 
    calories: '17', 
    edamanId: 'food_ac9n68caswlpggbp7727varlyjk5', 
    category: ['gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/da5/da5978d61b89a363147a6d13c36e3b54.jpg',
    qty: '1.0',
    measurementType: 'Egg',
    caloricDensity: 'green',
    foodType: 'meat protein'
  },
  { 
    name: 'low sodium black beans', 
    calories: '218', 
    edamanId: 'food_bazzo85azdbkmsb56nu4ra5rphoe', 
    category: ['gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/850/8505bc3d47bbc820b69d532202f61ce1.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'meat protein'
  },
  { 
    name: 'oysters', 
    calories: '11', 
    edamanId: 'food_amv306gav25yjnasnhs0dam6jqcb', 
    category: ['gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/b6a/b6a2846f097ac730b512b3c998abbe7f.jpg',
    qty: '1.0',
    measurementType: 'Serving (21g)',
    caloricDensity: 'green',
    foodType: 'meat protein'
  },
  { 
    name: 'tofu', 
    calories: '177', 
    edamanId: 'food_a269ixea1yf51xbfwgnq2boiwc7x', 
    category: ['gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/b6a/b6ae13c3cfe37e16f820840f90231bff.jpg',
    qty: '0.5',
    measurementType: 'Block',
    caloricDensity: 'green',
    foodType: 'meat protein'
  },
  { 
    name: 'white fish fillet', 
    calories: '265', 
    edamanId: 'food_aw4231saaagpflaino4iqaumuapc', 
    category: ['gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/42c/42c99ddd36f31279746f81527d4f982e.jpg',
    qty: '1.0',
    measurementType: 'Fillet',
    caloricDensity: 'green',
    foodType: 'meat protein'
  },
  { 
    name: 'non-fat skim milk', 
    calories: '90', 
    edamanId: 'food_a8p4z9rbx6of06a8zyt4rb0bwyiz', 
    category: ['gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/525/525c95190fa7373279ac4c9cbfa436a4.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'dairy'
  },
  { 
    name: 'non-fat cheese sticks and slices', 
    calories: '298', 
    edamanId: 'food_bo3fs72aqydlwzadxjbykaahvx3v', 
    category: ['gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/cc3/cc3c4827d251d79eed1ff87c1861aa34.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'dairy'
  },
  { 
    name: 'non-fat cottage cheese', 
    calories: '160', 
    edamanId: 'food_bo3fs72aqydlwzadxjbykaahvx3v', 
    category: ['gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/cc3/cc3c4827d251d79eed1ff87c1861aa34.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'dairy'
  },
  { 
    name: 'non-fat cream cheese spread', 
    calories: '302', 
    edamanId: 'food_afw1vv1ac3l17wbn9gcq2autcc91', 
    category: ['gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/fc7/fc77c17a6b7310e939f328b32dc64e81.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'dairy'
  },
  { 
    name: 'non-fat greek yogurt', 
    calories: '160', 
    edamanId: 'food_bf6arknaq0ne39az8jdf5a24wuhl', 
    category: ['gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://i.imgur.com/PfUS8pX.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'dairy'
  },
  { 
    name: 'non-fat half and half', 
    calories: '10', 
    edamanId: 'food_bllwok7blguj59ao7oqp4avjisjc', 
    category: ['gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/969/96946d091362bcd9a4f86e4cb7ba2ce4.jpg',
    qty: '1.0',
    measurementType: 'tbsp',
    caloricDensity: 'green',
    foodType: 'dairy'
  },
  { 
    name: 'non-fat sour cream', 
    calories: '12', 
    edamanId: 'food_afw1vv1ac3l17wbn9gcq2autcc91', 
    category: ['gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/fc7/fc77c17a6b7310e939f328b32dc64e81.jpg',
    qty: '1.0',
    measurementType: 'tbsp',
    caloricDensity: 'green',
    foodType: 'dairy'
  },
  { 
    name: 'non-fat yogurt', 
    calories: '173', 
    edamanId: 'food_bllwok7blguj59ao7oqp4avjisjc', 
    category: ['gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/969/96946d091362bcd9a4f86e4cb7ba2ce4.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'dairy'
  },
  { 
    name: 'chicken bone broth', 
    calories: '41', 
    edamanId: 'food_bb2qjrjamst0vmam39stubtkmrs4', 
    category: ['gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/e61/e6184a8681b772e5198ef0ca1919e1b7.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'soups'
  },
  { 
    name: 'beef bone broth', 
    calories: '35', 
    edamanId: 'food_bb2qjrjamst0vmam39stubtkmrs4', 
    category: ['gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/e61/e6184a8681b772e5198ef0ca1919e1b7.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'soups'
  },
  { 
    name: 'vegetable bone broth', 
    calories: '13', 
    edamanId: 'food_bitqzx8b319psvbib2dufarphbxy', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/f3f/f3fa6996eba331be219778406f67a5a3.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'soups'
  },
  { 
    name: 'butternut squash soup', 
    calories: '220', 
    edamanId: 'food_baga212bywb6n2as0ylgkaf8fcok', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/0aa/0aa76af7d957416d766248b145aa5cbe.jpg',
    qty: '1.0',
    measurementType: 'Bowl',
    caloricDensity: 'green',
    foodType: 'soups'
  },
  { 
    name: 'cabbage soup', 
    calories: '50', 
    edamanId: 'food_afb4o8kb767k0iapchxupaifxk1z', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/cb1/cb1411c925c19de26620e63cb90d0e14.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'soups'
  },
  { 
    name: 'homemade chicken noodle soup', 
    calories: '100', 
    edamanId: 'food_ai9u369b0sh4nna64fawma1hs2kf', 
    category: ['keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/d7f/d7f1aed4cb83eae743ea3c781296418f.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'soups'
  },
  { 
    name: 'miso soup', 
    calories: '59', 
    edamanId: 'food_bu8imjua16o32cao2m4kravexpo7', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/352/3525e5a38bb13c74aa34ef6c0273bf33.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'soups'
  },
  { 
    name: 'spinach soup', 
    calories: '73', 
    edamanId: 'food_aoceuc6bshdej1bbsdammbnj6l6o', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/e6e/e6e4be375c4554ce01c8ea75232efaa6.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'soups'
  },
  { 
    name: 'tomato and lentil soup', 
    calories: '86', 
    edamanId: 'food_a6k79rrahp8fe2b26zussa3wtkqh', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/23e/23e727a14f1035bdc2733bb0477efbd2.jpg',
    qty: '1.0',
    measurementType: 'Bowl',
    caloricDensity: 'green',
    foodType: 'soups'
  },
  { 
    name: 'vegetable barley soup', 
    calories: '190', 
    edamanId: 'food_bnr1pu6blqhm6lajm0ga6bhl0jvt', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/32b/32baf9bd687a56afd88f726a6dc69882.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'soups'
  },
  { 
    name: 'vegetable pho', 
    calories: '352', 
    edamanId: 'food_bitqzx8b319psvbib2dufarphbxy', 
    category: ['vegan', 'vegetarian', 'gluten-free', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/f3f/f3fa6996eba331be219778406f67a5a3.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'soups'
  },
  { 
    name: 'pickles', 
    calories: '173', 
    edamanId: 'food_bnr1pu6blqhm6lajm0ga6bhl0jvt', 
    category: ['gluten-free', 'keto-friendly', 'pescatarian', 'paleo'],    
    image: 'https://www.edamam.com/food-img/32b/32baf9bd687a56afd88f726a6dc69882.jpg',
    qty: '1.0',
    measurementType: 'Cup',
    caloricDensity: 'green',
    foodType: 'snacks'
  },
  
 
  
  ]);

  console.log(items)

  process.exit();

})();