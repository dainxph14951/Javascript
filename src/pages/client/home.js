import data from "../../data";
import footer from "../../comboudun/footer";
import header from "../../comboudun/header";
import Banner from "../../comboudun/banner";

const homePage = {
    render() {
        return /* html */`
        ${header.render()}
        ${Banner.render()}
        <div class="mx-auto"> 
        
            <div class="news">
                <h2 class="text-2xl font-semibold my-4 text-center">SẢN PHẨM NỘI BẬT</h2>
                <div class="grid grid-cols-3 gap-8">
                    ${data.map((post) => `
                   
                        <div class="border p-4">
                        
                            <a href="/products/${post.id}">
                                <img class="mx-auto" src="${post.img}" alt="" />
                            </a>
                            <a href="/products/${post.id}">
                            <h3 class="my-3 font-semibold text-lg text-orange-500">${post.title}</h3>
                            </a>
                            <p>${post.desc}</p>
                          
                        </div>
                   
                    `).join("")}
                </div>
            </div>
        </div>
        ${footer.render()}
        `;
    },
};
export default homePage;