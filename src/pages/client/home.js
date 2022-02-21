import { getAll } from "../../api/products";
import footer from "../../comboudun/footer";
import header from "../../comboudun/header";
import Banner from "../../comboudun/banner";
import newsHome from "./news";

const homePage = {
    async render() {
        const response = await getAll();
        return /* html */`
        <div id="header">
        ${header.render()}
        </div>
        <div id="banner">
        ${Banner.render()}
        </div>
        <div class="mx-auto p-10"> 
                <div>
                <input type="text" id="searchItem">
                <button onclick="serach()">Search</button>
                </div>
            <div class="news">
            <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">SẢN PHẨM NỔI BẬT</h2>

                <div class="grid grid-cols-4 gap-8" id="menu_list">
                    ${response.data.map((products) => `
                   
                        <div class="p-4 ">
                        
                            <a href="/products/${products.id}">
                                <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                <img src="${products.img}" alt="Front of men&#039;s Basic Tee in black." class="w-full h-full object-center object-cover lg:w-full lg:h-full">
                              </div>
                            </a>
                            <div class="mt-4 flex justify-between">
                            <div>
                              <h3 class="text-sm text-gray-700" id="menu_item">
                                <a href="/products/${products.id}" class="no-underline">
                                  <span aria-hidden="true" class="absolute inset-0"></span>
                                  ${products.name}
                                </a>
                              </h3>
                            </div>
                            <p class="text-sm font-medium text-gray-900"><i class="fas fa-cart-arrow-down"></i></p>
                          </div>
                          <div class="text-center">
                          <p class="line-through text-rose-600">700.000đ</p>  
                          <p class="text-sky-700"> ${products.price}đ</p> 
                          </div>
                          
                          
                        </div>
                   
                    `).join("")}
                </div>
            </div>
            <div>
            <!-- This example requires Tailwind CSS v2.0+ -->
<div class="relative bg-white overflow-hidden">
<div class="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
    <div class="sm:max-w-lg">
      <h1 class="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">
      Phong cách mùa hè cuối cùng cũng xuất hiện
      </h1>
      <p class="mt-4 text-xl text-gray-500">Năm nay, bộ sưu tập mùa hè mới của chúng tôi sẽ che chở bạn khỏi những yếu tố khắc nghiệt của một thế giới không quan tâm bạn sống hay chết.</p>
    </div>
    <div>
      <div class="mt-10">
        <!-- Decorative image grid -->
        <div aria-hidden="true" class="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full">
          <div class="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
            <div class="flex items-center space-x-6 lg:space-x-8">
              <div class="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                <div class="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                  <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg" alt="" class="w-full h-full object-center object-cover">
                </div>
                <div class="w-44 h-64 rounded-lg overflow-hidden">
                  <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg" alt="" class="w-full h-full object-center object-cover">
                </div>
              </div>
              <div class="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                <div class="w-44 h-64 rounded-lg overflow-hidden">
                  <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg" alt="" class="w-full h-full object-center object-cover">
                </div>
                <div class="w-44 h-64 rounded-lg overflow-hidden">
                  <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg" alt="" class="w-full h-full object-center object-cover">
                </div>
                <div class="w-44 h-64 rounded-lg overflow-hidden">
                  <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg" alt="" class="w-full h-full object-center object-cover">
                </div>
              </div>
              <div class="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                <div class="w-44 h-64 rounded-lg overflow-hidden">
                  <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg" alt="" class="w-full h-full object-center object-cover">
                </div>
                <div class="w-44 h-64 rounded-lg overflow-hidden">
                  <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg" alt="" class="w-full h-full object-center object-cover">
                </div>
              </div>
            </div>
          </div>
        </div>

        <a href="#" class="inline-block text-center bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700">Bộ Sưu Tập</a>
      </div>
    </div>
  </div>
</div>
</div>
            </div>
        </div>
        <div>
        
        </div>
        <div class="bg-white">
        <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">SẢN PHẨM ĐẶC BIỆT</h2>
      
          <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <div class="group relative">
              <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." class="w-full h-full object-center object-cover lg:w-full lg:h-full">
              </div>
              <div class="mt-4 flex justify-between">
                <div>
                  <h3 class="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" class="absolute inset-0"></span>
                      Basic Tee
                    </a>
                  </h3>
                  <p class="mt-1 text-sm text-gray-500">Black</p>
                </div>
                <p class="text-sm font-medium text-gray-900">$35</p>
              </div>
            </div>
      
            <!-- More products... -->
          </div>
        </div>
      </div>
                                                <!-- TIN TỨC... -->
  
      <div class="bg-gray-100">
      ${newsHome.render()}
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
          <h2 class="text-2xl font-extrabold text-gray-900">Chương Trình Khuyến Mại</h2>
    
          <div class="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
            <div class="group relative">
              <div class="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." class="w-full h-full object-center object-cover">
              </div>
              <h3 class="mt-6 text-sm text-gray-500">
                <a href="#">
                  <span class="absolute inset-0"></span>
                  Giảm 20% với những mẫu quần jaean nam
                </a>
              </h3>
              <p class="text-base font-semibold text-gray-900">khuyến mại được áp dụng đối với những sản phẩm quần jean nam trên toàn bộ... </p>
            </div>
    
            <div class="group relative">
              <div class="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg" alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant." class="w-full h-full object-center object-cover">
              </div>
              <h3 class="mt-6 text-sm text-gray-500">
                <a href="#">
                  <span class="absolute inset-0"></span>
                  Mua 5 tặng 1
                </a>
              </h3>
              <p class="text-base font-semibold text-gray-900">Khi khách hàng mua hàng trục tuyến sẽ được áp dựng ưu đãi với 5 sản phẩn đổ lên...</p>
            </div>
    
            <div class="group relative">
              <div class="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg" alt="Collection of four insulated travel bottles on wooden shelf." class="w-full h-full object-center object-cover">
              </div>
              <h3 class="mt-6 text-sm text-gray-500">
                <a href="#">
                  <span class="absolute inset-0"></span>
                  Miễn phí giao hàng
                </a>
              </h3>
              <p class="text-base font-semibold text-gray-900">Miễn phí giao hàng với các sản phẩm từ 1.000.000, thì khách hàng sẽ được miễn...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id=""footer>
    ${footer.render()}
    </div>

        `;
    },
    afterRender() {
        header.afterRender();
    },
};
export default homePage;