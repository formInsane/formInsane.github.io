// setItem() - key, value 추가
// getItem() - value 읽어 오기
// removeItem() - item 삭제
// clear() - 도메인 내의 localStorage 값 삭제
// length - 전체 item 갯수
// key() - index로 key값 찾기

// const write = {
//   weatherChoose() {
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
//   },


//   txtDelete(){
//     function PreviewImage() {
//       // 파일리더 생성 
//       var preview = new FileReader();
//       var uploadText = document.querySelector('.upload_txt');
    
//       preview.onload = function (e) {
//         // img id 값 
//         document.getElementById("user_image").src = e.target.result;
//       };
//     // input id 값 
//       preview.readAsDataURL(document.getElementById("file").files[0]);
//       uploadText.innerHTML = '';
    
//     };

//     function hideUploadText(){
//       var uploadText = document.querySelector('.btn-upload');
//       uploadText.innerHTML = ''; // 텍스트 내용 삭제
//     }

//     PreviewImage();
//     hideUploadText();

//   },

  
//   /** 폼 데이터 -> 로컬스토리지 */
//   localData() {
//     function saveData() {
//       const selDate = document.querySelector('[type="date"]').value;
//       const getDate = selDate.replace(/\-/g,'');
//       const getWeather = document.querySelector('[name="weather"]:checked').value;
//       const getTitle = document.querySelector('[name="title"]').value;
//       const getImg = document.querySelector('[name="title"]').value;
//       const getText = document.querySelector('[name="form_write"]').value;
//       const submitBtn = document.querySelector('.submit_button');

//       /** 작성한 일기데이터 객체 배열 생성 */
//       const setDiaryArray = [{
//         date: getDate,
//         weather: getWeather,
//         title: getTitle,
//         img: getImg,
//         text: getText,
//       }]

//       submitBtn.onclick = (e) => {

//         if (setDiaryArray !== null) {
//           alert('작성중인 일기가 있습니다!')
//         } else {
//           // 일기 쓴 날짜가 없는 경우 새로운 key 날짜 데이터 생성 및 추가
//           localStorage.setItem(getDate, JSON.stringify(setDiaryArray));
//         }
//       }


//     }


//     const writeForm = document.querySelector('.write_form');
//     const weatherInput = document.querySelectorAll('.weather_icon input');
//     const imgOutput = document.querySelector('.img_output');
//     const submitBtn = document.querySelector('.submit_button');

//     submitBtn.onclick = () => {
      
//       saveData();

//       // 전체폼 클리어
//       writeForm.reset();
//       // 날씨 폼 클리어
//       weatherInput.forEach((item) => {
//         item.classList.remove('active');
//         item.removeAttribute('checked');
//       });
//       // 업로드 이미지 클리어
//       imgOutput.setAttribute('src', '');
//       alert('일기가 등록되었습니다!')
//     }
//   },

  // saveForm() {
  //   function saveLocalStorage() {
  //         const selDate = document.querySelector('[type="date"]').value;
  //         const getDate = selDate.replace(/\-/g,'');
  //         const diaryItems = JSON.parse(localStorage.getItem(getDate));
  //         const getWeather = document.querySelector('[name="weather"]').value;
  //         const getTitle = document.querySelector('[name="title"]').value;
  //         const getImg = document.querySelector('[name="title"]').value;
  //         const getText = document.querySelector('[name="form_write"]').value;
  //         const getId = new Date().getTime() + Math.random(); // 현재 시간을 밀리초로 반환 (1초 = 1000밀리초) + 랜덤값

  //   const setDiaryArray = [{
  //     id: getId,
  //     date: getDate,
  //     weather: getWeather,
  //     title: getTitle,
  //     img: getImg,
  //     text: getText,
  //   }]

  //   window.addEventListener('DOMContentLoaded', () => {
  //     // 이미 있는 key 날짜에 데이터 추가
  //     if (localStorage.getItem(getDate) !== null) {
  //       const takeData = localStorage.getItem(getDate);
  //       const addDateData = JSON.parse(takeData);
  
  //       addDateData.push(...setDiaryArray);
  //       localStorage.setItem(getDate, JSON.stringify(addDateData));
  //       console.log(`addDateData.length: ${addDateData.length}`)
  //     } else {
  //       // 일기 쓴 날짜가 없는 경우 새로운 key 날짜 데이터 생성 및 추가
  //       localStorage.setItem(getDate, JSON.stringify(setDiaryArray));
  //     }
  //   });
  //  }

  // },





//   init() {
//     this.saveForm();
//     this.weatherChoose();
//     this.txtDelete();
//     this.localData();
//   }
    
//   };
//   write.init();


//-----------------------------------------------------------------------------
function saveLocalStorage() {
  const selDate = document.querySelector('[type="date"]').value; // input type=date 즉 오늘의 날짜를 가져온다 ex)2023-12-14
  const getDate = selDate.replace(/\-/g,'');  // 가져온 날짜의 하이픈을 정규식(replace)으로 삭제 ex)20231214 
  const getWeather = document.querySelector('[name="weather"]').value;
  const getTitle = document.querySelector('[name="title"]').value;
  const getImg = document.querySelector('[name="title"]').value;
  const getText = document.querySelector('[name="form_write"]').value;
  const getId = new Date().getTime() + Math.random(); // 현재 시간을 밀리초로 반환 (1초 = 1000밀리초) + 랜덤값

const setDiaryArray = [{
id: getId,
date: getDate,
weather: getWeather,
title: getTitle,
img: getImg,
text: getText,
}]

window.addEventListener('DOMContentLoaded', () => {
// 이미 있는 key 날짜에 데이터 추가
if (localStorage.getItem(getDate) !== null) {
const takeData = localStorage.getItem(getDate);
const addDateData = JSON.parse(takeData);

addDateData.push(...setDiaryArray);
localStorage.setItem(getDate, JSON.stringify(addDateData));
console.log(`addDateData.length: ${addDateData.length}`)
} else {
// 일기 쓴 날짜가 없는 경우 새로운 key 날짜 데이터 생성 및 추가
localStorage.setItem(getDate, JSON.stringify(setDiaryArray));
}
});
}

const  writeForm = document.querySelector('.write_form');
const submitBtn = document.querySelector('.submit_button');

submitBtn.onclick = () => {

  const dateBox = document.querySelector('.todaydate');
  const weatherBox = document.querySelector('.weather_selector');
  const titleBox = document.querySelector('.title');
  const imgBox = document.querySelector('.upload_img');
  const textBox = document.querySelector('.detail_text');

  const dateVal = document.querySelector('[type="date"]').value;
  const writeDate = dateVal.replace(/\-/g,'');
  const weatherVal = document.querySelector('[name="weather"]:checked');
  const titleVal = document.querySelector('[name="title"]').value;
  const imgVal = document.querySelector('[name="title"]').value;
  const textVal = document.querySelector('[name="form_write"]').value;

    // 유효성 검사
    // 한 항목이라도 값이 없을 경우
      if (!dateVal) {
        alert('일기가 완성되지 않았어요, 날짜를 선택해주세요!');
        //해당 박스 영역의 탑으로 스크롤 이동한다.
        window.scroll({behavior: 'smooth', left: 0, top:dateBox.offsetTop});
        dateBox.focus();
      } else if (!weatherVal) {
        alert('일기가 완성되지 않았어요, 날씨를 선택해주세요!');
        window.scroll({behavior: 'smooth', left: 0, top:weatherBox.offsetTop});
        weatherBox.focus();
      } else if (!titleVal) {
        alert('일기가 완성되지 않았어요, 제목을 써주세요!');
        window.scroll({behavior: 'smooth', left: 0, top:titleBox.offsetTop});
        titleBox.focus();
      } else if (!imgVal) {
        alert('일기가 완성되지 않았어요, 이미지를 올려주세요!');
        window.scroll({behavior: 'smooth', left: 0, top:imgBox.offsetTop});
        imgBox.focus();
      } else if (!textVal) {
        alert('일기가 완성되지 않았어요, 내용을 써주세요!');
        window.scroll({behavior: 'smooth', left: 0, top:textBox.offsetTop});
        textBox.focus();
      } else {
        // 모든 항목 값이 있을 떄, 입력값 로컬스토리지 저장
        saveLocalStorage();
        // 전체폼 클리어
        writeForm.reset();
        // 날씨 폼 클리어
        weatherInput.forEach((item) => {
          item.classList.remove('active');
          item.removeAttribute('checked');
        });
        // 업로드 이미지 클리어
        imgOutput.setAttribute('src', '');
        if (!alert("일기가 등록되었습니다!")) document.location = `./list.html?current=${writeDate}`;
      }
}


// function saveLocalStorage() {
//   const selDate = document.querySelector('[type="date"]').value;
//   const getDate = selDate.replace(/\-/g,'');
//   const diaryItems = JSON.parse(localStorage.getItem(getDate));
//   const getWeather = document.querySelector('[name="weather"]').value;
//   const getTitle = document.querySelector('[name="title"]').value;
//   const getImg = document.querySelector('[name="title"]').value;
//   const getText = document.querySelector('[name="form_write"]').value;
//   const getId = new Date().getTime() + Math.random(); // 현재 시간을 밀리초로 반환 (1초 = 1000밀리초) + 랜덤값

// const setDiaryArray = [{
// id: getId,
// date: getDate,
// weather: getWeather,
// title: getTitle,
// img: getImg,
// text: getText,
// }]

// window.addEventListener('DOMContentLoaded', () => {
// // 이미 있는 key 날짜에 데이터 추가
// if (localStorage.getItem(getDate) !== null) {
// const takeData = localStorage.getItem(getDate);
// const addDateData = JSON.parse(takeData);

// addDateData.push(...setDiaryArray);
// localStorage.setItem(getDate, JSON.stringify(addDateData));
// console.log(`addDateData.length: ${addDateData.length}`)
// } else {
// // 일기 쓴 날짜가 없는 경우 새로운 key 날짜 데이터 생성 및 추가
// localStorage.setItem(getDate, JSON.stringify(setDiaryArray));
// }
// });
// }


const cancel_button = document.querySelector('.cancel_button');

cancel_button.onclick = () => {
 

  var cancelConfirm = confirm('쓰다 만 일기가 있어요. 마저 쓰시겠습니까?')
  console.log(cancelConfirm);
  
  if(confirm('쓰다 만 일기가 있어요. 마저 쓰시겠습니까?')){

    const returnPage = document.querySelector('.sub_page');
    returnPage.saveLocalStorage();
    console.log(returnPage.saveLocalStorage());

  }else if( cancel_button == false) {
    saveLocalStorage().clear();
  }

}



//-----------------------------------------------------------------------------
// function saveLocalStorage(date, data, add, del){
//   console.log(saveLocalStorage());

//   if(add) {
//     data = diaryItems.push(selDate);
//     data = diaryItems.push(getWeather);
//     data = diaryItems.push(getTitle);
//     data = diaryItems.push(getImg);
//     data = diaryItems.push(getText);
//   }
//   if(del) {
//     data = diaryItems.filter(obj => !del.includes(obj.id));
//     data = diaryItems.filter(obj => !del.includes(obj.id));
//     data = diaryItems.filter(obj => !del.includes(obj.id));
//     data = diaryItems.filter(obj => !del.includes(obj.id));
//     data = diaryItems.filter(obj => !del.includes(obj.id));
//   }

//   const result = data.reduce((acc, currentItem) => {

//     const isIdExists = acc.some(item => item.id === currentItem.id);

//     if (!isIdExists) {
//       acc.push(currentItem);
//     }
//     return acc;
//   }, [])

//   .sort(function(a, b){
//     return a.id - b.id
//   });

//   data = JSON.stringify(result);

//   localStorage.setItem(date, data);

// }





//-----------------------------------------------------------------------------
// textarea 자동저장
// document.addEventListener("DOMContentLoaded", function(){
//   const textarea = document.getElementById("autoSaved");
//   const savedText = localStorage.getItem("autosave_text");

//   if(savedText) {
//     textarea.value = savedText;
//   };

//   textarea.addEventListener("input", function(){
//     const currentText = textarea.value;
//     localStorage.setItem("autosave_text", currentText);
//   });

// });






//-----------------------------------------------------------------------------
// const selDate = document.querySelector('[type="date"]').value;
// const getDate = selDate.replace(/\-/g,'');
// console.log(selDate);

// function saveData() {
//   const selDate = document.querySelector('[type="date"]').value;
//   const getDate = selDate.replace(/\-/g,'');
//   const getWeather = document.querySelector('[name="weather"]:checked').value;
//   const getTitle = document.querySelector('[name="title"]').value;
//   const getImg = document.querySelector('[name="title"]').value;
//   const getText = document.querySelector('[name="form_write"]').value;
//   const submitBtn = document.querySelector('.submit_button');


//   /** 작성한 일기데이터 객체 배열 생성 */
//   const setDiaryArray = [{
//     date: getDate,
//     weather: getWeather,
//     title: getTitle,
//     img: getImg,
//     text: getText,
//   }]

//   submitBtn.addEventListener('click', function() {
//     console.log(selDate);
//     if (setDiaryArray !== null) {
//       alert('작성중인 일기가 있습니다!')
//     } else {
//       // 일기 쓴 날짜가 없는 경우 새로운 key 날짜 데이터 생성 및 추가
//       localStorage.setItem(getDate, JSON.stringify(setDiaryArray));
//     }
//   });
  


// }

// saveData();

//-----------------------------------------------------------------------------

function PreviewImage() {

  // 파일리더 생성 
  var preview = new FileReader();
  var uploadText = document.querySelector('.upload_txt');

  preview.onload = function (e) {
  // img id 값 
  document.getElementById("user_image").src = e.target.result;
};
// input id 값 
preview.readAsDataURL(document.getElementById("file").files[0]);
uploadText.innerHTML = '';

};


function hideUploadText(){
  var uploadText = document.querySelector('.btn-upload');
  uploadText.innerHTML = ''; // 텍스트 내용 삭제
}
//-----------------------------------------------------------------------------

// function hideUploadText() {
//   var uploadText = document.querySelector('.btn-upload');
//   uploadText.innerHTML = ''; // 텍스트 내용 삭제

//   // if(){
    
//   // }
// }
// var fileInput = document.querySelectorAll("input_image");
// console.log(fileInput);


// function previewImage() {
//   var fileInput = document.getElementById("uploadInput");
//   var preview = new FileReader();

//   preview.onload = function (e) {
//     document.getElementById("user_image").src = e.target.result;
//     hideUploadText();
//   };

//   if (fileInput.files && fileInput.files[0]) {
//     preview.readAsDataURL(fileInput.files[0]);
//   }
// }

// function hideUploadText() {
//   var uploadText = document.querySelector('.btn-upload');
//   uploadText.firstChild.nodeValue = ''; // 텍스트 내용 삭제
// }


// console.log(hideUploadText());

// function getImageFiles(e) {
//   const uploadFiles = [];
//   const files = e.currentTarget.files;
//   const imagePreview = document.querySelector('.image_preview');
//   const docFrag = new DocumentFragment();

//   if ([...files].length > 2) {
//     alert('이미지는 최대 1개 까지 업로드가 가능합니다.');
//     return;
//   }

//   // 파일 타입 검사
//   [...files].forEach(file => {
//     if (!file.type.match("image/.*")) {
//       alert('이미지 파일만 업로드가 가능합니다.');
//       return
//     }

//     // 파일 갯수 검사
//     if ([...files].length < 2) {
//       uploadFiles.push(file);
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         const preview = makeElement(e, file);
//         imagePreview.appendChild(preview);
//       };
//       reader.readAsDataURL(file);
//     }
//   });

//   deleteClass();
// }

// function makeElement(e, file) {
//   const imgWrap = document.createElement('li');
//   const imgItem = document.createElement('img');
//   imgItem.setAttribute('src', e.target.result);
//   imgItem.setAttribute('data-file', file.name);
//   imgWrap.appendChild('image_preview');
//   imgWrap.classList.add('upload');
//   return imgWrap;
// }

// const realUpload = document.querySelector('.real_upload');
// const upload = document.querySelector('.upload');

// upload.addEventListener('click', () => realUpload.click());

// realUpload.addEventListener('change', getImageFiles);

// function deleteClass(){
//   const hiddenTxt = document.querySelector('.real_upload');    

//   hiddenTxt.classList.add('hidden');
//   upload.classList.add('hidden');
// }
//-----------------------------------------------------------------------------

// const test = document.querySelectorAll('.img_input');
// test.forEach((el) => {
//   el.onclick = (e) => {
//     clickInput(e);
//   };
// });

// [].forEach.call(test, function(col){
//   col.addEventListener("click",clickInput,false);
// });

// const test = document.querySelectorAll('.img_input');

// function clickInput () {
//     test.forEach(function(e) {
//       e.addEventListener("click", function() {
//         switch(e) {
//           case 0: {
//             e.style.backgroundImage= "url(../images/icon/acsunny.png)";
//             console.log('알림');
//             break;
//           }
//         }
        
//       });
//       console.log(e);
//     })

// }

// clickInput();


// const weatherInputs = document.querySelectorAll('.img_input');
// const imagePaths = {
//   sun: '../images/icon/acsunny.png',
//   cloud: '../images/icon/accloud.png',
//   snow: '../images/icon/acsnow.png',
//   rain: '../images/icon/acrain.png',
//   halfcloud: '../images/icon/achalfcloud.png'
// };

// weatherInputs.forEach(function (input) {
//   input.addEventListener('click', function () {
//     const iconName = input.classList[1];
//     input.style.backgroundImage = `url('${imagePaths[iconName]}')`;
//   });
// });


// const weatherInputs = document.querySelectorAll('.img_input');

// weatherInputs.forEach(function (input) {
//   input.addEventListener('click', function () {
//     const iconName = input.classList[1];
//     input.style.backgroundImage = `url('../images/icon/ac${iconName}.png')`;
//   });
// });




// 날씨 선택 스크립트
//.img_input의 클래스명을 input에서 가져와서 querySelectorAll로 전체를 가져와서 변수로 지정한다
//const imgInput = document.querySelectorAll('.img_input');

//각각의 imgInput에 클릭시 background 이미지를 변경해주기 위해서 forEach문을 사용하고 함수의 파라미터로
// clickImg이라는 이름으로 지정해준다 ::imgInput이라는 변수를 clickImg로 함수의 파라미터사용
//imgInput.forEach(function (clickImg) {


  /*************************** 그냥 추가해봤어요(에런) *******************************/

  // 각각의 인풋의 background-image값을 조회
  //const css_background = window.getComputedStyle(clickImg).getPropertyValue('background-image');
  // 정규식으로 url('추출할 주소')에서 '추출할 주소'를 제외한 나머지 제거
  //let protocol = /url\(['"](.+)['"]\)/.exec( css_background );
  // 확장자 '.'이 포함되지 않은 문자열을 모두 공백으로 대체 - 이미지명 추출을 위해
  //let imgName = protocol[1].replace(/^.*\//, '');
  // 기존 경로 확보
  //let imgPath = protocol[1].match(/^.*\//);

  // 활성화된 이미지명으로 변경
  //imgName = 'ac' + imgName;
  //console.log(...imgPath);
  //console.log(imgName);
  //});
  /**********************************************************************************/
  // const imgInput = document.querySelectorAll('.weather_icon input');
  // for(var i = 0; i < imgInput.length; i++){
  //   imgInput[i].addEventListener('click', function(){
  //     this.classList.toggle('active');
      
  //   });

  // }



  /**********************************************************************************/
  
// clickImg로 지정한 타겟으로 addEventListener를 사용해 click이벤트를 함수로 만들고 
  //clickImg.addEventListener('click', function () {

// 클릭된 요소의 두 번째 클래스를 가져와서(sun, cloud, rain, snow, halfcloud) acimg에 저장한다.
    //const acimg = clickImg.classList[1];

//한개의 날씨가 선택되었을대 나머지 날씨가 보이지 않도록 만들기 위해
//다시 input background 이미지를 모두 가져와서 noneImg라는 파라미터로 지정한다
//::imgInput이라는 변수를 noneImg로 함수의 파라미터사용
    //imgInput.forEach(function (noneImg) {
      

// 만약 기존의 이미지와 변경하려는 이미지가 다를 시 백그라운드 이미지를 display none 시켜버린다
      //if (noneImg !== clickImg) {
        //noneImg.style.backgroundImage = 'none';
     // }
    //});
//기존의 이미지를 클릭시 background의 이미지가 변경되게 한다
//여기서 const acimg = clickImg.classList[1]; 두번째 요소의 이미지를 가져와서 앞에 ac를 붙여줌으로써
//background 이미지가 변경된다
    //clickImg.style.backgroundImage = `url('../images/icon/ac${acimg}.png')`;
 // });
//});


// test.forEach(function(e) {
//   e.addEventListener('click', function(){
//     e.style.backgroundImage= "url(../images/icon/acsunny.png)";
    
//     test.forEach(function (sibling) {
//       if (sibling !== e) {
//         sibling.style.border = 'none';
//         sibling.style.borderRadius = '0%';
//       }
//     });  
//   });
// })

