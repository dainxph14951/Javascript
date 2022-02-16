import Navigo from "navigo"; // navigo là 1 class, đối tượng
import homePage from "./pages/client/home";
import Introduce from "./pages/client/introduce";
import Products from "./pages/client/AllProducts";
import Blog from "./pages/client/blog";
import Contact from "./pages/client/contact";
import ProductDetail from "./pages/client/productdetails";
import Signin from "./pages/client/signin";
import Signup from "./pages/client/signup";
import Cart from "./pages/client/cart";
import Bill from "./pages/client/bill";
import NewsTb from "./pages/client/newstb";
import productsPage from "./pages/client/products/index";

import StatisticalPage from "./admin/statistical";
import AddNewsPage from "./admin/news/add";
import newsPage from "./admin/news/index";
import editNews from "./admin/news/edit";

const router = new Navigo("/", { linksSelector: "a", hash: true }); // router thừa kế các thuộc tính của NAvigo, link để không load trang

const print = async (content, id) => {
    document.getElementById("app").innerHTML = await content.render(id);
    if (content.afterRender) content.afterRender(id);
};

router.on({ // phương thức on nằm trong navigo để duyệt qua tất cả các đường dẫn
    // () => : đây là arrow function rút ngắn lại của function expression
    "/": () => {
        print(homePage);
    },
    "/gioithieu": () => {
        print(Introduce);
    },
    "/sanpham": () => {
        print(Products);
    },
    "/blog": () => {
        print(Blog);
    },
    "/lienhe": () => {
        print(Contact);
    },
    "/signin": () => {
        print(Signin);
    },
    "/cart": () => {
        print(Cart);
    },
    "/bill": () => {
        print(Bill);
    },
    "/signup": () => {
        print(Signup);
    },
    "/newstb": () => {
        print(NewsTb);
    },
    "/allproducts": () => {
        print(Products);
    },
    "/products": () => {
        print(productsPage);
    },
    "/products/:id": ({ data }) => {
        print(ProductDetail, data.id);
    },
    "/admin/statistical": () => {
        print(StatisticalPage);
    },
    "/admin/news": () => {
        print(newsPage);
    },
    "/admin/news/add": () => {
        print(AddNewsPage);
    },
    "/admin/news/:id/edit": () => {
        print(editNews);
    },

});
router.resolve(); // kích hoạt thằng router để chạy