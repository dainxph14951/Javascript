import data from "../../data";
import footer from "../../comboudun/footer";
import header from "../../comboudun/header";
import Banner from "../../comboudun/banner";

const ProductDetail = {
    render(id) {
        const found = data.find((element) => element.id === id);

        return /* html */`${header.render()} ${Banner.render()}
        <div class=" p-12 max-w-full ">
            <h1 class="text-center">Trang Chi Tiết</h1>
            <div class="bg-white">
            <div class="pt-6">
              <nav aria-label="Breadcrumb">
                <ol role="list" class="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8">
                  <li>
                    <div class="flex items-center">
                      <a href="#" class="mr-2 text-sm font-medium text-gray-900">
                        Men
                      </a>
                      <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="w-4 h-5 text-gray-300">
                        <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                      </svg>
                    </div>
                  </li>
          
                  <li>
                    <div class="flex items-center">
                      <a href="#" class="mr-2 text-sm font-medium text-gray-900">
                        Clothing
                      </a>
                      <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="w-4 h-5 text-gray-300">
                        <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                      </svg>
                    </div>
                  </li>
          
                  <li class="text-sm">
                    <a href="#" aria-current="page" class="font-medium text-gray-500 hover:text-gray-600">
                      Basic Tee 6-Pack
                    </a>
                  </li>
                </ol>
              </nav>
          
              <!-- Image gallery -->
              <div class="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
                <div class="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
                  <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg" alt="Two each of gray, white, and black shirts laying flat." class="w-full h-full object-center object-cover">
                </div>
                <div class="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                  <div class="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                    <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg" alt="Model wearing plain black basic tee." class="w-full h-full object-center object-cover">
                  </div>
                  <div class="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                    <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg" alt="Model wearing plain gray basic tee." class="w-full h-full object-center object-cover">
                  </div>
                </div>
                <div class="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
                  <img src="${found.img}" alt="Model wearing plain white basic tee." class="w-full h-full object-center object-cover">
                </div>
              </div>
          
              <!-- Product info -->
              <div class="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
                <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                  <h1 class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                  ${found.title}
                  </h1>
                  <h2>
                      Chi Tiết Sản Phẩm
                  </h2>
                  ${found.desc}
                  <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id assumenda necessitatibus laboriosam vitae veniam hic? Est doloremque blanditiis non quaerat, veniam aperiam, repudiandae accusamus, itaque consectetur delectus provident numquam maxime?</div>
                </div>
          
                <!-- Options -->
                <div class="mt-4 lg:mt-0 lg:row-span-3">
                  <h2 class="sr-only">Product information</h2>
                  <p class="text-3xl text-gray-900">$192</p>
          
                  <!-- Reviews -->
                  <div class="mt-6">
                    <h3 class="sr-only">Reviews</h3>
                    <div class="flex items-center">
                      <div class="flex items-center">
                        <!--
                          Heroicon name: solid/star
          
                          Active: "text-gray-900", Default: "text-gray-200"
                        -->
                        <svg class="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
          
                        <!-- Heroicon name: solid/star -->
                        <svg class="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
          
                        <!-- Heroicon name: solid/star -->
                        <svg class="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
          
                        <!-- Heroicon name: solid/star -->
                        <svg class="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
          
                        <!-- Heroicon name: solid/star -->
                        <svg class="text-gray-200 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <p class="sr-only">4 out of 5 stars</p>
                      <a href="#" class="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">117 reviews</a>
                    </div>
                  </div>
          
                  <form class="mt-10">
                    <!-- Colors -->
                    <div>
                      <h3 class="text-sm text-gray-900 font-medium">Color</h3>
          
                      <fieldset class="mt-4">
                        <legend class="sr-only">
                          Choose a color
                        </legend>
                        <div class="flex items-center space-x-3">
                          <!--
                            Active and Checked: "ring ring-offset-1"
                            Not Active and Checked: "ring-2"
                          -->
                          <label class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                            <input type="radio" name="color-choice" value="White" class="sr-only" aria-labelledby="color-choice-0-label">
                            <p id="color-choice-0-label" class="sr-only">
                              White
                            </p>
                            <span aria-hidden="true" class="h-8 w-8 bg-white border border-black border-opacity-10 rounded-full"></span>
                          </label>
          
                          <!--
                            Active and Checked: "ring ring-offset-1"
                            Not Active and Checked: "ring-2"
                          -->
                          <label class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                            <input type="radio" name="color-choice" value="Gray" class="sr-only" aria-labelledby="color-choice-1-label">
                            <p id="color-choice-1-label" class="sr-only">
                              Gray
                            </p>
                            <span aria-hidden="true" class="h-8 w-8 bg-gray-200 border border-black border-opacity-10 rounded-full"></span>
                          </label>
          
                          <!--
                            Active and Checked: "ring ring-offset-1"
                            Not Active and Checked: "ring-2"
                          -->
                          <label class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-900">
                            <input type="radio" name="color-choice" value="Black" class="sr-only" aria-labelledby="color-choice-2-label">
                            <p id="color-choice-2-label" class="sr-only">
                              Black
                            </p>
                            <span aria-hidden="true" class="h-8 w-8 bg-gray-900 border border-black border-opacity-10 rounded-full"></span>
                          </label>
                        </div>
                      </fieldset>
                    </div>
          
                    <!-- Sizes -->
                    <div class="mt-10">
                      <div class="flex items-center justify-between">
                        <h3 class="text-sm text-gray-900 font-medium">Size</h3>
                        <a href="#" class="text-sm font-medium text-indigo-600 hover:text-indigo-500">Size guide</a>
                      </div>
          
                      <fieldset class="mt-4">
                        <legend class="sr-only">
                          Choose a size
                        </legend>
                        <div class="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                          <!-- Active: "ring-2 ring-indigo-500" -->
                          <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-gray-50 text-gray-200 cursor-not-allowed">
                            <input type="radio" name="size-choice" value="XXS" disabled class="sr-only" aria-labelledby="size-choice-0-label">
                            <p id="size-choice-0-label">
                              XXS
                            </p>
          
                            <div aria-hidden="true" class="absolute -inset-px rounded-md border-2 border-gray-200 pointer-events-none">
                              <svg class="absolute inset-0 w-full h-full text-gray-200 stroke-2" viewBox="0 0 100 100" preserveAspectRatio="none" stroke="currentColor">
                                <line x1="0" y1="100" x2="100" y2="0" vector-effect="non-scaling-stroke" />
                              </svg>
                            </div>
                          </label>
          
                          <!-- Active: "ring-2 ring-indigo-500" -->
                          <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                            <input type="radio" name="size-choice" value="XS" class="sr-only" aria-labelledby="size-choice-1-label">
                            <p id="size-choice-1-label">
                              XS
                            </p>
          
                            <!--
                              Active: "border", Not Active: "border-2"
                              Checked: "border-indigo-500", Not Checked: "border-transparent"
                            -->
                            <div class="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"></div>
                          </label>
          
                          <!-- Active: "ring-2 ring-indigo-500" -->
                          <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                            <input type="radio" name="size-choice" value="S" class="sr-only" aria-labelledby="size-choice-2-label">
                            <p id="size-choice-2-label">
                              S
                            </p>
          
                            <!--
                              Active: "border", Not Active: "border-2"
                              Checked: "border-indigo-500", Not Checked: "border-transparent"
                            -->
                            <div class="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"></div>
                          </label>
          
                          <!-- Active: "ring-2 ring-indigo-500" -->
                          <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                            <input type="radio" name="size-choice" value="M" class="sr-only" aria-labelledby="size-choice-3-label">
                            <p id="size-choice-3-label">
                              M
                            </p>
          
                            <!--
                              Active: "border", Not Active: "border-2"
                              Checked: "border-indigo-500", Not Checked: "border-transparent"
                            -->
                            <div class="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"></div>
                          </label>
          
                          <!-- Active: "ring-2 ring-indigo-500" -->
                          <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                            <input type="radio" name="size-choice" value="L" class="sr-only" aria-labelledby="size-choice-4-label">
                            <p id="size-choice-4-label">
                              L
                            </p>
          
                            <!--
                              Active: "border", Not Active: "border-2"
                              Checked: "border-indigo-500", Not Checked: "border-transparent"
                            -->
                            <div class="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"></div>
                          </label>
          
                          <!-- Active: "ring-2 ring-indigo-500" -->
                          <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                            <input type="radio" name="size-choice" value="XL" class="sr-only" aria-labelledby="size-choice-5-label">
                            <p id="size-choice-5-label">
                              XL
                            </p>
          
                            <!--
                              Active: "border", Not Active: "border-2"
                              Checked: "border-indigo-500", Not Checked: "border-transparent"
                            -->
                            <div class="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"></div>
                          </label>
          
                          <!-- Active: "ring-2 ring-indigo-500" -->
                          <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                            <input type="radio" name="size-choice" value="2XL" class="sr-only" aria-labelledby="size-choice-6-label">
                            <p id="size-choice-6-label">
                              2XL
                            </p>
          
                            <!--
                              Active: "border", Not Active: "border-2"
                              Checked: "border-indigo-500", Not Checked: "border-transparent"
                            -->
                            <div class="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"></div>
                          </label>
          
                          <!-- Active: "ring-2 ring-indigo-500" -->
                          <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                            <input type="radio" name="size-choice" value="3XL" class="sr-only" aria-labelledby="size-choice-7-label">
                            <p id="size-choice-7-label">
                              3XL
                            </p>
          
                            <!--
                              Active: "border", Not Active: "border-2"
                              Checked: "border-indigo-500", Not Checked: "border-transparent"
                            -->
                            <div class="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"></div>
                          </label>
                        </div>
                      </fieldset>
                    </div>
          
                    <button type="submit" class="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Add to bag</button>
                  </form>
                </div>
                  </div>
        <div class="bg-gray-100">
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
        ${footer.render()}`;
    },
};
export default ProductDetail;