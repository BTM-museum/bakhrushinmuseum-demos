import { atom } from 'recoil';


export const widgets = atom<IWidget[]>({
    key: 'widget',
    default: [
        // {id: 0, backgroundColor, color, buttonText, link, title, description, imageUrl}
    ]
});