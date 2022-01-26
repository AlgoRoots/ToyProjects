"use strict";
// Nav bar
// 스크롤바를 내리면 바 색갈이 바뀍고 폰트 색이 바뀐다. 



  $(window).on('scroll', function(){

    if ( $(window).scrollTop() > 100 ){
        $('.logo-PD').addClass('logo-top-size-PD');
        $('.nav-bar-PD').addClass('nav-white-PD');
        $('.nav-btn-PD').addClass('nav-btn-white-PD');
        $('.nav-list-group-PD').addClass('nav-list-group-scroll');

      } else {
        $('.logo-PD').removeClass('logo-top-size-PD');
        $('.nav-bar-PD').removeClass('nav-white-PD');
        $('.nav-btn-PD').removeClass('nav-btn-white-PD');
        $('.nav-list-group-PD').removeClass('nav-list-group-scroll-PD');
      }
    });
  


    
  // nav list-group  

  $('.nav-btn-PD').click(function(){
    $('.nav-list-group-PD').slideToggle();
  });
  


// sort filter btn click colr change

let sortBtn = document.getElementsByClassName('sortBtn');

    function handleClick(event) {
        // console.log(event.target);
        console.log(event.target.classList);

        if(event.target.classList[0] === 'sortBtn-click') {
            event.target.classList.remove('sortBtn-click');
        } else {
            for ( let i =0; i < sortBtn.length; i++){
                sortBtn[i].classList.remove('sortBtn-click');
            }

            event.target.classList.add('sortBtn-click');
            }
        }
    
    function init(){
        for (let i = 0; i < sortBtn.length; i++){
            sortBtn[i].addEventListener('click', handleClick);
        }
    }
    init();




//   for (let i = 0; i < sortBtn.length; i++){
//       if ($('sortBtn').eq(i) == 'click'){
//         $('.sortBtn').eq(i).addClass('sortBtn-click');
//       } else 
//       $('.sortBtn').eq(i).removeClass('sortBtn-click');
//   }
    



// Product lists - 데이터바인딩으로 값 집어넣기


let products = [
    {
        id: 0,
        price: 45,
        title: 'aZoik plus Sparkling Water'
    },

    {
        id: 1,
        price: 15,
        title: 'sZoik Sparkling Water'
    },

    {
        id: 2,
        price: 30,
        title: 'cZoik Lignt Sparkling Water'
    },

    {
      id: 3,
      price: 10,
      title: 'dZoik Lignt Sparkling Water'
  },

  {
      id: 4,
      price: 35,
      title: 'fZoik Lignt Sparkling Water'
  }

  ];



  let ProductTitle = document.getElementsByClassName('product-title');
  let ProductSpan = document.getElementsByClassName('PDSpan');

  // ProductTitle[0].innerHTML = products[0].title;
  // // $('.title').eq(0).html(product[0].title);
  // ProductSpan[0].textContent = ('Price: ' + products[0].price);

  
  const sortBy = document.getElementsByClassName('container')[0];
  const sortByBtnPriceLow = document.getElementsByClassName('sortBy-PriceLow')[0];
  const sortByBtnPricehigh = document.getElementsByClassName('sortBy-PriceHigh')[0];
  const sortByBtnAZ = document.getElementsByClassName('sortBy-AZ')[0];
  const sortByBtnZA = document.getElementsByClassName('sortBy-ZA')[0];
  const ProductsGroup = document.getElementsByClassName('products-group')[0];

  const filterByALL = document.getElementsByClassName('filterby_price_all')[0];
  const filterByBtnUpto20 = document.getElementsByClassName('filterby_price_under20')[0];
  const filterByBtn20to40 = document.getElementsByClassName('filterby_price_20to40')[0];
  const filterByBtnOver40 = document.getElementsByClassName('filterby_price_over40')[0];
  



  // // for문으로 자스에있는 상품값 대입하기
  //  for (let i = 0; i < products.length; i++){
  //     document.querySelectorAll('product-title')[i].textContent = products[i].title;
  //     document.querySelectorAll('PDSpan')[i].textContent  = ('Price: $' + products[i].price);
  //  }






  // forEach로 어떻게 하지? 
  // products.forEach( i => {
    
  // });


  // solt by 기능 만들기 

    // let 어레이 = [7, 3, 5, 2, 40];
    // let 어레이 = ['a', 'b', 'c'];
    // 어레이.sort(); // > 이것은 문자정렬임 // [2, 3, 40, 5, 7] 로 정렬된다. 
    // 아래의 문법이 오름차순으로 숫자정렬됨 
    // 어레이.sort(function(a,b){
      // return a - b 
    // })
    // sort 함수의 - 리턴값이 양수면 b를 왼쪽으로, a를 오른쪽으로 보낸다. 
    // 내림차순 return b - a 음수가 나오면 b를 오른쪽으로 보낸다. 
    // abc 순이 기본임 > 어레이.sort();
    // cba 순은 ?  > 어레이.reverse();


  // 사이트 처음 접속시에 상품 개수만큼 띄워주기
      
  products.forEach(function(a){
      let template = `
      <div class="products">
          <img src="https://via.placeholder.com/600">
          <div class="products-body">
              <h5 class="product-title">${a.title}</h5>
              <p> <span class="PDSpan">Price: $ ${a.price}</span> </p>
              <button class="product-btn btn-danger">Order</button>
          </div>
      </div>
      `;
      ProductsGroup.insertAdjacentHTML("beforeend", template);
  })



      


  // Filter by Price

  // 버튼을 누르면 products에서 %20이하 상품만 나오도록 만들자. 

  
// function template
  function template2() {
    `
    <div class="products">
        <img src="https://via.placeholder.com/600">
        <div class="products-body">
            <h5 class="product-title">${a.title}</h5>
            <p> <span class="PDSpan">Price: $ ${a.price}</span> </p>
            <button class="product-btn btn-danger">Order</button>
        </div>
    </div>
    `
  };



  // ALL 

  filterByALL.addEventListener('click', function(){
      ProductsGroup.innerHTML = '';
      const NEWProducts = products.filter(a => a.price);
      
      NEWProducts.forEach(a => { 
      let template = `
          <div class="products">
              <img src="https://via.placeholder.com/600">
              <div class="products-body">
                  <h5 class="product-title">${a.title}</h5>
                  <p> <span class="PDSpan">Price: $ ${a.price}</span> </p>
                  <button class="product-btn btn-danger">Order</button>
              </div>
          </div>
          `;
          ProductsGroup.insertAdjacentHTML("beforeend", template);
        //$('#products-group').append(template(el));
      })
  })







  // less than 20 products - Javascripts

  filterByBtnUpto20.addEventListener('click', function(){
      ProductsGroup.innerHTML = '';
      const NEWProducts = products.filter(function(a){
          return a.price <= 20
      })

      NEWProducts.forEach(function(a){
        //   let template = `
        //   <div class="products">
        //       <img src="https://via.placeholder.com/600">
        //       <div class="products-body">
        //           <h5 class="product-title">${a.title}</h5>
        //           <p> <span class="PDSpan">Price: $ ${a.price}</span> </p>
        //           <button class="product-btn btn-danger">Order</button>
        //       </div>
        //   </div>
        //   `;
          ProductsGroup.insertAdjacentHTML("beforeend", template2());
          // $('#products-group').append(template());
      })
      // // sizeSelect.style.display = 'block';
  })


  // 20 to 40 - jQuery
  $('#price_20to40').click(function(){
      ProductsGroup.innerHTML = '';

      const NEWProducts = products.filter(a => 20 < a.price && a.price< 40);
      console.log(NEWProducts);

      NEWProducts.forEach(function(a){
          let template = `
          <div class="products">
              <img src="https://via.placeholder.com/600">
              <div class="products-body">
                  <h5 class="product-title">${a.title}</h5>
                  <p> <span class="PDSpan">Price: $ ${a.price}</span> </p>
                  <button class="product-btn btn-danger">Order</button>
              </div>
          </div>
          `;
          ProductsGroup.insertAdjacentHTML("beforeend", template);
      })
  })

  // over 40 - jQuery
  $('#price_over40').click(function(){
      ProductsGroup.innerHTML = '';

      const NEWProducts = products.filter(function(a){
          return 40 < a.price 
      });

     
      NEWProducts.forEach(function(a){
          let template = `
          <div class="products">
              <img src="https://via.placeholder.com/600">
              <div class="products-body">
                  <h5 class="product-title">${a.title}</h5>
                  <p> <span class="PDSpan">Price: $ ${a.price}</span> </p>
                  <button class="product-btn btn-danger">Order</button>
              </div>
          </div>
          `;
          ProductsGroup.insertAdjacentHTML("beforeend", template);
      })
  })

  // array 자료에 필터를 주고 싶을 때 : filter() 신문법  >> 얼마이하만 필터하고싶을 때 
      // const 어레이 = [ 7,3,5,2,40]
      // const NEW어레이 = 어레이.filter(function(a){
      //  return a < 4 : 조건식입력할 수 있음  4보단 작은 값만 출력해주세요. 
      // })
      // NEW로 새로 변수지정해줘야됨 filter()는 신문법이고, sort()와 다르게 기존 array 자료를 변형하지 않는다.

  // map() > 쇼핑몰 가격을 모두 달러로 변경하고 싶을 때
  // 어레이.map(function(a)){ 
  //   return a * 2 : array 요소들에 전부 뭐 해주고 싶을 때 쓴다. 요소들에 2씩 곱해짐
  //}


  // 가나다순정렬버튼 



  // Price 
  sortByBtnPriceLow.addEventListener('click', function(){
      
      products.sort(function(a,b){
      return a.price - b.price
      })
      
      
      // 함수만 정렬하는게 아닌, 데이터바인딩 과정을 해야 상품이 가격순으로 정렬된다. 
      for (let i = 0; i < 5; i++){
        // let ProductTitle = document.getElementsByClassName('product-title')[i];
        // let ProductSpan = document.getElementsByClassName('PDSpan')[i];

          ProductTitle[i].innerHTML = products[i].title;
          ProductSpan[i].textContent = ('Price: $ ' + products[i].price);
        }
  })

  sortByBtnPricehigh .addEventListener('click', function(){
      products.sort(function(a,b){
          return b.price - a.price
      })

      for (let i = 0; i < 5; i++){
        ProductTitle[i].innerHTML = products[i].title;
        ProductSpan[i].textContent = ('Price: $ ' + products[i].price);
      }
  })

  // A to Z
  sortByBtnAZ.addEventListener('click', function(){
      
      products.sort(function(a,b){
          if( a.title < b.title == true){
          return -1
          } else {
              return 1
          }
      })

      for (let i = 0; i < 5; i++){
          ProductTitle[i].innerHTML = products[i].title;
          ProductSpan[i].textContent = ('Price: $ ' + products[i].price);
        }
  })

  // Z to A
  sortByBtnZA.addEventListener('click', function(){
      
      products.sort(function(a,b){
          if( a.title < b.title == false){
          return -1
          } else {
              return 1
          }
      })

      for (let i = 0; i < 5; i++){
          ProductTitle[i].innerHTML = products[i].title;
          ProductSpan[i].textContent = ('Price: $ ' + products[i].price);
        }
      // forEach 로 어떻게해?
      // products.forEach((i) => {
      //     ProductTitle[i].innerHTML = products[i].title;
      //     ProductSpan[i].textContent = ('Price: $ ' + products[i].price);
      // })
  })
