const write = {
  /** 날씨 선택 */
  weatherInput() {
    const imgInput = document.querySelectorAll('.weather_icon input');

    //for문으로 imgInput의 배열을 가져온다 
    for (var i = 0; i < imgInput.length; i++) {
      //for문으로 가져온 imgInput[i]에 addEventListener click을 사용한다
        imgInput[i].addEventListener('click', function() {
            //this = imgInput[i]를 클릭시 active 클래스 추가
            this.classList.add('active');
            //this = imgInput[i]를 클릭시 checked 클래스 추가
            this.setAttribute('checked', '');
            
            // 다른 요소들에서 'active' 클래스를 제거
            for (var j = 0; j < imgInput.length; j++) {
                if (imgInput[j] !== this) {
                    imgInput[j].classList.remove('active');
                    imgInput[j].removeAttribute('checked');
                }
            }        
            // console.log(this.value);
        });
    }
  },

  /** 이미지 업로드 */
  fileUpload() {
    const imgUpload = document.querySelector('.real_upload');
    const output = document.querySelector('.img_output');
    const uploadTxt = document.querySelector('.upload');  

    // 파일 업로드 input의 change 이벤트를 감지
    imgUpload.addEventListener('change', function(e) {
      // 파일을 읽기 위한 FileReader 객체를 생성
      const reader = new FileReader();
      const fileName = e.target.files[0].name;      

      // 파일 로드가 완료되면 실행될 콜백 함수를 정의
      reader.onload = function(event) {
        // 이미지 객체 생성
        const image = new Image();

        // 이미지 객체의 로드가 완료되면 실행될 콜백 함수를 정의
        image.onload = function() {
          // 이미지 객체의 너비와 높이
          const width = this.width;
          const height = this.height;

          // 이미지의 크기를 체크
          if (width > height) {
            output.style.width = '100%';
            output.style.height = 'auto';
            // alert('너비가 크다');
          } else {
            output.style.width = 'auto';
            output.style.height = '100%';
            // alert('높이가 크다')
          }
        };

        // 이미지 객체에 파일 데이터를 설정하고 로드
        image.src = event.target.result;
        output.src = event.target.result;      
        
        const fileSrc = event.target.result;
        imgUpload.setAttribute('data-url', `${event.target.result}`)
      };

      // FileReader 객체에 파일 데이터를 설정하고 로드
      reader.readAsDataURL(imgUpload.files[0]);
      // console.log(`fileName: ${fileName}`)
      uploadTxt.style.display = 'none';      
    });
  },

  /** 폼 데이터 -> 로컬스토리지 */
  sendForm() {
    function saveLocalStorage() {
      // 난수 생성
      let randomNum = Math.floor(Math.random() * 999);
      // 자릿수 변수 선언
      let digit;
      // 난수를 문자열 변환 후 숫자 개수 파악 후 붙여줄 자릿수 계산
      randomNum.toString().length === 2 ? digit = "0" : digit = "00"; 
      // 자릿수를 난수에 결합한 최종 코드를 변수화
      let idNum = String(randomNum).padStart(3, digit);

      const selDate = document.querySelector('[type="date"]').value;
      const getDate = selDate.replace(/\-/g,'');
      const getWeather = document.querySelector('[name="weather"]:checked').value;
      const getTitle = document.querySelector('[name="title"]').value;
      const getImg = document.querySelector('[type="file"]').getAttribute('data-url');
      const getText = document.querySelector('[name="form_write"]').value;
      const getId = getDate + idNum; // 선택한 날짜 + 랜덤 난수 3자리 = id값
      const views= 0;

      const setDiaryArray = [{
        id: getId,
        date: getDate,
        weather: getWeather,
        title: getTitle,
        img: getImg,
        text: getText,
        view: views,
      }]

      /** 작성한 일기데이터 객체 배열 생성 */
        
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

      // const ckData = localStorage.getItem('20231201'); // key 20231213의 데이터 가져온다
      // const parseCkData = JSON.parse(ckData); // 변환해서 객체로 가져온다.
      // parseCkData.push(setDiaryArray);

      // console.log(`ckData: ${ckData}`);
      // console.log(`parseCkData: ${parseCkData}`);
      // console.log(`parseCkData.length: ${parseCkData.length}`);
      // console.log(`parseCkData[0].date: ${parseCkData[0].date}`);
    }

    const diaryForm = document.querySelector('.diary_form');
    const weatherInput = document.querySelectorAll('.weather_icon input');
    const imgOutput = document.querySelector('.img_output');
    const submitBtn = document.querySelector('.submit_button');
    const cancelBtn = document.querySelector('.cancel_button');

    /** 저장 버튼 누를 시  */
    submitBtn.onclick = (e) => {
      e.preventDefault();

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
      // if (!dateVal || !weatherVal || !titleVal || !imgVal || !textVal) {
      if (!dateVal) {
        alert('일기가 완성되지 않았어요, 날짜를 선택해주세요!');
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
        diaryForm.reset();
        // 날씨 폼 클리어
        weatherInput.forEach((item) => {
          item.classList.remove('active');
          item.removeAttribute('checked');
        });
        // 업로드 이미지 클리어
        imgOutput.setAttribute('src', '');
        if (!alert("일기가 등록되었습니다!")) location.href = `./list.html?date=${writeDate}`;
      }
    }

    /** 취소 버튼 누를 시 */
    cancelBtn.onclick = (e) => {
      e.preventDefault();

      const cancelConfirm = confirm('쓰다 만 일기가 있어요. 마저 쓰시겠습니까?')
      if (cancelConfirm) {
        // 확인 누를 시
        const bodyTag = document.getElementsByTagName("body")[0];
        window.scroll({
            behavior: 'smooth',
            left: 0,
            top:bodyTag.offsetTop
        });
      } else {
        // 취소 누를 시
        document.location = './main.html';
      }
    }
  },

  init() {
    this.weatherInput();
    this.fileUpload();
    this.sendForm();
  }
}

write.init();