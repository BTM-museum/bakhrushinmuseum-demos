import {atom} from 'recoil';
import {IEvent} from "../../types";
import image133 from './static/133.png';
import image134 from './static/134.png';
import image145 from './static/145.jpg';
import image663 from './static/663.jpg';
import dayjs from "dayjs";


export const events = atom<IEvent[]>({
    key: 'events',
    default: [
        {
            id: 0,
            title: '«Семья Бахрушиных и залог счастливой жизни». 12+',
            type: 'pro',
            page: <h1>«Семья Бахрушиных и залог счастливой жизни». 12+</h1>,
            image: image133,
            date: {from: dayjs(), to: dayjs()},
            position: 'Москва, улица Бахрушина, 31/12с1',
            link: ''
        },
        {
            id: 1,
            title: 'Бахрушинский поддержит создание Театрального музея в Саратове',
            type: 'pro',
            page: <h1>Бахрушинский поддержит создание Театрального музея в Саратове</h1>,
            image: image134,
            date: {from: dayjs(), to: dayjs()},
            position: 'Москва, улица Бахрушина, 31/12с1',
            link: ''
        },
        {
            id: 2,
            title: 'Музыкально-поэтический перфоман «В ожидании тепла». 12+',
            type: 'pro',
            page: <h1>Музыкально-поэтический перфоман «В ожидании тепла». 12+</h1>,
            image: image145,
            date: {from: dayjs(), to: dayjs()},
            position: 'Москва, улица Бахрушина, 31/12с1',
            link: ''
        },
        {
            id: 3,
            title: 'Музыкально-поэтический перфоман «В ожидании тепла». 12+',
            page: <h1>Музыкально-поэтический перфоман «В ожидании тепла». 12+</h1>,
            image: image663,
            date: {from: dayjs(), to: dayjs()},
            position: 'Москва, улица Бахрушина, 31/12с1',
            link: ''
        },
        {
            id: 4,
            title: 'Событие 4',
            page: <h1>Событие 4</h1>,
            image: image145,
            date: {from: dayjs(), to: dayjs()},
            position: 'Москва, улица Бахрушина, 31/12с1',
            link: ''
        },
        {
            id: 5,
            title: 'Событие 5',
            page: <h1>Событие 5</h1>,
            image: image145,
            date: {from: dayjs(), to: dayjs()},
            position: 'Москва, улица Бахрушина, 31/12с1',
            link: ''
        },
        {
            id: 6,
            title: 'Событие 6',
            page: <h1>Событие 6</h1>,
            image: image145,
            date: {from: dayjs(), to: dayjs()},
            position: 'Москва, улица Бахрушина, 31/12с1',
            link: ''
        },
        {
            id: 7,
            title: 'Событие 7',
            page: <h1>Событие 7</h1>,
            image: image133,
            date: {from: dayjs(), to: dayjs()},
            position: 'Москва, улица Бахрушина, 31/12с1',
            link: ''
        },
        {
            id: 8,
            title: 'Событие 8',
            page: <h1>Событие 8</h1>,
            image: image133,
            date: {from: dayjs(), to: dayjs()},
            position: 'Москва, улица Бахрушина, 31/12с1',
            link: ''
        },
        {
            id: 9,
            title: 'Событие 9',
            page: <h1>Событие 9</h1>,
            image: image133,
            date: {from: dayjs(), to: dayjs()},
            position: 'Москва, улица Бахрушина, 31/12с1',
            link: ''
        },
        {
            id: 10,
            title: 'Событие 10',
            page: <h1>Событие 10</h1>,
            image: image133,
            date: {from: dayjs(), to: dayjs()},
            position: 'Москва, улица Бахрушина, 31/12с1',
            link: ''
        },
        {
            id: 11,
            title: 'Событие 11',
            page: <h1>Событие 11</h1>,
            image: image133,
            date: {from: dayjs(), to: dayjs()},
            position: 'Москва, улица Бахрушина, 31/12с1',
            link: ''
        },
    ]
});