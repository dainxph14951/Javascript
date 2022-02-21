import instance from "./instance";

export const getAllCate = () => {
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

export const add = (cate) => {
    const url = `/catePosts`;
    return instance.post(url, cate);
};
export const update = (cate) => {
    const url = `/posts/${cate.id}`;
    return instance.put(url, cate);
};