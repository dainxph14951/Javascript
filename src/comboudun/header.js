const header = {
    render() {
        return /* html */`<div class="mb-2">
                <div class="justify-between items-center max-w-5xl py-4 bg-blue-800 mx-auto">
                <img src="../images/logo.png" class="mx-auto" />
                </div>
                <div class="flex justify-between items-center max-w-5xl py-3 bg-orange-600 mx-auto">
                <nav>
                <ul class="flex block text-white">
                <li><a class="block py-3 px-4 hover:underline "  href="/" >Trang Chủ</a></li>
                <li><a class="block py-3 px-4 hover:underline " href="/tuyensinh">Tuyển Sinh</a></li>
                <li><a class="block py-3 px-4 hover:underline " href="/chuongtrinh">Chương Trình</a></li>
                <li><a class="block py-3 px-4 hover:underline"href="/gocsinhvien">Góc Sinh Viên</a></li>
                <li><a class="block py-3 px-4 hover:underline"href="/tuyendung">Tuyển Dụng</a></li>
                </ul>
                </nav>
                <form action="" class="">
                 <input type="text" class="pr-10">
                 <button class="border border-zinc-50 pr-4 pl-4 text-orange-50 bg-sky-900  hover:bg-sky-600">Tìm kiếm</button>
                </form>
        </div>
        </div>`;
    },
};
export default header;