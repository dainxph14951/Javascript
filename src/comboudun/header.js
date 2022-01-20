const header = {
    render() {
        return /* html */`<div class="vapare">
        <header class=" sticky-top w-full">
            <div class="inner-header container ">
                <div class="logo">
                    <a href=""><img src="https://pubcdn.ivymoda.com/images/logo.png" alt=""></a>
                </div>

                <nav>
                    <ul class="main-menu">
                        <li><a href="//">Trang Chủ</a></li>
                        <li><a href="/gioithieu">Giới thiệu</a></li>
                        <li><a href="/sanpham">Sản Phẩm</a></li>
                        <li><a href="/blog">Blong</a></li>
                        <li><a href="/lienhe">Liên Hệ</a></li>


                    </ul>
                </nav>
                <div class="icon">
                    <!-- <a href=""><i class="fas fa-user-lock" style="color: black !important;"></i></a> -->
                    <a href="" class="p-1"><i class="fas fa-bell " style="color: black !important;"></i></a>
                    <a href="" class="p-1"><i class="fas fa-shopping-bag" style="color: black !important;"></i></a>
                    <a href="/signup" class="p-1"><i class="fas fa-fingerprint" style="color: black !important;"></i></a>
                    <a href="/signin" class="p-1"><i class="fas fa-user-lock" style="color: black !important;"></i></a>
                </div>
            </div>

        </header> 
        <!-- -------------------------------------------- -->
`;
    },
};
export default header;