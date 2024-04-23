/* eslint-disable @typescript-eslint/no-explicit-any */
const { localStorage } = window;

export const prefix = 'investwell-app-';

export const exist = (key: string) => {
    if (localStorage.getItem(prefix + key) && localStorage.getItem(prefix + key) !== 'undefined') {
        return true;
    }
    return false;
};

export const getJson = <T = object>(key: string): T | null => {
    if (exist(key)) {
        return JSON.parse(localStorage.getItem(prefix + key) || '{}');
    }
    return null;
};

export const setJson = (key: string, data: any) => {
    localStorage.setItem(prefix + key, JSON.stringify(data));
};

export const get = <T = string>(key: string): T | null => {
    if (exist(key)) {
        return localStorage.getItem(prefix + key) as T;
    }
    return null;
};

export const set = (key: string, data: any) => {
    localStorage.setItem(prefix + key, data);
};

export const remove = (key: string) => {
    localStorage.removeItem(prefix + key);
};

export const clear = () => {
    localStorage.clear();
};
