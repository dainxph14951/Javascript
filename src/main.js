import Navigo from "navigo"; // navigo là 1 class, đối tượng
import homePage from "./pages/client/home";
import Introduce from "./pages/client/introduce";
import Products from "./pages/client/products";
import Blog from "./pages/client/blog";
import Contact from "./pages/client/contact";
import ProductDetail from "./pages/client/productdetails";
import Signin from "./pages/client/signin";
import Signup from "./pages/client/signup";
import Cart from "./pages/client/cart";
import Bill from "./pages/client/bill";
import NewsTb from "./pages/client/newstb";

import StatisticalPage from "./admin/statistical";
import AddProductsPage from "./admin/products/add";
import ProductsPage from "./admin/products/index";
import editPeoducts from "./admin/products/edit";

const router = new Navigo("/", { linksSelector: "a" }); // router thừa kế các thuộc tính của NAvigo, link để không load trang

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
    "/products/:id": ({ data }) => {
        print(ProductDetail, data.id);
    },
    "/admin/statistical": () => {
        print(StatisticalPage);
    },
    "/admin/products": () => {
        print(ProductsPage);
    },
    "/admin/products/add": () => {
        print(AddProductsPage);
    },
    "/admin/products/:id/edit": () => {
        print(editPeoducts);
    },

});
router.resolve(); // kích hoạt thằng router để chạy