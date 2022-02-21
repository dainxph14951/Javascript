import newsHome from "./news";

const Blog = {
    render() {
        return /* html */`<div class="max-w-5xl mx-auto">
        <h1>Trang Blog</h1>
        ${newsHome.render()}
 `;
    },
};
export default Blog;