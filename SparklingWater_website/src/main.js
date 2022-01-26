"use strict";
// Nav bar
// 스크롤바를 내리면 바 색갈이 바뀍고 폰트 색이 바뀐다. 



  $(window).on('scroll', function(){

    if ( $(window).scrollTop() > 100 ){
        $('.logo').addClass('logo-top-size');
        $('.nav-bar').addClass('nav-white');
        $('.nav-btn').addClass('nav-btn-white');
        $('.nav-list-group').addClass('nav-list-group-scroll');

      } else {
        $('.logo').removeClass('logo-top-size');
        $('.nav-bar').removeClass('nav-white');
        $('.nav-btn').removeClass('nav-btn-white');
        $('.nav-list-group').removeClass('nav-list-group-scroll');
      }
    });
  


    
  // nav list-group  

  $('.nav-btn').click(function(){
    $('.nav-list-group').slideToggle();
  });
  
    // if문 안하고 jqeury로 했을 때 .slideToggle()  /  > < >= <= ==(1 == '1') ===(엄격 1 === '1' false)




      // if ( document.body.scrollTop > 200){
      //   Navbar.style.backgroundcolor = 'white'
      //   Navbar.style.color = 'blue'
      // };


 // Typerwriting


 
 // const TypoTag = document.querySelector('titleMotion');
  const TypoTag = document.getElementsByClassName('titleMotion')[0];
  const Typo = document.getElementsByClassName('titleMotion')[0].innerHTML;
  
  TypoAnimation(TypoTag, Typo);
  //   // //h1을 빈칸으로 만들어줘 

  function TypoAnimation(TypoTag, Typo){
    TypoTag.innerHTML = '';

    for ( let i = 0; i < Typo.length; i++){
      setTimeout(() => {
        TypoTag.innerHTML = TypoTag.innerHTML + Typo[i]
      }, 130 * i)
    };
  }


//  $('.btntypo').click(function(){

//   TypoTag.innerHTML = '';
  
//   for ( let i = 0; i < Typo.length; i++){
//     setTimeout(() => {
//       TypoTag.innerHTML = TypoTag.innerHTML + Typo[i]
//     }, 90 * i);
//   }

//   Typo = '';
//    //0.5 초 후에 태그안에 H를 더해줘 
//   setTimeout(() => {
//     TypoTag.innerHTML = TypoTag.innerHTML + Typo[0]
//   }, 500);

//   Typo = '';
//   //0.5 초 후에 태그안에 H를 더해줘 
//  setTimeout(() => {
//    TypoTag.innerHTML = TypoTag.innerHTML + Typo[1]
//  }, 1000);

//  Typo = '';
//  //0.5 초 후에 태그안에 H를 더해줘 
// setTimeout(() => {
//   TypoTag.innerHTML = TypoTag.innerHTML + Typo[2]
// }, 1500);



 





  // Sign In 
  let SignInBtn = document.getElementById('btn');
  let SignIn = document.getElementById('black-bg'); 
  let SlideDown = document.getElementsByClassName('slide-down')[0];
  let SignInCancleBtn = document.getElementsByClassName('close-btn')[0];
  let SignInWindow = document.getElementsByClassName('white-bg')[0]

  // Sign In Animation
  SignInBtn.addEventListener('click', function(){
      // SignIn.classList.add('slide-down');
      SlideDown.style.transform ='translateY(-400px)';
       
  });

  // 모달창이 이벤트버블링으로 인해 로그인창을 클릭해도 닫아지는 버그가 나온다.
  // 이벤트 버블링을 방지하는 코드를 짜자 
  // e.target; // 지금 실제로 클릭한 요소
  // e.currentTarget; // 지금 이벤트리스너가 달린 곳
  // this;
  // e.preventDefault(); // 기본동작 막기
  // 주의 : 자스와 제이쿼리를 동시에 쓰면 안됨, ex ) e.target == $(this) >> false 
  // e.target == this >> true
  SignIn.addEventListener('click', function(e){
     // 만약에, 지금 실제로 클릭한게 검은배경일 때만 모달창을 닫아주세요.
     if( e.target == e.currentTarget){
        SignIn.style.display = 'none';
        }
     })
    // Jquery // .hide() .show() .fadein() .fadeOut() .slideDown() .slideUp()
    // $('#btn').on('click', function(){
    // @('.black-bg').show();
    // });
  
    SignInCancleBtn.addEventListener('click', function(){
       SignIn.style.display = 'none';
    })





  // if 조건문 : 특정 조건이 맞을 때만 코드를 실행하고 싶다. 
      // if (1 > 3){
      //     console.log('안녕')
      // } else {
      //     console.log('반가워')
      // };


  // //if문 숙제 
  // document.getElementById('btn').addEventListener('click', function(){
  // // 만약 input에 입력된 값이 '안녕' 일 때만 로그인 창을 띄운다.
  // if (document.getElementById('test-input').value == '안녕'){
  // document.getElementById('black-bg').style.display = 'block';
  // }
  // });

  
  // amd $$ 왼쪽 오른쪽이 전부 참이면 전체가 참
  // or  || 왼, 오중에 적어도 하나가 참이면 전체가 참

        // if ( 2== 2 && 2 == 3){
        //     console.log('ht')  
        // };

  // Email input noticed 
 
  let form = document.getElementById('form');
  
  let pw = document.getElementById('pw');
  
 
  
  
  // 만약 이메일칸이 공백이면 공백알림을 보내고 있는데 이메일 형식이 아니라면 형식알림을 보내준다. 
  
  form.addEventListener('submit', function(e){

      // Email alert
      let emailVal = document.getElementById('email').value;
      let emailAlertEnter = document.getElementsByClassName('email-alert-enter')[0];
      let emailAlertInvaild = document.getElementsByClassName('email-alert-invaild')[0];

      if (emailVal == '') {
          e.preventDefault();
          emailAlertEnter.style.display = 'block'; 
      } else if(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(emailVal) == false){
          e.preventDefault();
          emailAlertInvaild.style.display = 'block'; 
          emailAlertEnter.style.display = 'none';  
      } else {
          emailAlertEnter.style.display = 'none'; 
          emailAlertInvaild.style.display = 'none'; 
      }
      // PW alert
      let pwVal = document.getElementById('pw').value;
      let pwAlertEnter = document.getElementsByClassName('pw-alert-enter')[0];
      let pwAlertInvaild = document.getElementsByClassName('pw-alert-invaild')[0];
      
      if (pwVal == '') {
          e.preventDefault();
          pwAlertEnter.style.display = 'block'; 
      } else if (/[A-Z]+/.test(pwVal) == false){
          e.preventDefault();
          pwAlertInvaild.style.display = 'block'; 
          pwAlertEnter.style.display = 'none'; 
          
      } else {
          form.submit();
      }
      });




  // Image Slide //
  
  let SlideContainer = document.getElementsByClassName('slideContainer')[0];

  // Slide btn bottom 
  let SlideBtn1 = document.getElementsByClassName('slide-1')[0];
  let SlideBtn2 = document.getElementsByClassName('slide-2')[0];
  let SlideBtn3 = document.getElementsByClassName('slide-3')[0];


  // Slide function

  SlideBtn1.addEventListener('click', function(){
      SlideContainer.style.transform = 'translateX(0vw)';
  });

  SlideBtn2.addEventListener('click', function(){
      SlideContainer.style.transform = 'translateX(-100vw)';
  });

  SlideBtn3.addEventListener('click', function(){
      SlideContainer.style.transform = 'translateX(-200vw)';
  });


  // Slide function center
  let SlidebtnLeft = document.getElementsByClassName('slideNext-L')[0];
  let SlidebtnRight = document.getElementsByClassName('slideNext-R')[0];

  let nowImg = 1;

  // Slide Btn Right
  SlidebtnRight.addEventListener('click', function(){   
      // 자스로는 왜 안되지?
      // SlideContainer.style.trnasform = 'translateX(-' + nowImg + '00vw)';
      // nowImg = nowImg + 1;
      if ( nowImg < 3 ) {
      $('.slideContainer').css('transform', 'translateX(-' + nowImg + '00vw)');
      nowImg = nowImg + 1;
      }
  });

  SlidebtnLeft.addEventListener('click', function(){
      if ( nowImg > 1) {
          $('.slideContainer').css('transform', 'translateX(-' + (nowImg - 2) +  '00vw)');
          nowImg = nowImg - 1;
      }
  });


  // Tab List 


    // 탭을 누르면 탬 내용이 보이고 다른거는 안보인다. 

    // 2번 탭을 누르면 탭 show가 add 되고, 내용2 show 클래스가 추가된다. 
    // 3번 탭을 누르면 3번 탭 show가 추가되고 내용 3 show 도 추가된다. 

    // $('.tabBtn').eq(0) == document.getElementsByClassName('tabBtn')[0];


    // $('.tabBtn').eq(0).click(function(){
    //   $('.tabBtn').removeClass('active');
    //   $('.tabContent').removeClass('show');
    //   $('.tabBtn').eq(0).addClass('active');
    //   $('.tabContent').eq(0).addClass('show');
    // });   


    //   for (let i = 0; i < 3; i++){
    //     console.log('안녕')
    //  }

  // 힘수로 for문을 축약할 수 있다. 이 때 주의 할 점은 변수를 파라미터 등으로 정의해줘야 한다. (number..) 

    function tabOpen(num){
        $('.tabBtn').removeClass('active');
        $('.tabContent').removeClass('show');
        $('.tabBtn').eq(num).addClass('active');
      $('.tabContent').eq(num).addClass('show');
    }

    // for (let i = 0; i < $('.tabBtn').length; i++){
    //   $('.tabBtn').eq(i).click(function(){
    //    TabOpen(i) >> 축약된 함수 
    //   });
    // }
  
  // 탭기능을 반복문이 아닌 이벤트버블링을 이용해서 만들어보자. 
  // 이벤트 버블링 속성을 이용해 코드를 단축하고 램을 덜 잡아먹게 하자. 
  // e.target; // 지금 실제로 클릭한 요소
  // e.currentTarget; // 지금 이벤트리스너가 달린 곳
  // this;


  let tabList = document.getElementsByClassName('tabLists')[0];

  tabList.addEventListener('click', function(e){
    // if 문일 때 이렇게 쓸 수 있지만, 코드가 100개가 되면 길어진다. 
    //  if(e.target == documnet.querySelctorAll('.tabLists')[0]){
    //    tabOpen(0)
    //   }
    // html에 data-작명='값' 을 써서 데이터를 심어준다. data-id="0" 
    // 자바스크립트로 찾아준다.
    tabOpen(e.target.dataset.id)
  })

      // jQuery 문법으로 HTML 에 몰래 문법 저장하는 법 
      //$('.tabLists').data('작명', '값'); 
      //$('.tabLists').data('작명'); 



// Card section

    const cardBox = document.getElementsByClassName('cardBox')[0];

  $(window).scroll(function(){

    let 높이 = $(window).scrollTop();
    console.log(높이);

    // let y = (-1/440) * 높이 + 156/44; 
    // // y = ax+ b;
    // // 1 = a * 1560 + b;
    // // 0 = a * 2000 + b;
    // // a = -1/440;
    // // b = 156/44;
    // // y = (-1/440) * 높이 + 156/44;
    // cardBox.style.opacity = ("0", y);

    
  })

 // 1560 2000 까지 스크롤바를 내리면, 첫재카드의 투명도를 1~0으로 서서히 변경해줘