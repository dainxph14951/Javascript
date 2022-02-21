import instance from "./instance";

export const getAll = () => {
    const url = "/catePosts";
    return instance.get(url);
};

export const get = (id) => {
    const url = `/catePosts/${id}`;
    return instance.get(url);
};
export const remove = (id) => {
    const url = `/catePosts/${id}`;
    return instance.delete(url);
};

export const add = (category) => {
    const url = `/catePosts`;
    return instance.post(url, category);
};
export const update = (category) => {
    const url = `/posts/${category.id}`;
    return instance.put(url, category);
};