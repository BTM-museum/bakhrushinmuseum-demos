import { atom } from 'recoil';
import {INew} from "../../types";
import dayjs from "dayjs";
import image282 from './static/282.jpg'
import image283 from './static/283.jpg'
import image284 from './static/284.jpg'
import image286 from './static/286.jpg'
import image287 from './static/287.jpg'
import image289 from './static/289.jpg'


export const news = atom<INew[]>({
    key: 'news',
    default: [
        { id: 0, title: 'Мастер-класс «Русское Рождественское письмо» проше...', page: <div><h1>Мастер-класс «Русское Рождественское письмо» прошел...</h1></div>, date: dayjs(), image: image282,},
        { id: 1, title: 'В День семьи, любви и верности в филиале Бахрушинского музея...', page: <div><h1>В День семьи, любви и верности в филиале Бахрушинского музея...</h1></div>, date: dayjs(), image: image283,},
        { id: 2, title: 'Бахрушинский музей и Высшее театральное училище имени М.С. Щепкина приглашают на вы...', page: <div><h1>Бахрушинский музей и Высшее театральное училище имени М.С. Щепкина приглашают на вы...</h1></div>, date: dayjs(), image: image284,},
        { id: 3, title: 'Миры Мессерера: Бахрушинский и Музей музыки открывают...', page: <div><h1>Миры Мессерера: Бахрушинский и Музей музыки открывают...</h1></div>, date: dayjs(), image: image286,},
        { id: 4, title: 'На фестивале «Горький в Парке Горького» соберут гигантский портрет автора.', page: <div><h1>На фестивале «Горький в Парке Горького» соберут гигантский портрет автора</h1></div>, date: dayjs(), image: image287,},
        { id: 5, title: 'В Бахрушинском набирают театральных волшебников', page: <div><h1>В Бахрушинском набирают театральных волшебников</h1></div>, date: dayjs(), image: image289,},
    ]
});