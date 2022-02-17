import { getAll } from "../../api/users";
import NavAdmin from "../../components/NavAdmin";

const UserPage = {
    async render() {
        const response = await getAll();
        return /* html */`
        <div class="min-h-full">
            ${NavAdmin.render()}
            <header class="bg-white shadow">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <div class="lg:flex lg:items-center lg:justify-between">
                        <div class="flex-1 min-w-0">
                        </div>
                        <div class="mt-9 mx-auto flex lg:mt-0 lg:ml-4">
                        <a href="/admin/news/add" class="sm:ml-3">
                            <button type="button"
                            class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Thêm mới
                            </button>
                        </a>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                
                    <div class="px-4 py-6 sm:px-0">
                    <div class="border-4 border-dashed border-gray-200 rounded-lg h-96">
                    
                    <div class="-my-0 sm:-mx-6 lg:-mx-8">
                    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table class="min-w-full divide-y divide-gray-200">
                  
                        <div class="mt-5 flex lg:mt-0 lg:ml-4">
                        </div>
                          <thead class="bg-gray-50">
                            <tr>
                              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                ID Người Dùng
                              </th>
                              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Tên Người Dùng
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Đại Chỉ
                          </th>
                              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Giới Tính
                              </th>
                              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Email
                              </th>
                              <th scope="col" class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                               PassWord
                              </th>
                              <th scope="col" class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                             
                             </th>
                              <th scope="col" class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Xóa
                             </th>
                            </tr>
                          </thead>
                          <tbody class="bg-white divide-y divide-gray-200">
                          ${response.data.map((user) => `
                            <tr>
                              <td class="px-6 py-4 whitespace-nowrap">
                                <div class="flex items-center">
                                  <div class="flex-shrink-0 h-10 w-10">
                  
                                  ${user.id}
                  
                                  </div>
                                  </div>
                                </div>
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap">
                  
                              <div class="text-sm text-gray-900">${user.firstname}</div>
                  
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap">
                  
                              <div class="text-sm text-gray-900">${user.streetaddress}</div>
                  
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap">
                                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                ${user.gender}
                                </span>
                              </td>
                              <td class="px-6 py-4 text-sm text-gray-400">
                               ${user.email}
                              </td>
                              <td class="px-6 py-4 text-sm text-gray-400">
                              ${user.password}
                             </td>
                              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <a href="/admin/products/${user.id}/edit" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">sửa</a>
                              </td>                              
                              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <a href="${user.id}" class="bnt inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Xóa</a>
                              </td>
                            </tr>
                            `).join("")}
                  
                            <!-- More people... -->
                        
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                    
                    </div>
                    </div>
                </div>
            </main>
        </div>
    
                    `;
    },
};
export default UserPage;