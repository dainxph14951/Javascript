import Navigo from "navigo"; // navigo là 1 class, đối tượng

const router = new Navigo("/"); // router thừa kế các thuộc tính của NAvigo

router.on({ // phương thức on nằm trong navigo để duyệt qua tất cả các đường dẫn
    // () => : đây là arrow function rút ngắn lại của function expression
    "/": () => {
        console.log("Trang Chủ");
    },
    "/tuyensinh": () => {
        console.log("Tuyển Sinh");
    },
    "/chuongtrinh": () => {
        console.log("Trương Trình Đào Tạo");
    },
    "/gocsinhvien": () => {
        console.log("Góc Sinh Viên");
    },
    "/tuyendung": () => {
        console.log("Tuyển Dụng");
    },

});
router.resolve(); // kích hoạt thằng router để chạy