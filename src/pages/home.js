import data from "../data";

const homePage = {
    render() {
        return /* html */`
        <div class="max-w-5xl mx-auto"> 
            <div class="my-3">
                <img src="images/Banner.jpg" />
            </div>
            <div class="news">
                <h2 class="text-2xl font-semibold my-4">TIN TỨC HỌC TẬP</h2>
                <div class="grid grid-cols-3 gap-8">
                    ${data.map((post) => `
                        <div class="border p-4">
                            <a href="">
                                <img src="${post.img}" alt="" />
                            </a>
                            <h3 class="my-3"><a href="" class="font-semibold text-lg text-orange-500">${post.title}</a></h3>
                            <p>${post.desc}</p>
                        </div>
                    `).join("")}
                </div>
            </div>
        </div>
        
        `;
    },
};
export default homePage;