import { fromPairs } from 'lodash/fp';

const localStorage = global.localStorage && global.localStorage.removeItem
    ? global.localStorage
    : (function () {
        let store = {};
        return {
            getItem(key) {
                return store[key] || null;
            },
            setItem(key, value) {
                store[key] = value.toString();
            },
            clear() {
                store = {};
            },
            removeItem(key) {
                store = Object.keys(store)
                    .filter(k => key !== k)
                    .reduce((accumulator, currentItem) => {
                        accumulator[currentItem] = store[currentItem];
                        return accumulator;
                    }, {});
            },
        };
    }());

export const readLocalStorage = (key) => {
    if (Array.isArray(key)) {
        return fromPairs(key.map(k => [k, localStorage.getItem(k) && JSON.parse(localStorage.getItem(k))]));
    }
    return localStorage.getItem(key) && JSON.parse(localStorage.getItem(key));
};

export const writeLocalStorage = (key, value) => {
    const keys = typeof key === 'object' ? key : { [key]: value };
    Object.entries(keys).map(([k, val]) => localStorage.setItem(k, JSON.stringify(val)));
    return keys;
};

export const removeLocalStorage = (key) => {
    const keys = Array.isArray(key) ? key : [key];
    keys.forEach(k => localStorage.removeItem(k));
    return keys;
};

export const clearLocalStorage = () => {
    localStorage.clear();
};

export const getSearchParams = params => Object.keys(params).map((key) => {
    if (typeof (params[key]) !== 'undefined') {
        return `${encodeURIComponent(key)}=${encodeURIComponent(params[key]) ? encodeURIComponent(params[key]) : ''}`;
    }
}).join('&');

export const generateString = () => {
    const name = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    return name;
} 
