import {createContext} from 'react';

export const defaultObject = {
    click: () =>  console.log('click.defaultObject'),
    actualDate: '',
    rangeDate: '',
    tasks: [],
};

export const AppContext = createContext(defaultObject)