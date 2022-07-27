//---- wow settings ----//
wow = new WOW({
	boxClass: "wow",
	animateClass: "animate__animated",
	offset: 0,
	mobile: true,
	live: true,
});
wow.init();

//---- hero slider ----//
var heroSlider = new Swiper(".hero__slider", {
	spaceBetween: 0,
	speed: 2000,
	loop: true,
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	pagination: {
		el: ".hero__pag",
		clickable: true,
	},
});

//---- novelty slider ----//
$(() => {
	let nswiper, isActive;
	const $window = $(window);
  
	swiperFunc();
	$window.on('resize', swiperFunc);
  
	function swiperFunc() {
	  const initNeeded = $window.width() > 1026;
  
	  isActive = isActive !== undefined ? isActive : !initNeeded;
  
	  if(initNeeded && !isActive) {
		noveltySlider = new Swiper('.novelty-slider', {
		 	slidesPerView: 3,
			spaceBetween: 80,
			watchOverflow: true,
			simulateTouch: false,
			navigation: {
				nextEl: ".novelty-next",
				prevEl: ".novelty-prev",
			},
		  pagination: {
			el: ".novelty-pag",
			clickable: true,
		},
		});
		isActive = true;
	  }
	  
	}
  });

  
//---- hit slider ----//
$(() => {
	let nnswiper, isActive;
	const $window = $(window);
  
	swiperFunc();
	$window.on('resize', swiperFunc);
  
	function swiperFunc() {
	  const initNeeded = $window.width() > 1026;
  
	  isActive = isActive !== undefined ? isActive : !initNeeded;
  
	  if(initNeeded && !isActive) {
		hitSlider = new Swiper(".hit-slider", {
			slidesPerView: 3,
			spaceBetween: 80,
			watchOverflow: true,
			simulateTouch: false,
			navigation: {
				nextEl: ".hit-next",
				prevEl: ".hit-prev",
			},
			pagination: {
				el: ".hit-pag",
				clickable: true,
			},
		});
		isActive = true;
	  }
	  
	}
  });
//---- sale slider ----//
$(() => {
	let saleswiper, isActive;
	const $window = $(window);
  
	swiperFunc();
	$window.on('resize', swiperFunc);
  
	function swiperFunc() {
	  const initNeeded = $window.width() > 1026;
  
	  isActive = isActive !== undefined ? isActive : !initNeeded;
  
	  if(initNeeded && !isActive) {
		saleSlider = new Swiper(".sale-slider", {
			slidesPerView: 3,
			spaceBetween: 80,
			watchOverflow: true,
			simulateTouch: false,
			navigation: {
				nextEl: ".sale-next",
				prevEl: ".sale-prev",
			},
			pagination: {
				el: ".sale-pag",
				clickable: true,
			},
		});
		isActive = true;
	  }
	  
	}
  });
//---- benefits slider ----//
var benefitsSlider = new Swiper(".benefits-slider", {
	slidesPerView: 1,
	spaceBetween: 80,
	watchOverflow: true,
	navigation: {
		nextEl: ".benefits-next",
		prevEl: ".benefits-prev",
	},
	pagination: {
		el: ".benefits-pag",
		clickable: true,
	},
});

//---- quantity btns ----//
document.addEventListener("click", function (e) {
	if (e.target.classList.contains("plus")) {
		++e.target.parentElement.querySelector("input").value;
	} else if (e.target.classList.contains("minus")) {
		--e.target.parentElement.querySelector("input").value;
	}
});

//---- new slider ----//
var newwSlider = new Swiper(".new-slider", {
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	loop: true,
	centeredSlides: true,
	slidesPerView: 3,
	spaceBetween: 10,
	watchOverflow: true,
	navigation: {
		nextEl: ".new-next",
		prevEl: ".new-prev",
	},
	pagination: {
		el: ".new-pag",
		clickable: true,
	},
	breakpoints: {
		320: {
		  slidesPerView:1,
		},
		
		1024: {
		  slidesPerView:3,
		}
	  },
});

 //---- -------------------------Tabs ----------------------------------------------//
// class ItcTabs {
// 	constructor(target, config) {
// 	  const defaultConfig = {};
// 	  this._config = Object.assign(defaultConfig, config);
// 	  this._elTabs = typeof target === 'string' ? document.querySelector(target) : target;
// 	  this._elButtons = this._elTabs.querySelectorAll('.tabs__btn');
// 	  this._elPanes = this._elTabs.querySelectorAll('.tabs__pane');
// 	  this._eventShow = new Event('tab.itc.change');
// 	  this._init();
// 	  this._events();
// 	}
// 	_init() {
// 	  this._elTabs.setAttribute('role', 'tablist');
// 	  this._elButtons.forEach((el, index) => {
// 		el.dataset.index = index;
// 		el.setAttribute('role', 'tab');
// 		this._elPanes[index].setAttribute('role', 'tabpanel');
// 	  });
// 	}
// 	show(elLinkTarget) {
// 	  const elPaneTarget = this._elPanes[elLinkTarget.dataset.index];
// 	  const elLinkActive = this._elTabs.querySelector('.tabs__btn_active');
// 	  const elPaneShow = this._elTabs.querySelector('.tabs__pane_show');
// 	  if (elLinkTarget === elLinkActive) {
// 		return;
// 	  }
// 	  elLinkActive ? elLinkActive.classList.remove('tabs__btn_active') : null;
// 	  elPaneShow ? elPaneShow.classList.remove('tabs__pane_show') : null;
// 	  elLinkTarget.classList.add('tabs__btn_active');
// 	  elPaneTarget.classList.add('tabs__pane_show');
// 	  this._elTabs.dispatchEvent(this._eventShow);
// 	  elLinkTarget.focus();
// 	}
// 	showByIndex(index) {
// 	  const elLinkTarget = this._elButtons[index];
// 	  elLinkTarget ? this.show(elLinkTarget) : null;
// 	};
// 	_events() {
// 	  this._elTabs.addEventListener('click', (e) => {
// 		const target = e.target.closest('.tabs__btn');
// 		if (target) {
// 		  e.preventDefault();
// 		  this.show(target);
// 		}
// 	  });
// 	}
//   }
//   if (document.querySelector('.tabs')) new ItcTabs('.tabs');

 //---- -------------------------otzyvi_swiper ----------------------------------------------//
 const otzyvi_swiper = new Swiper('.feedback__slider', {
	centeredSlides: true,
	slidesPerView: 1,
	loop: true,
	pagination: {
	  el: '.feedback__pagination',
	  clickable: true,
	},
	navigation: {
	  nextEl: '.feedback__next',
	  prevEl: '.feedback__prev',
	},
  });

  //---- -------------------------Slider about ----------------------------------------------//
  const about_swiper = new Swiper('.about__slider', {
	centeredSlides: true,
	slidesPerView: 3,
	loop: true,
	pagination: {
	  el: '.about__pagination',
	  clickable: true,
	},
	navigation: {
	  nextEl: '.about__next',
	  prevEl: '.about__prev',
	},
	breakpoints: {
		320: {
		  slidesPerView:1,
		},
		768: {
			slidesPerView:2,
		  },
		1024: {
		  slidesPerView:3,
		}
	  },
  });
  /* ======================================Аккардион=========================================== */
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("accordionactive");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

/* ======================================Filter =========================================== */

if (document.querySelector(".catalog__filter_title")) {
	document.querySelector(".catalog__filter_title").onclick = function () {
		price = document.querySelector(".catalog__pricebox");
		price.classList.toggle("activebox");
		price = document.querySelector(".priceimg");
		price.classList.toggle("activeimg");
	};
}
if (document.querySelector(".catalog__country")) {
	document.querySelector(".catalog__country").onclick = function () {
		country = document.querySelector(".catalog__countrybox");
		country.classList.toggle("activebox");
		country = document.querySelector(".countryimg");
		country.classList.toggle("activeimg");
	};
}
if (document.querySelector(".catalog__directions")) {
	document.querySelector(".catalog__directions").onclick = function () {
		direction = document.querySelector(".catalog__directionsbox");
		direction.classList.toggle("activebox");
		direction = document.querySelector(".directionimg");
		direction.classList.toggle("activeimg");
	};
}

 /* ======================================Burger header=========================================== */

function openNav() {
	document.getElementById("myNav").style.height = "100%";
	document.getElementById("body").style.overflow = "hidden";
	document.getElementById("hero__panel").style.position = "unset";
}
 /* Close */
function closeNav() {
	document.getElementById("myNav").style.height = "0%";
	document.getElementById("body").style.overflow = "unset";
	document.getElementById("hero__panel").style.position = "absolute";
}
 /* ======================================FILTER mini=========================================== */
 function openFilter() {
	document.getElementById("myNavfilter").style.width = "100%";
}
function closeFilter() {
	document.getElementById("myNavfilter").style.width = "0%";
}


/* ++++++++++++++++++++++++++++++++++++++++++ Липкий хедер+++++++++++++++++++++++++++++ */

window.onscroll = function() {mywFunction()};

var header = document.getElementById("myHeader");
var site = document.getElementById("siteSize");
var sticky = header.offsetTop;

function mywFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
	site.classList.add("siteSize");
  } else {
    header.classList.remove("sticky");
	site.classList.add("siteSize");
  }
}



/* =====================Табы============== */

 // вкладки с содержанием
    // 
    $(".tab_content").hide();
    $(".tab_content:first").show();
    /* в режиме вкладок */
    $("ul.tabs li").click(function () {
        $(".tab_content").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();
        $("ul.tabs li").removeClass("active");
        $(this).addClass("active");
        $(".tab_accordion").removeClass("d_active");
        $(".tab_accordion[rel^='" + activeTab + "']").addClass("d_active");
    });
    /* в режиме аккордеона */
    $(".tab_accordion").click(function () {
        $(".tab_content").hide();
        var d_activeTab = $(this).attr("rel");
        $("#" + d_activeTab).fadeIn();
        $(".tab_accordion").removeClass("d_active");
        $(this).addClass("d_active");
        $("ul.tabs li").removeClass("active");
        $("ul.tabs li[rel^='" + d_activeTab + "']").addClass("active");
    });
    /* дополнительный класс tab_last, 
    чтобы добавить границу к правой 
    стороне последней вкладки. */
    $('ul.tabs li').last().addClass("tab_last");

//---- -------------------------Читать больше кнопка под табами ----------------------------------------------//
  // Get the modal
  var modal = document.getElementById('myModal');

  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  
  // When the user clicks on the button, open the modal
  btn.onclick = function() {
	  modal.style.display = "block";
  }
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
	  modal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
	  if (event.target == modal) {
		  modal.style.display = "none";
	  }
  }