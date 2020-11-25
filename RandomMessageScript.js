// We create the arrays that will include the random words to be choosen.
const times = ['Tomorrow','Today','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
const meals = ['breakfast','lunch','dinner','snack']
const food = ['Scrambled eggs','Cereals','Corn flakes','Omellete','Salad','Soup','Pasta','Fried Chicken','Meatballs','Cauliflower','Tuna']

let random_time = times[Math.floor(Math.random()*times.length)]
let random_meal = meals[Math.floor(Math.random()*meals.length)]
let random_food = food[Math.floor(Math.random()*food.length)]