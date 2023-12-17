// export const detail = {
//     init() {
//         console.log(`its detail`);
//     }
// }

let scrollTop = 0;
      let h1;
      let coverImg;
      let cover;

      window.onload = function(){
        h1 = document.getElementsByTagName("h2")[0];

        coverImg = document.getElementsByClassName("main_coverimg")[0];
        cover = document.getElementsByClassName("main_cover")[0];
        cover.style.opacity = .3;
        // 이게 없으면 이미지가 있는 바탕이 새까맣다
      }

      window.addEventListener("scroll", function(e){
        scrollTop = document.documentElement.scrollTop;
        // scrollTop값 하나로 제어
        h1.style.transform = "translate(0,"+ -scrollTop/10 +"px)";
        // 1. h1 글자
        // 글자가 위로 올라감
        coverImg.style.transform = "scale("+ (1 + scrollTop/1000) +")";
        // 2. 커버 이미지
        // 이미지 크기가 커짐     크게 나눌 수록 이미지가 조금 커짐     작게 나누면 이미지가 난리가 남 확 커짐
        // 올라가는 값이 바뀜     많이 나누면 천천히 올라감
        // 스크롤 값에 따라 이미지가 움직임
        cover.style.opacity = .3 + scrollTop / 1000;
        // 3. 커버 이미지 위에 있는 검은색 커버
        // cover.style.opacity = .3;이라서        0.3 + scrollTop / 1000
        // 1000보다 작은 숫자를 주면 빨리 어두워짐
        // 이미지 위에 덮고 있는 커버가 어두워지게 할 수 있음
      });