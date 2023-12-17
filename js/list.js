"use strict"

import { test1 as _} from './control.js';

_.ttest1();
_.ttest2();


// 일기장 클릭 횟수 로컬스토리지에 저장

// 초기화
function getData() {
	// 캘린더에서 클릭한 url값을 가져옴
	const url = new URL(window.location.href);
	// 쿼리스트링 값을 얻기 위해 searchParams 부여
	const queryString = url.searchParams;
	// 해당하는 날짜를 가져오기 - [메인페이지]에서 캘린더 클릭 시 해당 날짜 값 받아오기
	const getDate = queryString.get('date'); 
	const inquire = localStorage.getItem(getDate);
	const listPage = document.getElementById('aaron');

	let diary; // 데이터를 담을 공간 생성
	
	// 해당 날짜에 일기장 데이터 존재유무 확인
	if (listPage && inquire === null) {
		diary = new Array;
		saveLocalStorage(getDate, diary);
	} else {
		inquire;
	}

	// 작성일, 일기장, 현재 로컬스토리지 상태(조회), 리스트페이지를 내보내기
	return { getDate, diary, inquire }
}

// 초기화 함수에서 내보낸 데이터 전역변수 선언
const $date = getData().getDate,
			$diary = getData().diary,
			$inquire = getData().inquire;

/* ------------------------------------------------------------------------------------------------------------------------------- */

// 리스트 모듈패턴(수정 삭제 및 리스트 그리드)
const list = {
	// 1. 게시물 추가 및 삭제
	modify() {
		const modify = [
			// {
			// 	id: 3,
			// 	date: $date,
			// 	weather: "cloud",
			// 	title: '화난 강아지1',
			// 	img: '../images/angry_puppy.png',
			// 	text: '화난',
			// },
			// {
			// 	id: 10,
			// 	date: $date,
			// 	weather: "sun",
			// 	title: '정색 강아지1',
			// 	img: '../images/just_dog.jpeg',
			// 	text: '웃어?',
			// },
			// {
			// 	id: 8,
			// 	date: $date,
			// 	weather: "halfcloud",
			// 	title: '웃는 강아지1',
			// 	img: '../images/smile_dog.jpg',
			// 	text: '웃겨',
			// },
			// {
			// 	id: 6,
			// 	date: $date,
			// 	weather: "snow",
			// 	title: '정색 강아지2',
			// 	img: '../images/just_puppy.jpg',
			// 	text: '머지',
			// },
			// {
			// 	id: 7,
			// 	date: $date,
			// 	weather: "sun",
			// 	title: '대한민국의 발라드(Ballad) 가수. ‘안산 이해리’라고 불렸으며, 前Mondaykiz Company 소속이었다.',
			// 	img: '../images/chagaul.jpg',
			// 	text: '노래잘함',
			// }
		]

		const remove = [  ]; // 배열안에 삭제할 id값을 삽입
		
		if (modify.length || remove.length) {
			// 추가, 삭제된 내용을 로컬스토리지에 저장
			saveLocalStorage($date, $diary, modify, remove);
		}
	},

/* ------------------------------------------------------------------------------------------------------------------------------- */
	
	// 2. json파일의 데이터를 조회, 스프레드
	grid() {
		const listData = JSON.parse($inquire);
		const grid = document.querySelector('.grid');
		
		spread(grid, listData);
		
		// 데이터 그리드 생성 함수
		function spread(frame, items) {
			for (const element of items) {
				let item = document.createElement('li');
				item.setAttribute('class', 'grid_item');
				item.innerHTML = `
					<a href="./detail.html?date=${$date}&id=${element.id}" title="${element.title} 일기장 보기" class="grid_link">
						<p class="grid_title">${element.title}</p>
						<img class="grid_img" src="${element.img}" alt="${element.title}" />
					</a>
				`;
				frame.appendChild(item);
			}
		}
		
		
	},
	
/* ------------------------------------------------------------------------------------------------------------------------------- */

	// 3. 클릭 횟수 조회
	count() {
		const items = document.querySelector('.grid_item');
		
		items.addEventListener('click', function() {
		
		})
	},

/* ------------------------------------------------------------------------------------------------------------------------------- */

	// 4. 30개 단위로 데이터 추가 조회(무한스크롤)
	scroll() {

	},

/* ------------------------------------------------------------------------------------------------------------------------------- */

	init() {
		this.modify();
		this.grid();
		this.count();
		this.scroll();
	}
}

/* ------------------------------------------------------------------------------------------------------------------------------- */

// 로컬스토리지 함수
function saveLocalStorage(date, diary, add, del) {
	// 로컬스토리지에 있는 해당 일자의 일기장 리스트를 불러오기
	const diaryItems = JSON.parse(localStorage.getItem(date));
	
	if (add) { // 추가
		diary = diaryItems.push(...add); // 불러온 날짜에 새로운 데이터 추가
	}

	if (del) { // 삭제
		diary = diaryItems.filter(obj => !del.includes(obj.id)); // 기존 리스트에서 삭제 리스트 안에 있는 id값을 대조하여 해당부분 삭제
	}

	// 추가, 삭제 수행 후 
	// id기준 중복 제거, 정렬한 최종 리스트 반환 
	const result = diary.reduce((acc, currentItem) => {
		// 이미 acc 배열에 해당 id가 있는지 확인
		const isIdExists = acc.some(item => item.id === currentItem.id);
	
		// 해당 id가 없다면 acc 배열에 추가
		if (!isIdExists) {
		acc.push(currentItem);
		}
		// 새로 재정리 후 만들어진 acc배열을 result변수에 반환
		return acc;
	}, [])
	// 오름차순 정렬
	.sort(function(a, b){
		return a.id - b.id
	});

	// 데이터를 스토리지에 담기 위해 문자열 변환
	diary = JSON.stringify(result);

	// 변환한 배열 문자열을 작성일을 key로 둔 데이터로 가공하여 로컬스토리지에 저장
	localStorage.setItem(date, diary);
}


list.init();
