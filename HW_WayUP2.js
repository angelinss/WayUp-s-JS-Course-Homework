//Task 1

for(let i = 10; i <= 50; i++) {
    if(i % 2 == 0) {
        console.log(i);
    }
}

//Task 2

const user = {
    firstName: 'Angelina',
    lastName: 'Novikova',
    age: 20,
    pets: true
};

//Task 3

const array = [
    'я в Симбирск,',
    'в трактире.',
    'с утра',
    'В ту же ночь',
    'Я остановился',
    'для закупки', 
    'что и было поручено Савельичу.',
    'приехал,',
    'где должен был',
    'нужных вещей',
    'отправился по лавкам',
    'пробыть сутки',
    'Савельич'
]

let result = ['В ту же ночь','приехал', 'я в Симбирск','где должен был', 'пробыть сутки', 'для закупки', 'нужных вещей,', 'что и было поручено Савельичу.', 'Я остановился', 'в трактире.', 'Савельич', 'с утра', 'отправился по лавкам'  ]
console.log(result)

//Task 4

let firstName2 = 'Angelina';
let lastName2 = 'Novikova';
const fullName = `${firstName2} ${lastName2}`;
console.log(fullName);


//Task 5

let num = 21;
while(num < 67) {
    num++
    if(num%2)
    console.log(num)
}