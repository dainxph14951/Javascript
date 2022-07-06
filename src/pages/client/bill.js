import toastr from "toastr";
import header from "../../comboudun/header";
import Banner from "../../comboudun/banner";
import footer from "../../comboudun/footer";
import { add } from "../../api/billdetail";
import "toastr/build/toastr.min.css";

const Bill = {
  render() {
    let cart = [];
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    }
    return /* html */`
${header.render()} ${Banner.render()}
<h1>Thanh Toán</h1>
<div class="m-20 ">
    <div class="mt-10 sm:mt-0">
      <div class="mt-5 md:mt-0 md:col-span-2">

        <div class="shadow overflow-hidden sm:rounded-md">
        <form action="#" method="POST" id="form-add-category">
          <div class="px-4 py-5 bg-white sm:p-6">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <label for="first-name" class="block text-sm font-medium text-gray-700">Họ Tên</label>
                <input type="text" name="name" id="name" autocomplete="given-name"
                  class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              </div>
              <div class="col-span-6 sm:col-span-4">
                <label for="email-address" class="block text-sm font-medium text-gray-700">Email</label>
                <input type="text" name="email" id="email" autocomplete="email"
                  class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              </div>
              <div class="col-span-6">
                <label for="street-address" class="block text-sm font-medium text-gray-700">Địa Chỉ</label>
                <input type="text" name="address" id="street-address" autocomplete="street-address"
                  class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              </div>
            </div>

            <div class="col-span-6 sm:col-span-4">
              <label for="phoneNumber" class="block text-sm font-medium text-gray-700">Số Điện Thoại</label>
              <input type="number" name="phoneNumber" id="phoneNumber" autocomplete="phoneNumber"
                class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            </div>  
          </div>
          </form>
        </div>
      </div>
    </div>
    <div class="">
      <div class="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
        <div class="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
          <div class="flex items-start justify-between">
            <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">
              Hóa Đơn
            </h2>
            <div class="ml-3 h-7 flex items-center">
              <button type="button" class="-m-2 p-2 text-gray-400 hover:text-gray-500">
                <span class="sr-only">Close panel</span>

                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div class="mt-8">

          <div class="flow-root">
          ${cart.map((item) => /* html */`
            <div role="list" class="-my-6 divide-y divide-gray-200">
              <div class="py-6 flex">
                <div class="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                  <img src="${item.img}"
                    alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                    class="w-full h-full object-center object-cover">
                </div>

                <div class="ml-4 flex-1 flex flex-col">

                  <div>
                    <div class="flex justify-between text-base font-medium text-gray-900">
                      <h3>
                        <a href="#">
                          ${item.name}
                        </a>
                      </h3>
                      <p class="ml-4">
                        ${item.price}
                      </p>
                    </div>
                    <p class="mt-1 text-sm text-gray-500">
                      Salmon
                    </p>
                  </div>
                  <div class="flex-1 flex items-end justify-between text-sm">
                    <p class="text-gray-500">
                      ${item.quantity}
                    </p>

                    <div class="flex">
                      <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500">xóa</button>
                    </div>
                  </div>
                  <div class="flex justify-between text-base font-medium text-gray-900">
                    <p>Tổng Tiền</p>
                    <p>${item.quantity * item.price}</p>
                  </div>
                </div>
                
              </div>
              `).join("")}
            </div>
            <div class="border-t border-gray-200 py-6 px-4 sm:px-6">
            <p class="mt-0.5 text-sm text-gray-500">Thuế vận chuyển được tính khi thanh toán.</p>
            <div class="mt-6">
              <a href=""
                class="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">Thanh
                Toán</a>
            </div>
            <div class="mt-6 flex justify-center text-sm text-center text-gray-500">
              <p>
                or <button type="button" class="text-indigo-600 font-medium hover:text-indigo-500">Tiếp Tục
                  Mua Sắm<span aria-hidden="true"> &rarr;</span></button>
              </p>
            </div>
          </div>
          </div>
         
        </div>
        </div>
      
      </div>
    </div>


</div>


${footer.render()}`;
  },
  afterRender() {
    const categoryAdd = document.querySelector("#form-add-category");
    categoryAdd.addEventListener("submit", async (e) => {
      e.preventDefault();
      console.log(1111111111);
      // try {
      //     const { data } = await add({
      //         name: document.querySelector("#name").value,
      //         email: document.querySelector("#email").value,
      //         address: document.querySelector("#address").value,
      //         phone: document.querySelector("#phoneNumber").value,
      //     });
      //     if (data) {
      //         toastr.success("Đăng Ký thành công, chờ chuyển trang");
      //         // setTimeout(() => {
      //         // document.location.href = "/newstb";
      //         // }, 2000);
      //     }
      // } catch (error) {
      //     toastr.error(error.response);
      // }
    });
  },
};
export default Bill;