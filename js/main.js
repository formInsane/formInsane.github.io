let diaryList = new Array;

// 존재하는 로컬스토리지 key값 전부 모으기
for (let i=0; i<localStorage.length; i++) {
  let key = localStorage.key(i);
  let date = localStorage.getItem(key);
  let diaries = JSON.parse(date);

  // 날짜별(key) 일기장 내용 배열 순회
  for(const element of diaries) {
    let getKeys = `{
      "id": ${element.id},
      "title": "${element.title}",
      "start": "${key}",
      "imageurl": "${element.img}"
    }`;

    let parseKeys = JSON.parse(getKeys);
    diaryList.push(parseKeys);
  }
}

// console.log(diaryList);


document.addEventListener('DOMContentLoaded', function() {
    // calendar element 취득
    var calendarEl = document.getElementById('calendar');


    // full-calendar 생성하기
    var calendar = new FullCalendar.Calendar(calendarEl, {
        timeZone: 'local', // 타임존 설정
        initialView: 'dayGridMonth', // 초기 로드 될때 보이는 캘린더 화면
        aspectRatio: 1.5, // 가로, 세로 비율
        headerToolbar: {
          // 순서 변경 가능
          // left: 'prevYear,nextYear,prev,next',
          left: 'month,year',
          // 이전 년도, 다음 년도, 이전 달, 다음 달, 오늘
          center: 'title',
          right: 'prev,next,today'
        },
        titleFormat: {
          // year: 'numeric', 
          month: 'numeric',
        },
        // 캘린더 보기 형식
        dayMaxEventRows: true, // for all non-TimeGrid views
        eventMaxStack: 0,
        views: {
          // 이벤트 옵션
          // dayGridMonth: {
          //   dayMaxEventRows: 0, // 이벤트가 1개 이상이면 +개수 로 보임, 날짜 클릭시 팝업 창 나옴
          //   moreLinkClick: 'day' 
          //   /* 해당날짜에 해당하는 일별 보기로 이동 
          //   “popover”, “week”, “day”, view name (string) 
          //   function (https://fullcalendar.io/docs/moreLinkClick) */
          // },
          showNonCurrentDates: true,
          multiMonthFourMonth: {
            type: 'multiMonth',
            duration: { months: 12 }
          },
          month: {
            type: 'dayGridMonth',
            buttonText: 'month',
          },
          year: {
            type: 'multiMonth',
            duration: { months: 12 },
            buttonText: 'year'
          },
        },
        // editable: true, // 수정 가능
        // initialDate: '2021-07-15', // 초기 날짜 설정 (설정하지 않으면 오늘 날짜가 보인다.)
        height: '100vh', // 높이 설정        
        // locale: 'ko', // 한국어 설정
        // eventLimit: true,
        // weekNumbers: true,
        // 주의 숫자를 나타낼 수 있음 기본 값은 false
        // selectHelper: true,

        events: diaryList,



        // 이벤트         
        // events: [                  
        //   {
        //     title:"event 1",
        //     start:"20231214",
        //     url: "http://google.com",
        //     image: 'https://i.namu.wiki/i/GQMqb8jtiqpCo6_US7jmWDO30KfPB2MMvbdURVub61Rs6ALKqbG-nUATj-wNk7bXXWIDjiLHJxWYkTELUgybkA.webp'
          // },          
        //   {
        //     "resourceId":"b",
        //     "title":"event 2",
        //     "start":"2023-11-15T12:00:00+00:00",
        //     "end":"2021-07-16T06:00:00+00:00",
        //     "url": "http://google.com",
        //     "color": "black"
        //   },            
        // ],

        // eventRender 연습 02
        // eventRender: function(event, element) {
        //   // 이벤트 렌더링 시 이미지를 추가하는 코드
        //   if (event.imageUrls && event.imageUrls.length > 0) {
        //     for (var i = 0; i < event.imageUrls.length; i++) {
        //       var imageUrl = event.imageUrls[i];
        //       var imageElement = $('<img>').attr('src', imageUrl).addClass('event-image');
        //       element.find('.fc-title').append(imageElement);
        //     }
        //   }
        // },

        // eventRender 연습 03
        // eventRender: function (event, element) {
        //   element.find('.fc-content').prepend("<img src='" + event.image + "' width='20' height='20'>");
        // },

        // defaultDate: true,
        /* 달력의 시작 날짜를 지정할 수 있음 
        이 부분은 오늘 날짜를 가져와서 설정해 주면 오늘 날짜 기준으로 달력이 보여짐*/
        // plugins: [multiMonthPlugin],
        // initialView: 'multiMonthFourMonth',
        
        
      // 캘린더 날짜 클릭 시, 날짜 데이터 가져오기
      dateClick: function(data) {
        // fullcalendar 추출 데이터 중 하이픈을 정규식으로 제거
        const convertLStorage = data.dateStr.replace(/\-/g,'');
        
        // 정규식 제거한 추출 데이터를 url쿼리에 추가하고 list페이지로 이동
        location.href = `html/list.html?date=${convertLStorage}`;
      },      
    });
    
    // swiper
    var swiper = new Swiper(".bestSwiper", {
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
      slidesPerView: "auto",
    });

    calendar.render();
  });

// 위로 가기 버튼
const btn = document.querySelector('.btn_top');

btn.onclick = function (){
  window.scrollTo({top: 0, left: 0, behavior:'smooth'});
}

// 데이터 불러오기
// 날짜 데이터 불러오기
// const date = localStorage.getItem("date");
// const ckDataLength = ckData.length;
// console.log('갯수' + ckDataLength);

// const ckData = localStorage.getItem("20231214"); // key 20231213의 데이터 가져온다
// const parseCkData = JSON.parse(ckData); // 변환해서 객체로 가져온다.
// console.log(`1ckData: ${ckData}`);
// console.log(`2parseCkData: ${parseCkData}`);
// console.log(`parseCkData[0].date: ${parseCkData[0].date}`);
// console.log(`parseCkData[0].title: ${parseCkData[0].title}`);

// date 키를 찾는다.

// date 키 중에서 해당 날짜에 해당하는 값을 찾는다.
// 배열의 갯수를 구한다.

// date 키중에서 첫번째 값을
