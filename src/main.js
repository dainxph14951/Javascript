import Navigo from "navigo"; // navigo là 1 class, đối tượng
import homePage from "./pages/home";
import Admissions from "./pages/Admissions";
import Educate from "./pages/Educate";
import Student from "./pages/Student";
import Recruitment from "./pages/Recruitment";
import footer from "./comboudun/footer";
import header from "./comboudun/header";

const router = new Navigo("/", { linksSelector: "a" }); // router thừa kế các thuộc tính của NAvigo, link để không load trang

const print = (content) => {
    document.getElementById("header").innerHTML = header.render();
    document.getElementById("app").innerHTML = content;
    document.getElementById("footer").innerHTML = footer.render();
};

router.on({ // phương thức on nằm trong navigo để duyệt qua tất cả các đường dẫn
    // () => : đây là arrow function rút ngắn lại của function expression
    "/": () => {
        print(homePage.render());
    },
    "/tuyensinh": () => {
        print(Admissions.render());
    },
    "/chuongtrinh": () => {
        print(Educate.render());
    },
    "/gocsinhvien": () => {
        print(Student.render());
    },
    "/tuyendung": () => {
        print(Recruitment.render());
    },

});
router.resolve(); // kích hoạt thằng router để chạy