import { detail } from './detail.js';
// import { write } from './write.js';
import { list } from './list2.js';
// import { top } from './main.js';

const subMain = document.querySelector('body.sub_page');
const pageName = document.title;

/** 공통 헤더+푸터 */
function commHtml () {
    const headHtml = `<!--  header -->
        <header class="header">
            <ul class="header_inner">
                <li class="header_item">
                    <a href="javascript:history.back();" class="btn_prev" title="이전 페이지로 이동"><i class="fa-solid fa-chevron-left"></i></a>
                    <!-- <h1 class="header_page">${pageName}</h1> -->                    
                </li>
                <li class="header_item">
                    <h1 class="logo"><a href="./main.html"><img src="../images/logo2.png" alt=""></a></h1>
                </li>
            </ul>
        </header>`;

    const navHtml = `<!--  floating btns -->
        <!-- nav button -->
        <nav class="nav">
            <a href="javascript:;" class="btn_top" title="맨 위로 화면 이동"><i class="fa-solid fa-chevron-up"></i></a>
            <a href="./write.html" class="btn_write" title="일기 작성하기 페이지로 이동"><i class="fa-solid fa-pen"></i></a>
        </nav>`;
    
    subMain.insertAdjacentHTML("afterbegin", headHtml);
    subMain.insertAdjacentHTML("beforeend", navHtml);
}

commHtml();

detail.init();
write.init();
list.init();