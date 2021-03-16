import '../scss/style.scss';

/*swiper*/
const slider1 = document.querySelector('.swiper-container--1');
const slider2 = document.querySelector('.swiper-container--2');
const slider3 = document.querySelector('.swiper-container--3');

let mySwiper;
let mySwiper2;
let mySwiper3;

function mobileSlider1() {
  if (window.innerWidth < 320 && slider1.dataset.mobile == 'false') {
    mySwiper = new Swiper(slider1, {

      slidesPerView: 1.4,
      spaceBetween: 10,

      pagination: {
        el: '.pag--1'
      },
      mousewheel: true,
      keyboard: true,
    });
    slider1.dataset.mobile = 'true';
  }
  if (window.innerWidth <= 320) {
    slider1.dataset.mobile = 'false';
    if (slider1.classList.contains('sweper-container-initialized')) {
      mySwiper.destroy();
    }
  }
}
mobileSlider1();
window.addEventListener('resize', () => {
  mobileSlider1();
});

function mobileSlider2() {
  if (window.innerWidth <= 320 && slider2.dataset.mobile == 'false') {
    mySwiper2 = new Swiper(slider2, {

      slidesPerView: 1.4,
      spaceBetween: 10,

      pagination: {
        el: '.pag--2'
      },
      mousewheel: true,
      keyboard: true,
    });
    slider2.dataset.mobile = 'true';
  }
  if (window.innerWidth > 320) {
    slider2.dataset.mobile = 'false';
    if (slider2.classList.contains('sweper-container-initialized')) {
      mySwiper.destroy();
    }
  }
}
mobileSlider2();
window.addEventListener('resize', () => {
  mobileSlider2();
});

function mobileSlider3() {
  if (window.innerWidth <= 320 && slider3.dataset.mobile == 'false') {
    mySwiper3 = new Swiper(slider3, {

      slidesPerView: 1.4,
      spaceBetween: 5,

      pagination: {
        el: '.pag--3'
      },
      mousewheel: true,
      keyboard: true,
    });
    slider3.dataset.mobile = 'true';
  }
  if (window.innerWidth > 320) {
    slider3.dataset.mobile = 'false';
    if (slider3.classList.contains('sweper-container-initialized')) {
      mySwiper.destroy();
    }
  }
}
mobileSlider3();
window.addEventListener('resize', () => {
  mobileSlider3();
});
/*******************всплывающие окна */
///////////////////////mv-1

const menu = document.querySelector("#mw-1");
const openMenu = document.querySelector('#burger');


openMenu.addEventListener('click', function (evt) {
  evt.preventDefault();
  menu.classList.toggle('window-close');


});
document.querySelectorAll('.close').forEach(
  item => item.addEventListener('click', function () {

    menu.classList.toggle('window-close');
    
  })

);

//       evt.preventDefault();
//       console.log("hallo");
//         if (event.target.className != 'tm' ) {
//           menu.classList.toggle('window-close');
//         }
//     });
  

// document.click( function(e){
//   if (e.target.closest.tm.length)  {
//       // клик внутри элемента 
//       return;
//   }
//   // клик снаружи элемента 
//   tm.fadeOut();
// });
    // код для закрытия меню, например el..add('hidden')
//////////////////mw-2
const call = document.querySelector("#mw-2");

const closeCall = document.querySelector("#closeCall");

document.querySelectorAll('.toCall').forEach(
  item => item.addEventListener('click', function () {

    call.classList.toggle('window-close');
  })
);
closeCall.addEventListener('click', function (evt) {

  evt.preventDefault();
  call.classList.toggle("window-close");
  menu.classList.toggle('window-close');
});
//////////////////mw-3
const feedback = document.querySelector('#mw-3');

const closeChat = document.querySelector('#closeChat');

document.querySelectorAll('.toChat').forEach(
  item => item.addEventListener('click', function () {

    feedback.classList.toggle('window-close');
  })
);
closeChat.addEventListener('click', function (evt) {
  // close.addEventListener('click', function(evt) {
  evt.preventDefault();
  feedback.classList.toggle("window-close");
  menu.classList.toggle('window-close');
});


/*******************кнопки скрытия блоков */

///first slider

document.addEventListener("DOMContentLoaded", function (event) {
  const button = document.querySelector('#btn');
  const container1=document.querySelector('#container-1');     
  const text = container1.querySelector('.slider__button--text');
const expand = container1.querySelector('.slider__button--expand');
const SliderContainer1 = document.querySelector(".swiper-container--1");
const elements = SliderContainer1.querySelectorAll('.swiper-slide');


 
// const button2 = document.querySelector('#btn-2');
  // const container2=document.querySelector("#container-2");
  // const text2 = container2.querySelector('.slider__button--text');
  // const expand2 = container2.querySelector('.slider__button--expand');
  // const SliderContainer2 = document.querySelectorAll('.swiper-container--2');
  // const elements2 = SliderContainer2.querySelectorAll('.swiper-slide');
  
  // document.querySelectorAll('.click1').forEach(
  //       item => item.addEventListener('click', function () {
         
        
      // call.classList.toggle('window-close');
  //   })
  // );
  button.addEventListener('click', function () {
   if (window.innerWidth >= 768 && window.innerWidth < 1366) {
//  alert( text.textContent );
// console.log(text.textContent)
      if (text.textContent == 'Показать все') {
        text.textContent = 'Скрыть';
        expand.style.transform = 'rotate(180deg)';

        elements.forEach(element =>{
          element.classList.remove("hidden_768");
        });

      } 
      else {
        text.textContent = 'Показать все';
        expand.style.transform = 'rotate(0deg)';
        for (var i = 6; elements.length > 0; i++) {
          const element = elements[i];
          element.classList.add('hidden_768');

        }
        return false;
      }
    

      // if (text2.textContent == 'Показать все') {
      //   text2.innerHTML = 'Скрыть';
      //   expand2.style.transform = 'rotate(180deg)';

      //   elements2.forEach(element =>{
      //     element.classList.remove("hidden_768");
      //   });

      // } 
      // else {
      //   text2.innerHTML = 'Показать все';
      //   expand2.style.transform = 'rotate(0deg)';
      //   for (var r = 6; elements2.length > 0; r++) {
      //     const element = elements2[r];
      //     element.classList.add('hidden_768');

      //   }
      //   return false;
      // }
    }
    if (window.innerWidth >= 1366) {
      if (text.textContent == 'Показать все') {
        text.textContent = 'Скрыть';
        expand.style.transform = 'rotate(180deg)';

        elements.forEach(element => {
          element.classList.remove("hidden_1366");
        });
      } 
      else {
        text.textContent = 'Показать все';
        expand.style.transform = 'rotate(0deg)';
        for (var c = 8; elements.length > 0; c++) {
          const element = elements[c];
          element.classList.add('hidden_1366');
        }

        return false;
      }
    }

   }
  // )
  );
});

///second slider

document.addEventListener("DOMContentLoaded", function (event) {
//   const button = document.querySelector('#btn');
//   const container1=document.querySelector('#container-1');
          
         
//   const text = container1.querySelector('.slider__button--text');

// const expand = container1.querySelector('.slider__button--expand');
// const SliderContainer1 = document.querySelector(".swiper-container--1");
// const elements = SliderContainer1.querySelectorAll('.swiper-slide');


 
const button2 = document.querySelector('#btn-2');
  const container2=document.querySelector("#container-2");
  const text2 = container2.querySelector('.slider__button--text');
  const expand2 = container2.querySelector('.slider__button--expand');
  const SliderContainer2 = document.querySelector('.swiper-container--2');
  const elements = SliderContainer2.querySelectorAll('.swiper-slide');
  
  // document.querySelectorAll('.click1').forEach(
  //       item => item.addEventListener('click', function () {
         
        
      // call.classList.toggle('window-close');
  //   })
  // );
  button2.addEventListener('click', function () {
   if (window.innerWidth >= 768 && window.innerWidth < 1366) {
//  alert( text2.textContent );
// console.log(text2.textContent);
      // if (text.textContent == 'Показать все') {
      //   text.textContent = 'Скрыть';
      //   expand.style.transform = 'rotate(180deg)';

      //   elements.forEach(element =>{
      //     element.classList.remove("hidden_768");
      //   });

      // } 
      // else {
      //   text.textContent = 'Показать все';
      //   expand.style.transform = 'rotate(0deg)';
      //   for (var i = 6; elements.length > 0; i++) {
      //     const element = elements[i];
      //     element.classList.add('hidden_768');

      //   }
      //   return false;
      // }
    

      if (text2.textContent == 'Показать все') {
        text2.textContent = 'Скрыть';
        expand2.style.transform = 'rotate(180deg)';

        elements.forEach(element =>{
          element.classList.remove("hidden_768");
        });

      } 
      else {
        text2.innerHTML = 'Показать все';
        expand2.style.transform = 'rotate(0deg)';
        for (var r = 3; elements.length > 0; r++) {
          const element = elements[r];
          element.classList.add('hidden_768');

        }
        return false;
      }
    }
    if (window.innerWidth >= 1366) {
      if (text2.innerHTML == 'Показать все') {
        text2.innerHTML = 'Скрыть';
        expand2.style.transform = 'rotate(180deg)';

        elements.forEach(element => {
          element.classList.remove("hidden_1366");
        });
      } 
      else {
        text2.innerHTML = 'Показать все';
        expand2.style.transform = 'rotate(0deg)';
        for (var c = 4; elements.length > 0; c++) {
          const element = elements[c];
          element.classList.add('hidden_1366');
        }

        return false;
      }
    }

   }
  // )
  );
});


///////////закрытие заблюренной области///////
const tm = document.querySelectorAll('.top-menu');
const cm = document.querySelectorAll('.callOrder');
const fm = document.querySelectorAll('.feedback');

document.addEventListener('click', outsideCloseMenu);
function outsideCloseMenu(evt) {
    if (evt.target === menu || tm.contains(evt.target) && !tm) {
      menu.classList.toggle('window-close');
      // клик внутри
        return;
    }
  }
  
  document.addEventListener('click', outsideCloseCallOrder);
  function outsideCloseCallOrder(evt) {
    if (evt.target ===  call || cm.contains(evt.target) && !cm) {
      call.classList.toggle('window-close');
      // клик внутри
        return;
    }
  }

  document.addEventListener('click', outsideClosefeedback);
  function outsideClosefeedback(evt) {
    if (evt.target ===  feedback || fm.contains(evt.target) && !fm) {
      feedback.classList.toggle('window-close');
      // клик внутри
        return;
    }
  }