
export default class StoreService {

    data = [
        {
            id: 1,
            title: 'Грокаем алгоритмы',
            author: 'Бхарглава',
            price: 32,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51eFB9nx-1L._SX346_BO1,204,203,200_.jpg'
        },
        {
            id: 2,
            title: 'JavaScript',
            author: 'learn.javascript.ru',
            price: 22,
            coverImage: 'http://hack-port.ru/_ld/141/14164.jpg'
        }
    ];

    menuData = [
        {
            id: 1,
            title: 'Интерьерные кровати',
            image: 'http://hack-port.ru/_ld/141/14164.jpg',
            path: '/interior_beds'
        },
        {
            id: 2,
            title: 'Интерьерные кровати',
            image: 'http://hack-port.ru/_ld/141/14164.jpg',
            path: '/_beds'
        },
        {
            id: 3,
            title: 'Интерьерные кровати',
            image: 'http://hack-port.ru/_ld/141/14164.jpg',
            path: '/interior_beds'
        },
        {
            id: 4,
            title: 'Интерьерные кровати',
            image: 'http://hack-port.ru/_ld/141/14164.jpg',
            path: '/interior_beds'
        },
        {
            id: 5,
            title: 'Интерьерные кровати',
            image: 'http://hack-port.ru/_ld/141/14164.jpg',
            path: '/interior_beds'
        },
        {
            id: 6,
            title: 'Интерьерные кровати',
            image: 'http://hack-port.ru/_ld/141/14164.jpg',
            path: '/interior_beds'
        }
    ];

    getFurniture() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 1) {
                    reject( new Error('Something bad happened'))
                } else {
                    resolve(this.data)
                }                
            }, 700)
        })
    };

    getMenu() {
        return this.menuData;
    }
};