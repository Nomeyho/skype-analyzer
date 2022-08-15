import { atom } from 'jotai'

export const fileAtom = atom({
    filename: undefined,
    size: undefined,
    json: undefined
});

export const conversationAtom = atom(null);
