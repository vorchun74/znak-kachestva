(self.webpackChunk=self.webpackChunk||[]).push([[179],{134:function(e,s,t){"use strict";var a=t(260),o=Object.create(null),r="undefined"==typeof document,n=Array.prototype.forEach;function i(){}function l(e,s){if(!s){if(!e.href)return;s=e.href.split("?")[0]}if(g(s)&&!1!==e.isLoaded&&s&&s.indexOf(".css")>-1){e.visited=!0;var t=e.cloneNode();t.isLoaded=!1,t.addEventListener("load",(function(){t.isLoaded||(t.isLoaded=!0,e.parentNode.removeChild(e))})),t.addEventListener("error",(function(){t.isLoaded||(t.isLoaded=!0,e.parentNode.removeChild(e))})),t.href="".concat(s,"?").concat(Date.now()),e.nextSibling?e.parentNode.insertBefore(t,e.nextSibling):e.parentNode.appendChild(t)}}function c(e){if(!e)return!1;var s=document.querySelectorAll("link"),t=!1;return n.call(s,(function(s){if(s.href){var o=function(e,s){var t;return e=a(e,{stripWWW:!1}),s.some((function(a){e.indexOf(s)>-1&&(t=a)})),t}(s.href,e);g(o)&&!0!==s.visited&&o&&(l(s,o),t=!0)}})),t}function d(){var e=document.querySelectorAll("link");n.call(e,(function(e){!0!==e.visited&&l(e)}))}function g(e){return!!/^https?:/i.test(e)}e.exports=function(e,s){if(r)return console.log("no window.document found, will not HMR CSS"),i;var t,n,l,g=function(e){var s=o[e];if(!s){if(document.currentScript)s=document.currentScript.src;else{var t=document.getElementsByTagName("script"),r=t[t.length-1];r&&(s=r.src)}o[e]=s}return function(e){if(!s)return null;var t=s.split(/([^\\/]+)\.js$/),o=t&&t[1];return o&&e?e.split(",").map((function(e){var t=new RegExp("".concat(o,"\\.js$"),"g");return a(s.replace(t,"".concat(e.replace(/{fileName}/g,o),".css")))})):[s.replace(".js",".css")]}}(e);return t=function(){var e=g(s.filename),t=c(e);if(s.locals)return console.log("[HMR] Detected local css modules. Reload all css"),void d();t?console.log("[HMR] css reload %s",e.join(" ")):(console.log("[HMR] Reload all css"),d())},n=50,l=0,function(){var e=this,s=arguments,a=function(){return t.apply(e,s)};clearTimeout(l),l=setTimeout(a,n)}}},260:function(e){"use strict";e.exports=function(e){if(e=e.trim(),/^data:/i.test(e))return e;var s=-1!==e.indexOf("//")?e.split("//")[0]+"//":"",t=e.replace(new RegExp(s,"i"),"").split("/"),a=t[0].toLowerCase().replace(/\.$/,"");return t[0]="",s+a+t.reduce((function(e,s){switch(s){case"..":e.pop();break;case".":break;default:e.push(s)}return e}),[]).join("/")}},845:function(e,s,t){"use strict";var a=t(134)(e.id,{publicPath:"G:\\Projects\\znak-kachestva\\docs",locals:!1});e.hot.dispose(a),e.hot.accept(void 0,a)},727:function(e,s,t){"use strict";t(845);const a={projects:[{number:"1",title:"Портмоне",category:"wallet",leather:"Pueblo",price:"2400",animation:"fadeLeft",description:'Пора забросить на полку громоздкие кошельки и взять в руки что-нибудь компактное. Например - зажим для купюр. Из итальянской премиальной кожи "Pueblo" 🇮🇹.\n      Четыре кармана для пластиковых карт, два скрытых отдела, в которые можно поместить ещё по 2-3 карты в каждый. Свободно с запасом помещаются купюры любого размера и достоинства.\n      Идеальный вариант для ношения наличности и карт летом в джинсах или кармане рубашки - практически не занимает места, очень компактный, его не заметно Можно использовать вместо кардхолдера, клипса для зажима банкнот снимается.',photos:["./assets/images/works/wallets/1/1.jpg","./assets/images/works/wallets/1/2.jpg","./assets/images/works/wallets/1/3.jpg","./assets/images/works/wallets/1/4.jpg","./assets/images/works/wallets/1/5.jpg","./assets/images/works/wallets/1/6.jpg"]},{number:"2",title:"Сумка-месседжер",category:"bag",leather:"Кожа",price:"5800",animation:"fadeBottom",description:'Сумка - месседжер ручной работы из натуральной кожи.\n      ◇ Крепкая и плотная натуральная кожа быка толщиной 2,4-2,8 мм, ременная выделка.\n      ◇ Качественная и надёжная латунная фурнитура.\n      ◇ Прошито вручную седельным швом крепкой японской нитью из полиэстэра.\n      ◇ Регулируемый съемный ремень с наплечником и ручка для переноски сумки.\n      ◇ Внутри сумки съёмная перегородка с дополнительными карманами.\n      ◇ Размеры основного отдела сумки 28х38х12 см плюс 4 накладных кармана. Свободно помещается ноутбук 15".\n      Отличная вместительная и надёжная сумка как для работы, поездок в командировки, так и для повседневного использования.',photos:["assets/images/works/bags/1/1.jpg","assets/images/works/bags/1/2.jpg","assets/images/works/bags/1/3.jpg","assets/images/works/bags/1/4.jpg","assets/images/works/bags/1/5.jpg","assets/images/works/bags/1/6.jpg","assets/images/works/bags/1/7.jpg","assets/images/works/bags/1/8.jpg"]},{number:"3",title:"Ремень коричневый",category:"belt",leather:"Бычья кожа",price:"1500",animation:"fadeRight",description:'Ремень цвета "горький шоколад" из натуральной кожи толщиной 4мм. Вырезан из шкуры быка, кожа ременной ввделки, ручная работа, пряжка из литой латуни. Очень надёжный и долговечный ремень. Будет верой и правдой служить своему хозяину неприлично долго и никогда не позволит ему потерять свои штаны.',photos:["assets/images/works/belts/1/1.jpg","assets/images/works/belts/1/2.jpg","assets/images/works/belts/1/3.jpg","assets/images/works/belts/1/4.jpg"]},{number:"4",title:"Название сумки",category:"bag",leather:"Название кожи",price:"4400",animation:"fadeLeft",description:"Я могу повторить модель сумки, но вот текстуру, рисунок на коже, которым наделила её природа, повторить невозможно. Каждая шкура уникальна, следы складок на шее животного, шрамы, следы укусов, полученные животным при жизни на каждой шкуре уникальны и не повторяются. Это как отпечатки пальцев. Поэтому и каждое изделие из натуральной кожи невозможно повторить со 100% совпадением.\n      Сумка на фото в карусели сшита на заказ, по фотографиям, предоставленным заказчиком и отправляется к своему владельцу.\n      .\n      На заказ возможны любые конструктивные изменения в модели по желанию заказчика, а так же пошив сумки из другого вида и цвета кожи.\n      Нанесение имени владельца на изделие бесплатно.",photos:["./assets/images/works/bags/2/1.jpg","./assets/images/works/bags/2/2.jpg","./assets/images/works/bags/2/3.jpg","./assets/images/works/bags/2/4.jpg","./assets/images/works/bags/2/5.jpg"]},{number:"5",title:"Название ремня",category:"belt",leather:"Название кожи",price:"1400",animation:"fadeBottom",description:"Что подарить мужчине на День защитника Отечества? Может быть носки или пенку для бритья? А может быть настоящий мужской подарок - ремень из натуральной кожи, который изготовлен вручную из цельной полосы кожи, толщиной 4-5 мм, отрезанной от шкуры тяжёлого быка? Думаю, это будет настоящий мужской подарок, который будет напоминать мужчине о Вас каждый день в течении долгих лет.\n      Можно изготовить ремень на заказ, пряжки - на выбор. Срок изготовления ремня на заказ 1-2 дня.\n      При необходимости укомплектую ремень подарочной коробкой и нанесу на кожу имя владельца.",photos:["./assets/images/works/belts/2/1.jpg","./assets/images/works/belts/2/2.jpg","./assets/images/works/belts/2/3.jpg","./assets/images/works/belts/2/4.jpg","./assets/images/works/belts/2/5.jpg","./assets/images/works/belts/2/6.jpg","./assets/images/works/belts/2/7.jpg","./assets/images/works/belts/2/8.jpg","./assets/images/works/belts/2/9.jpg","./assets/images/works/belts/2/10.jpg","./assets/images/works/belts/2/11.jpg"]},{number:"6",title:'Мужское портмоне "Bifold"',category:"wallet",leather:"Итальянская натуральная кожа",price:"4400",animation:"fadeRight",description:'Пора забросить на полку громоздкие кошельки и взять в руки что-нибудь компактное. Например - зажим для купюр. Из итальянской премиальной кожи "Pueblo" 🇮🇹.\n      Четыре кармана для пластиковых карт, два скрытых отдела, в которые можно поместить ещё по 2-3 карты в каждый. Свободно с запасом помещаются купюры любого размера и достоинства.\n      Идеальный вариант для ношения наличности и карт летом в джинсах или кармане рубашки - практически не занимает места, очень компактный, его не заметно Можно использовать вместо кардхолдера, клипса для зажима банкнот снимается.',photos:["./assets/images/works/wallets/2/1.jpg","./assets/images/works/wallets/2/2.jpg","./assets/images/works/wallets/2/3.jpg","./assets/images/works/wallets/2/4.jpg","./assets/images/works/wallets/2/5.jpg"]},{number:"7",title:"Название сумки",category:"bag",leather:"Марка кожи",price:"2400",animation:"fadeLeft",description:"Сумка ручной работы из натуральной кожи чёрного цвета. Кожа имеет заводское полимерное покрытие, которое защищает кожу от царапин, воды, морозов. Очень стойкое антивандальное покрытие, поцарапать практически невозможно, если только специально скрести ножом или шилом. Вода скатывается шариками, сумка под дождём не намокнет.\n      ☆ Размеры сумки: 20х25х7 см.\n      ☆ Съёмный наплечный регулируемый ремень на карабинах.\n      ☆ Ручка для ношения сумки в руке.\n      ☆Натуральная кожа толщиной 2,2мм со стойким полимерным антивандальным покрытием.\n      ☆ Полностью ручная работа, прошито всё вручную седельным швом.\n      На заказ возможны любые конструктивные изменения в модели по желанию заказчика, а так же пошив сумки из другого вида и цвета кожи.\n      Нанесение имени владельца на изделие бесплатно.",photos:["./assets/images/works/bags/3/1.jpg","./assets/images/works/bags/3/2.jpg","./assets/images/works/bags/3/3.jpg","./assets/images/works/bags/3/4.jpg","./assets/images/works/bags/3/5.jpg"]},{number:"8",title:"Название ремня",category:"belt",leather:"Марка кожи",price:"3400",animation:"fadeBottom",description:'Новинка! Ремни для любителей военного стиля "Military"\n      Эти ремни - подарок для настоящих мужчин!\n      ● Итальянская натуральная кожа растительного дубления толщиной 3,8 мм.\n      ● Литые латунные пряжки производства Великобритании 🇬🇧.\n      ● Ремни прошиты по контуру вручную нитью полиэстер производства Японии 🇯🇵.\n      ● Съёмные подвесы с литыми латунными полукольцами для ключей или карабинов.\n      ● Ременные винты имитируют капсюли гильз патронов\n      Эти ремни для тех, кто ценит ручную работу и качественные европейские комплектующие.\n      Ремни в наличии, продаются.\n      По желанию покупателя нанесу на ремни имя владельца, укомплектую подарочной коробкой из дерева.',photos:["./assets/images/works/belts/3/1.jpg","./assets/images/works/belts/3/2.jpg","./assets/images/works/belts/3/3.jpg","./assets/images/works/belts/3/4.jpg","./assets/images/works/belts/3/5.jpg","./assets/images/works/belts/3/6.jpg","./assets/images/works/belts/3/7.jpg"]},{number:"9",title:'Мужское портмоне "Bifold"',category:"wallet",leather:"Итальянская натуральная кожа",price:"2400",animation:"fadeRight",description:'Красота итальянской кожи класса премиум поражает.\n      Мужское портмоне "Bifold".\n      Итальянская натуральная кожа.\n      Ручная работа.',photos:["./assets/images/works/wallets/3/1.jpg","./assets/images/works/wallets/3/2.jpg","./assets/images/works/wallets/3/3.jpg","./assets/images/works/wallets/3/4.jpg","./assets/images/works/wallets/3/5.jpg","./assets/images/works/wallets/3/6.jpg","./assets/images/works/wallets/3/7.jpg","./assets/images/works/wallets/3/8.jpg","./assets/images/works/wallets/3/9.jpg"]},{number:"10",title:"Название кошелька",category:"wallet",leather:"Марка кожи",price:"1400",animation:"fadeLeft",description:'Новый портмоне - лонгер из итальянской натуральной кожи "Tamponata". Это кожа растительного дубления, окрашенная вручную итальянскими мастерами - кожевниками. У этой кожи очень красивый коньячный цвет. Красоту и глубину цвета этой кожи очень сложно передать на фото. Её нужно видеть, особенно под лучами солнца.\n      В портмоне 6 полноразмерных отделов под купюры, документы, чеки и т.д, а так же отдел на молнии и 12 кармашков под пластиковые карты. Размер 10х20х1,5 см. Этот лонг будет удобен как в путешествиях, так и в повседневном использовании.\n      Портмоне продано.\n      При заказе возможны любые изменения в конструкции, а так же выполнение в другом цветовом решении или комбинации цветов, а так же из другого вида кожи (на заказ).',photos:["./assets/images/works/wallets/4/1.jpg","./assets/images/works/wallets/4/2.jpg","./assets/images/works/wallets/4/3.jpg","./assets/images/works/wallets/4/4.jpg","./assets/images/works/wallets/4/5.jpg","./assets/images/works/wallets/4/6.jpg","./assets/images/works/wallets/4/7.jpg"]},{number:"11",title:"Название кошелька",category:"wallet",leather:"Марка кожи",price:"5400",animation:"fadeBottom",description:'Новый портмоне - лонгер из итальянской натуральной кожи "Tamponata". Это кожа растительного дубления, окрашенная вручную итальянскими мастерами - кожевниками. У этой кожи очень красивый коньячный цвет. Красоту и глубину цвета этой кожи очень сложно передать на фото. Её нужно видеть, особенно под лучами солнца.\n      В портмоне 6 полноразмерных отделов под купюры, документы, чеки и т.д, а так же отдел на молнии и 12 кармашков под пластиковые карты. Размер 10х20х1,5 см. Этот лонг будет удобен как в путешествиях, так и в повседневном использовании.\n      Портмоне продано.\n      При заказе возможны любые изменения в конструкции, а так же выполнение в другом цветовом решении или комбинации цветов, а так же из другого вида кожи (на заказ).',photos:["./assets/images/works/wallets/5/1.jpg","./assets/images/works/wallets/5/2.jpg","./assets/images/works/wallets/5/3.jpg","./assets/images/works/wallets/5/4.jpg","./assets/images/works/wallets/5/5.jpg"]},{number:"12",title:"Название кошелька",category:"wallet",leather:"Итальянская натуральная кожа",price:"6400",animation:"fadeRight",description:'Новый портмоне - лонгер из итальянской натуральной кожи "Tamponata". Это кожа растительного дубления, окрашенная вручную итальянскими мастерами - кожевниками. У этой кожи очень красивый коньячный цвет. Красоту и глубину цвета этой кожи очень сложно передать на фото. Её нужно видеть, особенно под лучами солнца.\n      В портмоне 6 полноразмерных отделов под купюры, документы, чеки и т.д, а так же отдел на молнии и 12 кармашков под пластиковые карты. Размер 10х20х1,5 см. Этот лонг будет удобен как в путешествиях, так и в повседневном использовании.\n      Портмоне продано.\n      При заказе возможны любые изменения в конструкции, а так же выполнение в другом цветовом решении или комбинации цветов, а так же из другого вида кожи (на заказ).',photos:["./assets/images/works/wallets/6/1.jpg","./assets/images/works/wallets/6/2.jpg","./assets/images/works/wallets/6/3.jpg","./assets/images/works/wallets/6/4.jpg"]}],renderProjects(){const e=document.querySelector(".projects__inner");this.projects.forEach(((s,t)=>{e.insertAdjacentHTML("beforeend",`\n        <div class="projects__item" id='${t}' data-category=${s.category} data-animation=${s.animation}>\n          <div class="projects__photo">\n              <img src=${s.photos[0]} alt="projectphoto">\n          </div>\n          <div class="projects__text" data-modal="modalProject">\n            <div>\n              <div class="projects__text--top">\n                <h1 class="projects__title">${s.title}</h1>\n                <h2 class="projects__number">№ ${s.number}</h2>\n              </div>\n              <h3 class="projects__leather">${s.leather}</h3>\n            </div>\n            <h3 class="projects__price">${s.price} &#8381;</h3>\n          </div>\n        </div>\n      `)}))},modal(e){const s=function(e,s={}){const t=document.createElement("div");switch(t.classList.add("modal"),t.setAttribute("data-close","closeBtn"),e.target.dataset.modal){case"modalProject":let a="";s.photos.forEach((e=>{a+=`\n            <div class="modal-work__preview__item">\n              <img src=${e} alt="projectimage">\n            </div>\n            `})),t.insertAdjacentHTML("afterbegin",`\n            <div class="modal__dialog" id="${e.target.dataset.modal}" data-window="${e.target.dataset.modal}">\n              <button class="modal__close" type="button" data-close='closeBtn'>&times;</button>\n              <div class="modal-work">\n                <div class="modal-work__preview">\n                  <div class="modal-work__preview__slider">\n                    ${a}\n                  </div>\n                  <div class="modal-work__buttons">\n                    <button class="modal-work__btn modal-work__btn--prev" type="button">Previous</button>\n                    <button class="modal-work__btn modal-work__btn--next" type="button">Next</button>\n                  </div>\n                </div>\n                <div class="modal-work__content">\n                  <div class="modal-work__header">\n                    <h1 class="modal-work__title">${s.title}</h1>\n                    <h2 class="modal-work__subtitle">${s.leather}</h2>\n                    <h3 class="modal-work__number">№ ${s.number}</h3>\n                  </div>\n                  <div class="modal-work__text">\n                    <p>${s.description}</p>\n                  </div>\n                  <h2 class="modal-work__price">${s.price} &#8381;</h2>\n                </div>\n              </div>\n            </div>\n          `)}return document.body.appendChild(t),t}(e,this.projects[e.target.closest("[id]").id]);let t=!1;const a={open(){!t&&s.classList.add("open")},close(){t=!0,s.classList.remove("open"),s.classList.add("closing"),setTimeout((()=>{s.classList.remove("closing"),t=!1,this.destroy()}),350)},destroy(){s.remove()}};return s.addEventListener("click",(e=>{e.target.dataset.close&&(a.close(),document.body.classList.remove("no-scroll"))})),a},sortHandler(e){e.preventDefault();const s=document.querySelectorAll("[data-category]");let t=e.target.dataset.filter;s.forEach((e=>{t===e.dataset.category||"all"===t?e.classList.remove("hide"):e.classList.add("hide")}))},modalSlider(){let e=0;const s=document.querySelector(".modal-work__preview__slider"),t=document.querySelectorAll(".modal-work__preview__item"),a=document.querySelector(".modal-work__preview").clientWidth,o=t.length,r=document.querySelector(".modal-work__btn--prev"),n=document.querySelector(".modal-work__btn--next");t.forEach((e=>{e.style.minWidth=`${a}px`})),n.onclick=()=>{e-=a,i(),l()},r.onclick=()=>{e+=a,i(),l()};const i=()=>{s.style.transform=`translateX(${e}px)`},l=()=>{r.disabled=0===e,n.disabled=e<=-o*a+a};l()},modalHandler(e){e.preventDefault();const s=a.modal(e,a.projects);"modalProject"===e.target.dataset.modal&&this.modalSlider(),setTimeout((()=>{s.open()}),100),document.body.classList.add("no-scroll")},burgerHandler(){document.querySelector(".burger").classList.toggle("active"),document.querySelector(".header").classList.toggle("active")},navMenuHandler(e){e.preventDefault();const s=document.getElementById(e.target.dataset.navigation).getBoundingClientRect().top-70;window.scrollBy({top:s,behavior:"smooth"})},clickHandler(e){e.target.dataset.filter?a.sortHandler(e):e.target.dataset.modal?a.modalHandler(e):e.target.closest(".burger")?a.burgerHandler():e.target.dataset.navigation&&document.querySelector(".burger").classList.contains("active")?(a.navMenuHandler(e),a.burgerHandler()):e.target.dataset.navigation&&a.navMenuHandler(e)},animationHandler(){document.querySelectorAll("[data-animation]").forEach((e=>{const s=e.offsetHeight,t=e.getBoundingClientRect().top+(window.pageYOffset||document.documentElement.scrollTop);let a=window.innerHeight-s/4;s>window.innerHeight&&(a=window.innerHeight-window.innerHeight/4),pageYOffset>t-a&&pageYOffset<t+s&&e.classList.add(e.dataset.animation)}))},scrollHandler(){const e=document.querySelector(".header");document.querySelector(".footer").getBoundingClientRect().top<=document.documentElement.clientHeight&&!document.querySelector(".burger").classList.contains("active")?e.style.transform="translateY(-75px)":e.style.transform="translateY(0)",a.animationHandler()}};window.Portfolio=a,a.renderProjects(),a.animationHandler(),document.addEventListener("click",a.clickHandler),window.addEventListener("scroll",a.scrollHandler)}},function(e){"use strict";var s;s=727,e(e.s=s)}]);