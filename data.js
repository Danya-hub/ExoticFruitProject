'use strict';

export const fruit = [{ //1
        id: 1,
        photoProduct: './assets/fruits/durain.jpg',
        title: 'Дуриан (Durian)',
        price: 98.86,
        stock: 80.38
    },
    { //2
        id: 2,
        photoProduct: './assets/fruits/Mangosteen.jpg',
        title: 'Мангостин (Mangosteen)',
        price: 25.37
    },
    { //3
        id: 3,
        photoProduct: './assets/fruits/Jackfruit.jpg',
        title: 'Джекфрут (Jackfruit)',
        price: 8.21
    },
    { //4
        id: 4,
        photoProduct: './assets/fruits/Lychee.jpg',
        title: 'Личи (Lychee)',
        price: 8.95
    },
    { //5
        id: 5,
        photoProduct: './assets/fruits/Mango.jpg',
        title: 'Манго (Mango)',
        price: 9.66,
        stock: 6.70
    },
    { //6
        id: 6,
        photoProduct: './assets/fruits/Papaya.jpg',
        title: 'Папайя (Papaya)',
        price: 5.78
    },
    { //7
        id: 7,
        photoProduct: './assets/fruits/Longan.jpg',
        title: 'Лонган (Longan)',
        price: 3.88
    },
    { //8
        id: 8,
        photoProduct: './assets/fruits/Rambutan.jpg',
        title: 'Рамбутан (Rambutan)',
        price: 31.34,
        stock: 25.09
    },
    { //9
        id: 9,
        photoProduct: './assets/fruits/Pitaya.jpg',
        title: 'Питайя (Pitaya)',
        price: 6.53
    },
    { //10
        id: 10,
        photoProduct: './assets/fruits/Carambola.jpg',
        title: 'Карамбола (Carambola)',
        price: 2.05
    },
    { //11
        id: 11,
        photoProduct: './assets/fruits/Pomelo.jpg',
        title: 'Помело (Pomelo)',
        price: 2.42
    },
    { //12
        id: 12,
        photoProduct: './assets/fruits/Guava.jpg',
        title: 'Гуава (Guava)',
        price: 13.43
    },
    { //13
        id: 13,
        photoProduct: './assets/fruits/Sapodilla.jpg',
        title: 'Саподилла (Sapodilla)',
        price: 2.16
    },
    { //14
        id: 14,
        photoProduct: './assets/fruits/SugarApple.jpg',
        title: 'Сахарное яблоко (Sugar Apple)',
        price: 14.40
    },
    { //15
        id: 15,
        photoProduct: './assets/fruits/Chompoo.jpg',
        title: 'Чомпу (Chompoo)',
        price: 14.92
    },
    { //16
        id: 16,
        photoProduct: './assets/fruits/Ackee.jpg',
        title: 'Аки (Ackee)',
        price: 20.26,
        stock: 14.95
    },
    { //17
        id: 17,
        photoProduct: './assets/fruits/Ambrella.jpg',
        title: 'Амбарелла (Ambarella)',
        price: 6.90
    },
    { //18
        id: 18,
        photoProduct: './assets/fruits/Bambangan.jpg',
        title: 'Бам-балан (Bambangan)',
        price: 4.63
    },
    { //19
        id: 19,
        photoProduct: './assets/fruits/Salak.jpg',
        title: 'Салак (Salak)',
        price: 1.83
    },
    { //20
        id: 20,
        photoProduct: './assets/fruits/Bael.jpg',
        title: 'Баиль (Bael)',
        price: 2.91
    },
    { //21
        id: 21,
        photoProduct: './assets/fruits/Sapodilla.jpg',
        title: 'Кивано (Kiwano)',
        price: 3.73
    },
    { //22
        id: 22,
        photoProduct: './assets/fruits/MiracleFruit.jpg',
        title: 'Магический фрукт (Miracle Fruit)',
        price: 6.75
    },
    { //23
        id: 23,
        photoProduct: './assets/fruits/Tamarind.jpg',
        title: 'Тамаринд (Tamarind)',
        price: 5.22
    },
    { //24
        id: 24,
        photoProduct: './assets/fruits/Marula.jpg',
        title: 'Марула (Marula)',
        price: 2.80
    },
    { //25
        id: 25,
        photoProduct: './assets/fruits/Kumquat.jpg',
        title: 'Кумкват (Kumquat)',
        price: 5.60
    },
    { //26
        id: 26,
        photoProduct: './assets/fruits/Citron.jpg',
        title: 'Цитрон (Citron)',
        price: 9.33
    },
    { //27
        id: 27,
        photoProduct: './assets/fruits/PepinoDulce.jpg',
        title: 'Пепино (Pepino Dulce)',
        price: 6.01
    },
    { //28
        id: 28,
        photoProduct: './assets/fruits/Mamey.jpg',
        title: 'Мамея (Mamey)',
        price: 7.95
    },
    { //29
        id: 29,
        photoProduct: './assets/fruits/Naranjilla.jpg',
        title: 'Наранхилла (Naranjilla)',
        price: 10.82
    },
    { //30
        id: 30,
        photoProduct: './assets/fruits/Soursop.jpg',
        title: 'Сметанное яблоко (Soursop)',
        price: 59.69,
        stock: 47.10
    },
    { //31
        id: 31,
        photoProduct: './assets/fruits/Noni.jpg',
        title: 'Нони (Noni)',
        price: 13.17
    },
    { //32
        id: 32,
        photoProduct: './assets/fruits/Curuba.jpg',
        title: 'Куруба (Curuba)',
        price: 3.47
    },
    { //33
        id: 33,
        photoProduct: './assets/fruits/Cupuacu.jpg',
        title: 'Купуасу (Cupuacu)',
        price: 85.80,
        stock: 71.80
    }
]

export const fruitStockIncludes = () => {
    fruit.filter(item => item.stock);
};

export const fruitSet = [{ //1
        id: 1,
        photoProduct: './assets/fruitSets/bigBoss.jpg',
        title: 'Фруктовый набор "BIG BOSS"',
        price: 41.74,
        stock: 31.74
    },
    { //2
        id: 2,
        photoProduct: './assets/fruitSets/bright.jpg',
        title: 'Фруктовый набор "Яркий"',
        price: 34.21
    },
    { //3
        id: 3,
        photoProduct: './assets/fruitSets/exoticMix.jpg',
        title: 'Фруктовый набор "Экзотичский микс"',
        price: 24.76
    },
    { //4
        id: 4,
        photoProduct: './assets/fruitSets/fruitBoom.jpg',
        title: 'Фруктовый набор "Фруктовый бум"',
        price: 31.12,
        stock: 19.19
    },
    { //5
        id: 5,
        photoProduct: './assets/fruitSets/juicySlices.jpg',
        title: 'Фруктовый набор "Сочные ломтики"',
        price: 14.83
    },
    { //6
        id: 6,
        photoProduct: './assets/fruitSets/love.jpg',
        title: 'Фруктовый набор "Люблю"',
        price: 12.54
    },
    { //7
        id: 7,
        photoProduct: './assets/fruitSets/tender.jpg',
        title: 'Фруктовый набор "Ты нежная"',
        price: 22.03
    },
    { //8
        id: 8,
        photoProduct: './assets/fruitSets/tenderness.jpg',
        title: 'Фруктовый набор "Нежность"',
        price: 18.31
    },
    { //9
        id: 9,
        photoProduct: './assets/fruitSets/tropical.jpg',
        title: 'Фруктовый набор "Тропический"',
        price: 27.98,
        stock: 24.59
    },
    { //10
        id: 10,
        photoProduct: './assets/fruitSets/taste.jpg',
        title: 'Фруктовый набор "Пробуй"',
        price: 10.11
    },
    { //11
        id: 11,
        photoProduct: './assets/fruitSets/wonderful.jpg',
        title: 'Фруктовый набор "Чудесный"',
        price: 19.05
    },
    { //12
        id: 12,
        photoProduct: './assets/fruitSets/сaribbean.jpg',
        title: 'Фруктовый набор "Карибы"',
        price: 21.07
    }
]

export const fruitSetStockIncludes = () => {
    fruitSet.filter(item => item.stock);
};