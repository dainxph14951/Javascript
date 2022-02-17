import instance from "./instance";

export const getAll = () => {
    const url = "/users";
    return instance.get(url);
};

export const get = (id) => {
    const url = `//users/${id}`;
    return instance.get(url);
};
export const remove = (id) => {
    const url = `//users/${id}`;
    return instance.delete(url);
};

export const add = (users) => {
    const url = `//users`;
    return instance.post(url, users);
};
export const edit = (users) => {
    const url = `//users/${users.id}`;
    return instance.put(url, users);
};