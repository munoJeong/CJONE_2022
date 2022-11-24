// main.js

/* 퀵메뉴 이미지 */
// for문 이용해서 <img>를 quick01_00000.png ~ quick01_00019.png 생성
// <span class="quick01"></span> 안에 넣기

/*
  let quick1 = "";
  for (let i = 0; i < 20; i++) {
    if(i<10){
      quick1 += `<img src="images/quick01/quick01_0000${i}.png" />`;
    }else{
      quick1 += `<img src="images/quick01/quick01_000${i}.png" />`;
    }
  }
  document.querySelector("span.quick1").innerHTML = quick1;

  let quick02 = "";
  let quick03 = "";
  let quick04 = "";
*/
const quickSpan = document.querySelectorAll(".content1>ul>li>a>span");

for (let j = 0; j < quickSpan.length; j++) {// 0, 1, 2, 3
  let images = "";
  for (let i = 0; i < 20; i++) {//각 span 안에 img 20개 생성
    if (i<10) {
      images += `<img src="images/quick0${j+1}/quick0${j+1}_0000${i}.png" />`;
    } else {
      images += `<img src="images/quick0${j+1}/quick0${j+1}_000${i}.png" />`;
    }
  }
  quickSpan[j].innerHTML = images;
}

/* 로그인 이미지 */
let appear = "";
for (let i = 0; i < 57; i++) {
  if (i<10) {
    appear += `<img src="images/appear/appear_0000${i}.png" alt="로그인 버튼" />`;
  } else { 
    appear += `<img src="images/appear/appear_000${i}.png" alt="로그인 버튼" />`;
  }
  document.querySelector("a.appear").innerHTML = appear;  
}

let loop = "";
for (let i = 0; i < 82; i++) {
  if (i<10) {
    loop += `<img src="images/loop/loop_0000${i}.png" alt="로그인 버튼" />`;
  } else {
    loop += `<img src="images/loop/loop_000${i}.png" alt="로그인 버튼" />`;
  }
  document.querySelector("a.loop").innerHTML = loop;
}

/* 로그인 애니메이션 */
/*
  appear ani: ani 2.75s linear 0s 1 normal none running;
  appear 0 ~ 56 이미지 각각에 animation 속성 적용
  animation: ani 2.85s linear 0s 1;
  animation: ani 2.85s linear 0.05s 1;
  animation: ani 2.85s linear 0.10s 1;
*/
/*
  loop ani: ani 4.1s linear 2.85s infinite normal none running;
  loop 0 ~ 56 이미지 각각에 animation 속성 적용
  animation: ani 4.1s linear 2.85s infinite;
  animation: ani 4.1s linear 2.90s infinite;
  animation: ani 4.1s linear 2.95s infinite;
*/
const delay = 0.05;
const appearImgs = document.querySelectorAll(".appear>img");
const loopImgs = document.querySelectorAll(".loop>img");
for (let i = 0; i < appearImgs.length; i++) {
  appearImgs[i].style.animation = `ani 2.85s linear ${i*delay}s 1`;
}
for (let j = 0; j < loopImgs.length; j++) {
  loopImgs[j].style.animation = `ani 4.1s linear ${2.85+(j*delay)}s infinite`;
}

/* 고객센터 */
// toggle()을 하면 title="고객센터 열기"와 title="고객센터 닫기"를 추가해준다
const topMenuDD = document.querySelectorAll("dl.topMenu dd");
topMenuDD[4].addEventListener("click", e => {
  e.preventDefault();
  e.currentTarget.classList.toggle("on");
  if (e.currentTarget.classList.contains("on")) {
    e.currentTarget.children[0].setAttribute("title", "고객센터 닫기");
  } else {
    e.currentTarget.children[0].setAttribute("title", "고객센터 열기");
  }
});

// 주메뉴
const headerWrap = document.querySelector(".header_wrap");
const gnbMenu = document.querySelectorAll(".gnb>ul>li"); // 큰 li
var subMenu = document.querySelectorAll(".gnb>ul>li>ul");

for (let i = 0; i < gnbMenu.length; i++) {
  gnbMenu[i].addEventListener("mouseover", () => {
    // 고객센터에 on이 붙어있으면 고객센터에 on을 지운다
    if (topMenuDD[4].classList.contains("on")) {
      topMenuDD[4].classList.remove("on");
    }
    // 검색박스에 on이 붙어있으면 검색박스의 on을 지운다
    if (srchOpen.classList.contains("on")) {
      srchOpen.classList.remove("on");
      srchBox.classList.remove("on");
    }
    /*
      if (csBtn[4].classList.contains('on') || srchOpen.classList.contains('on')) {
        csBtn[4].classList.remove('on');
        srchOpen.classList.remove('on');
        srchBox.classList.remove('on');
      }
    */

    headerWrap.classList.add("on");
    subMenu.forEach(item => {
      item.classList.add("on");
    });
  }); // mouseover
  gnbMenu[i].addEventListener("mouseout", () => {
    headerWrap.classList.remove("on");
    subMenu.forEach(item => {
      item.classList.remove("on");
    });
  }); // mouseout
}
for (let i = 0; i < gnbMenu.length; i++) {
  gnbMenu[i].children[0].addEventListener("focus", () => {
    headerWrap.classList.add("on");
    subMenu.forEach(item => {
      item.classList.add("on");
    });
  }); // focus
  gnbMenu[i].children[0].addEventListener("blur", () => {
    headerWrap.classList.remove("on");
    subMenu.forEach(item => {
      item.classList.remove("on");
    });
  }); // blur
}

/* 검색열기닫기 */
const srchOpen = document.querySelector(".srch_open");
const srchBox = document.querySelector("form.srch");

srchOpen.addEventListener("click", e => {
  e.currentTarget.classList.toggle("on");
  srchBox.classList.toggle("on");

  if (e.currentTarget.classList.contains("on")) {
    e.currentTarget.children[0].setAttribute("title", "검색입력서식 닫기")
  } else {
    e.currentTarget.children[0].setAttribute("title", "검색입력서식 열기")
    
  }
});

/* 배너 */
const btnNext = document.querySelector(".banner_arrow>.next");
const btnPrev = document.querySelector(".banner_arrow>.prev");
const bnnFrame = document.querySelector(".banner_frame");
const bnnSection = document.querySelectorAll(".banner_frame>section"); // 12개 섹션

const arrowA = document.querySelectorAll(".banner_arrow>a");
const rollingA = document.querySelectorAll(".banner_rolling a");
const bnn_rollA = document.querySelectorAll(".banner_rolling li a");

let bnnW = document.querySelector("body>section").offsetWidth;
window.addEventListener("resize", () => {
  bnnW = document.querySelector("body>section").offsetWidth;
});

let bnnNum = 0;
let lastNum = bnnSection.length-1;

let secWhite = (bannerNumber) => {
  if (bnnSection[bannerNumber].classList.contains("white")) {
    arrowA.forEach(item => {
      item.classList.add("white");
    });
    rollingA.forEach(item => {
      item.classList.add("white");
    });
  } else {
    arrowA.forEach(item => {
      item.classList.remove("white");
    });
    rollingA.forEach(item => {
      item.classList.remove("white");
    });
  }

  bnn_rollA.forEach(item => {
    item.classList.remove("on");
  });
  bnn_rollA[bannerNumber].classList.add("on");
}

secWhite(0);

/*
  next버튼을 눌렀을 때
  배너번호 1 증가
  배너번호가 마지막 배너번호보다 크면 배너번호가 다시 0으로
  배너프레임의 left값 변경해서 배너 움직이게
*/
btnNext.addEventListener("click", e => {
  e.preventDefault();
  bnnNum++;
  if (bnnNum>lastNum) {
    bnnNum = 0;
  }
  /* bnnFrame.style.left = `${-bnnNum*100}%` // 0, -100%, -200%, ..., -1100% */
  bnnFrame.style.left = `${-bnnNum*bnnW}px`;
  secWhite(bnnNum);
});

/*
  prev버튼을 눌렀을 때
  배너번호 1 감소
  배너번호가 첫번째 배너번호보다 작으면 배너번호가 다시 마지막으로
  배너프레임의 left값 변경해서 배너 움직이게
*/
btnPrev.addEventListener("click", e => {
  e.preventDefault();
  bnnNum--;
  if (bnnNum<0) {
    bnnNum = lastNum;
  }
  bnnFrame.style.left = `${-bnnNum*bnnW}px`;
  secWhite(bnnNum);
});

/* 오토배너 작동 - setTimeout 사용, 재귀함수 사용 */
let autoBanner = () => {
  bnnNum++
  if (bnnNum>lastNum) {
    bnnNum = 0;
  }
  bnnFrame.style.left = `${-bnnNum*bnnW}px`;
  secWhite(bnnNum);

  autoBnn = setTimeout(autoBanner, 5000);
};
let autoBnn = setTimeout(autoBanner, 5000);

/* 재생/멈춤 버튼*/
let flag = true;
const btnPlay = document.querySelector("a.btn_play");
btnPlay.addEventListener('click', e => {
  e.preventDefault();
  if (flag) {
    clearTimeout(autoBnn);
    btnPlay.classList.add('pause');
    flag = false;
  } else {
    btnPlay.classList.remove('pause');
    autoBnn = setTimeout(autoBanner, 5000);
    flag = true;
  }
});

/* 롤링버튼 클릭 */
const bnnRollLists = document.querySelectorAll(".banner_rolling>ul>li");

for(let i = 0; i < bnnRollLists.length; i++){
  bnnRollLists[i].addEventListener("click", e => {
    e.preventDefault();
    clearTimeout(autoBnn)
    bnnFrame.style.left = `${-i*bnnW}px`;
    btnPlay.classList.add('pause');
    flag = false;
    secWhite(i);
    bnnNum = i;
  });
}

/*
  마우스 올렸을 때 이미지에 애니메이션 적용
  마우스 뗐을 때 이미지에 애니메이션 삭제
*/
// content1
const content1Li = document.querySelectorAll(".content1 ul li");

/*
  for (let i = 0; i < content1Li.length; i++) {
    content1Li[i].addEventListener("mouseover", e => {
      for (let k = 0; k < 20; k++) {
        let imgLi = e.currentTarget.children[0].children[0].children;
        imgLi[k].style.animation = `ani 1s linear ${delay*k}s 1`;
      }
    });
  }
*/
content1Li.forEach(item => {
  item.addEventListener("mouseover", e => {
    for (let k = 0; k < 20; k++) {
      let imgLi = e.currentTarget.children[0].children[0].children;
      imgLi[k].style.animation = `ani 1s linear ${delay*k}s 1`; 
    }
  });
});

for (let i = 0; i < content1Li.length; i++) {
  content1Li[i].addEventListener("mouseout", e => {
    for (let k = 0; k < 20; k++) {
      let imgLi = e.currentTarget.children[0].children[0].children;
      imgLi[k].style.animation = "none";
    }
  });
}

/* 스크롤 이벤트 */
const btnTop = document.querySelector(".top");


window.addEventListener("scroll", () => {
  let scroll = document.querySelector("html").scrollTop;
  // 도넛
  const doughnut_Left_L = document.querySelector(".doughnut_Left_L");
  const doughnut_Left_S = document.querySelector(".doughnut_Left_S");
  const combine_Left = document.querySelector(".combine_Left");

  combine_Left.style.top = `${scroll*0.7}px`;
  doughnut_Left_S.style.top = `${scroll*0.5}px`;
  doughnut_Left_L.style.top = `${1310-scroll*0.5}px`;

  const doughnut_Center_S = document.querySelector(".doughnut_Center_S");
  const doughnut_Center_M =document.querySelector(".doughnut_Center_M");

  doughnut_Center_S.style.top = "722px";
  doughnut_Center_M.style.top = `${1650-scroll*0.8}px`;

  const doughnut_Right_S = document.querySelector(".doughnut_Right_S");
  const doughnut_Right_M = document.querySelector(".doughnut_Right_M");
  const combine_Right = document.querySelector(".combine_Right");

  combine_Right.style.top = `${scroll * 0.7}px`;
  doughnut_Right_S.style.top = "365px";
  if ((scroll * 0.7) >= 850) {
    doughnut_Right_M.style.top = `${scroll * 0.7}px`;
  }

  // top버튼
  if (scroll <= 0) {
    btnTop.classList.remove("on", "ab");
  } else if (scroll > 0 && scroll < 2400) {
    btnTop.classList.remove("ab");
    btnTop.classList.add("on");
  } else {
    btnTop.classList.add("ab");
  }
});

// top
btnTop.addEventListener("click", e => {
  e.preventDefault();
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
});

/* content3 */
/*
  li 하나하나에 마우스오버하면 모든 li에 .on을 지우고 마우스오버한 li만 .on이 붙어라
  content3의 4(mobile), 5(tablet), 6번째(pc) li는 .left가 븉는다
*/
const all = document.querySelectorAll(".content3_inner>div>ul>li");

let htmlWidth = document.querySelector("html").offsetWidth;
let classLeft = "";
window.addEventListener("resize", () => {
  htmlWidth = document.querySelector("html").offsetWidth;
  if (htmlWidth > 1023) {
    classLeft = 6;
  } else if (htmlWidth > 768) {
    classLeft = 5;
  } else {
    classLeft = 4;
  }
});

all.forEach((item, idx) => {
  item.addEventListener("mouseover", e => {
    e.preventDefault();
    if ((idx + 1) % classLeft !== 0) {
      e.currentTarget.classList.add("on");
    } else {
      e.currentTarget.classList.add("left");
    }
  });
  item.addEventListener("mouseout", e => {
    e.preventDefault();
    if ((idx + 1) % classLeft !== 0) {
      e.currentTarget.classList.remove("on");
    } else {
      e.currentTarget.classList.remove("left");
    }
  });
});

/*
  li 하나하나를 클릭했을 때
  class 속성값을 가져와서 변수에 저장
  변수값이랑 정확하게 일치하는 케이스에서 해당 클래스이름에 해당되는 li만 보이게 설정한다
*/
// 대분류
const group = document.querySelectorAll(".content3_inner>ul>li>a"); // 5개
const ent = document.querySelectorAll(".content3_inner>div>ul>li.ent");
const shop = document.querySelectorAll(".content3_inner>div>ul>li.shop");
const diner = document.querySelectorAll(".content3_inner>div>ul>li.diner");
const box = document.querySelectorAll(".content3_inner>div>ul>li.box");
for (let k = 0; k < group.length; k++) {
  group[k].addEventListener("click", e =>{
    e.preventDefault();
    
    group.forEach(item => {
      item.classList.remove("on");
    });
    e.currentTarget.classList.add("on");

    let className = e.currentTarget.parentElement.getAttribute("class");
    
    all.forEach(item => {
      item.style.display = "none";
    });
    
    switch (className) {
      case "all":
        all.forEach(item => {
          item.style.display = "block";
        });
        break;
      case "ent":
        ent.forEach(item => {
          item.style.display = "block";
        });
        break;
      case "shop":
        shop.forEach(item => {
          item.style.display = "block";
        });
        break;
      case "diner":
        diner.forEach(item => {
          item.style.display = "block";
        });
        break;
      case "box":
        box.forEach(item => {
          item.style.display = "block";
        });
        break;
      default:
        break;
    }
  }); 
}

/* 패밀리 사이트 */
const familySite = document.querySelector("dd.family_site");
familySite.addEventListener("click", e => {
  e.preventDefault();
  e.currentTarget.classList.toggle("on");

  if (e.currentTarget.classList.contains("on")) {
    e.currentTarget.children[0].setAttribute("title", "닫기");
  } else {
    e.currentTarget.children[0].setAttribute("title", "열기");
  }
});

/* 햄버거 버튼 클릭 */
const body = document.querySelector("body");
const bg = document.querySelector("div.bg");

const mobBtn = document.querySelector(".mobBtn");
const mobBtn_close = document.querySelector(".mobBtn_close");
const mob = document.querySelector(".mob");

mobBtn.addEventListener("click", e =>{
  e.preventDefault();
  body.classList.add("on");
  bg.classList.add("on");
  mob.classList.add("on");
  mobBtn_close.classList.add("on");
});

mobBtn_close.addEventListener("click", e =>{
  e.preventDefault();
  body.classList.remove("on");
  bg.classList.remove("on");
  mob.classList.remove("on");
  mobBtn_close.classList.remove("on");
});

/* mobile list 토글 */
const mobDD = document.querySelector(".mob>.mob_topMenu>dd.bggray");
const mobLists = document.querySelectorAll(".mob>.mob_gnb>ul>li.bggray");

mobDD.addEventListener("click", e => {
  e.currentTarget.classList.toggle("on");
});
for (let i = 0; i < mobLists.length; i++) {
  mobLists[i].addEventListener("click", e => {
    e.currentTarget.classList.toggle("on");
  });
}