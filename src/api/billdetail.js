import instance from "./instance";

export const getAll = () => {
    const url = "/billDetail";
    return instance.get(url);
};

export const get = (id) => {
    const url = `/billDetail/${id}`;
    return instance.get(url);
};
export const remove = (id) => {
    const url = `/billDetail/${id}`;
    return instance.delete(url);
};

export const add = (bill) => {
    const url = `/billDetail`;
    return instance.post(url, bill);
};
export const update = (bill) => {
    const url = `/billDetail/${bill.id}`;
    return instance.put(url, bill);
};