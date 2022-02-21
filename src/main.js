import Navigo from "navigo"; // navigo là 1 class, đối tượng
import homePage from "./pages/client/home";
import Introduce from "./pages/client/introduce";
import Blog from "./pages/client/blog";
import Contact from "./pages/client/contact";
import ProductDetail from "./pages/client/productdetails";
import Signin from "./pages/client/signin";
import Signup from "./pages/client/signup";
import Cart from "./pages/client/cart";
import Bill from "./pages/client/bill";
import NewsTb from "./pages/client/newstb";
import ProductsAll from "./pages/client/AllProducts";

import StatisticalPage from "./admin/statistical";
import AddNewsPage from "./admin/news/add";
import newsPage from "./admin/news/index";
import editNews from "./admin/news/edit";

import UserPage from "./admin/user";
import AddUserPage from "./admin/user/add";
import editUser from "./admin/user/edit";

import ProductsAddPage from "./admin/products/add";
import ProductsPage from "./admin/products";
import ProductsEdit from "./admin/products/edit";

import CategoryPage from "./admin/Category";
import CategoryAdd from "./admin/Category/add";
import CategoryEdit from "./admin/Category/edit";

const router = new Navigo("/", { linksSelector: "a", hash: true }); // router thừa kế các thuộc tính của NAvigo, link để không load trang

const print = async (content, id) => {
    document.getElementById("app").innerHTML = await content.render(id);
    if (content.afterRender) content.afterRender(id);
};
router.on("/admin/*", () => {}, {
    before: (done) => {
        if (localStorage.getItem("user")) {
            const userId = JSON.parse(localStorage.getItem("user")).id;
            if (userId === 1) {
                done();
            } else {
                document.location.href = "/";
            }
        }
    },
});
router.on({ // phương thức on nằm trong navigo để duyệt qua tất cả các đường dẫn
    // () => : đây là arrow function rút ngắn lại của function expression
    "/": () => {
        print(homePage);
    },
    "/gioithieu": () => {
        print(Introduce);
    },
    "/sanpham": () => {
        print(ProductsAll);
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
        // print(Products);
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
    "/admin/news/:id/edit": ({ data }) => {
        print(editNews, data.id);
    },
    "/admin/user": () => {
        print(UserPage);
    },
    "/admin/user/add": () => {
        print(AddUserPage);
    },
    "/admin/user/:id/edit": () => {
        print(editUser);
    },
    "/admin/products": () => {
        print(ProductsPage);
    },
    "/admin/products/add": () => {
        print(ProductsAddPage);
    },
    "/admin/products/:id/edit": ({ data }) => {
        print(ProductsEdit, data.id);
    },
    "/admin/danhmuc": () => {
        print(CategoryPage);
    },
    "/admin/danhmuc/add": () => {
        print(CategoryAdd);
    },
    "/admin/danhmuc/:id/edit": ({ data }) => {
        print(CategoryEdit, data.id);
    },

});
router.resolve(); // kích hoạt thằng router để chạy