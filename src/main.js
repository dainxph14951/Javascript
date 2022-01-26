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

const router = new Navigo("/", { linksSelector: "a" }); // router thừa kế các thuộc tính của NAvigo, link để không load trang

const print = (content) => {
    document.getElementById("app").innerHTML = content;
};

router.on({ // phương thức on nằm trong navigo để duyệt qua tất cả các đường dẫn
    // () => : đây là arrow function rút ngắn lại của function expression
    "/": () => {
        print(homePage.render());
    },
    "/gioithieu": () => {
        print(Introduce.render());
    },
    "/sanpham": () => {
        print(Products.render());
    },
    "/blog": () => {
        print(Blog.render());
    },
    "/lienhe": () => {
        print(Contact.render());
    },
    "/signin": () => {
        print(Signin.render());
    },
    "/cart": () => {
        print(Cart.render());
    },
    "/bill": () => {
        print(Bill.render());
    },
    "/signup": () => {
        print(Signup.render());
    },
    "/newstb": () => {
        print(NewsTb.render());
    },
    "/products/:id": ({ data }) => {
        const { id } = data;
        print(ProductDetail.render(id));
    },

});
router.resolve(); // kích hoạt thằng router để chạy