$(document).ready(function() {
	$(function() {
	  $("#slideshow").cycle({
		fx: "scrollHorz",
		speed: "fast",
		timeout: 0,
		pager: "#nav",
		after: removePlanArrow,
		pagerAnchorBuilder: function(idx, slide) {
		  return "#nav li:eq(" + idx + ") ";
		}
	  });
  
	  $("#tab-employee #prev").click(function() {
		$("#slideshow").cycle("prev");
	  });
  
	  $("#tab-employee #next").click(function() {
		$("#slideshow").cycle("next");
	  });
  
	  function removePlanArrow(curr, next, opts) {
		var index = opts.currSlide;
		$("#tab-employee #prev")[index == 0 ? "fadeOut" : "fadeIn"]();
		$("#tab-employee #next")[
		  index == opts.slideCount - 1 ? "fadeOut" : "fadeIn"
		]();
	  }
  
	  //MANAGER TAB CYCLE
	  $("#slideshow2").cycle({
		fx: "scrollHorz",
		speed: "fast",
		timeout: 0,
		pager: "#nav2",
		after: arrowFunction,
		pagerAnchorBuilder: function(idx, slide) {
		  return "#nav2 li:eq(" + idx + ") ";
		}
	  });
  
	  $("#tab-manager #prev2").click(function() {
		$("#slideshow2").cycle("prev");
	  });
  
	  $("#tab-manager #next2").click(function() {
		$("#slideshow2").cycle("next");
	  });
  
	  function arrowFunction(curr, next, opts) {
		var index = opts.currSlide;
		$("#tab-manager #prev2")[index == 0 ? "fadeOut" : "fadeIn"]();
		$("#tab-manager #next2")[
		  index == opts.slideCount - 1 ? "fadeOut" : "fadeIn"
		]();
	  }
	});
  });
  

  






function bodyPaint() {
	window.addEventListener("scroll", function () {
		const scrollTop =
			window.pageYOffset ||
			document.documentElement.scrollTop ||
			document.body.scrollTop ||
			0;

		const triggers = document.querySelectorAll("[data-color]");

		const body = document.body;

		// Change 33% earlier than scroll position so colour is there when you arrive.
		const scroll = scrollTop + window.innerHeight / 3;

		for (var i = 0; i < triggers.length; i++) {
			const trigger = triggers[i];
			const triggerRect = trigger.getBoundingClientRect();
			const triggerRectTop = triggerRect.top + scrollTop;
			const triggerHeight = trigger.offsetHeight;
			const triggerColor = trigger.getAttribute("data-color");

			// if position is within range of this panel.
			// So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
			// Remember we set the scroll to 33% earlier in scroll var.
			if (triggerRectTop <= scroll && triggerRectTop + triggerHeight > scroll) {
				// Set attribute of currently active div
				body.setAttribute("data-paint", triggerColor);
				console.log(body.dataset.paint);
			}
		}
	});
}

bodyPaint();

function toggleDarkLight() {
	var body = document.getElementById("body");
	var currentClass = body.className;
	body.className = currentClass == "light-mode" ? "dark-mode" : "light-mode";
  }

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}






