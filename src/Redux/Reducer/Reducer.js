import axios from 'axios';
import { useEffect, useState } from 'react';

const initialState = {
    //     data: 0,
};
//   const [data, setData] = useState();
const paginationReducer = (state = initialState, action) => {
    console.log('wewew'
    
    
    , state);
    switch (action.type) {
        case 'PAGEONE':
            //   console.log(action.payload.data);
            console.log('pageOne', state);
            return {
                      ...state,
                data: action.payload.data,
            };
        case 'PAGETWO':
            console.log('pageTwo', state);
            return {
                      ...state,
                data: action.payload.data,
            };
        case 'PAGETHREE':
            return {
                      ...state,
                data: action.payload.data,
            };
        case 'PAGEFOUR':
            return {
                ...state,
                data: action.payload.data,
            };
        case 'PAGEFIVE':
            return {
                ...state,
                data: action.payload.data,
            };
        case 'PAGESIX':
            return {
                ...state,
                data: action.payload.data,
            };
        case 'PAGESAVEN':
            return {
                ...state,
                data: action.payload.data,
            };
        case 'PAGEIGHT':
            return {
                ...state,
                data: action.payload.data,
            };
        case 'PAGENINE':
            return {
                ...state,
                data: action.payload.data,
            };
        case 'PAGETEN':
            console.log('pageTen');
            return {
                ...state,
                data: action.payload.data,
            };

        default:
            return state;
    }
};

export default paginationReducer;
