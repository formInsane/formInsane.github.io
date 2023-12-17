// export const write = {
//   init() {
//     /** 날씨 선택 */
//     //input을 변수로 지정
//     const imgInput = document.querySelectorAll('.weather_icon input');
//     //for문으로 imgInput의 배열을 가져온다 
//     for (var i = 0; i < imgInput.length; i++) {
//       //for문으로 가져온 imgInput[i]에 addEventListener click을 사용한다
//         imgInput[i].addEventListener('click', function() {
//             //this = imgInput[i]를 클릭시 active 클래스 추가
//             this.classList.add('active');
//             //this = imgInput[i]를 클릭시 checked 클래스 추가
//             this.setAttribute('checked', '');
//             // 다른 요소들에서 'active' 클래스를 제거
//             for (var j = 0; j < imgInput.length; j++) {
//                 if (imgInput[j] !== this) {
//                     imgInput[j].classList.remove('active');
//                     imgInput[j].removeAttribute('checked');
//                 }
//             }
//             // console.log(this.value);
//         });
//     }
//   }
// }
//-----------------------------------------------------------------------------
function PreviewImage() {

  // 파일리더 생성 
  var preview = new FileReader();
  preview.onload = function (e) {
    // img id 값 
    document.getElementById("user_image").src = e.target.result;
  };
  // input id 값 
  preview.readAsDataURL(document.getElementById("file").files[0]);
  console.log(preview);

  // if(preview){
  //     var uploadText = document.querySelector('.btn-upload');
  //     uploadText.innerHTML = ''; // 텍스트 내용 삭제
  // }
  console.log(hideUploadText());

}
