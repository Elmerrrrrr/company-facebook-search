
var randomArray =  Array(11).fill().map(() => Math.round(Math.random() * 100))
console.log(randomArray);

export const employeesData = [
  {
    id: 1,
    name: 'Leanne Graham',
    gender:'women',
    username: 'Bret',
    email: 'Sincere@company.biz',
    photo: `${randomArray[1]}`
  },
  {
    id: 2,
    name: 'Ervin Howell',
    gender:'men',
    username: 'Antonette',
    email: 'Shanna@company.biz',
    photo: `${randomArray[2]}`
   },
  {
    id: 3,
    name: 'Clementine Bauch',
    gender:'women',
    username: 'Samantha',
    email: 'Nathan@company.biz',
    photo: `${randomArray[3]}`
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    gender:'women',
    username: 'Karianne',
    email: 'Julianne.OConner@company.biz',
    photo: `${randomArray[4]}`
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    gender:'women',
    username: 'Kamren',
    email: 'Lucio_Hettinger@company.biz',
    photo: `${randomArray[5]}` 
   },
  {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    gender:'men',
    username: 'Leopoldo_Corkery',
    email: 'Karley_Dach@company.biz',
    photo: `${randomArray[6]}`
    },
  {
    id: 7,
    name: 'Kurtis Weissnat',
    gender:'men',
    username: 'Elwyn.Skiles',
    email: 'Telly.Hoeger@company.biz',
    photo: `${randomArray[7]}`
  },
  {
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    gender:'men',
    username: 'Maxime_Nienow',
    email: 'Sherwood@company.biz',
    photo: `${randomArray[8]}`
  },
  {
    id: 9,
    name: 'Glenna Reichert',
    gender:'women',
    username: 'Delphine',
    email: 'Chaim_McDermott@company.biz',
    photo: `${randomArray[9]}`
  },
  {
    id: 10,
    name: 'Clementina DuBuque',
    gender:'women',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@company.biz',
    photo: `${randomArray[10]}`
  }
];