(function() {
	function slideF(selector){
	var slide = document.querySelector(selector);
	slide.innerHTML = '<span class="point"></span>';
	var point = document.querySelector(".point");
	var pointstart;
	var pointend;
	var point_offl;
	var change1;
	var step = slide.getAttribute("data-step");
	var minvalue = slide.getAttribute("data-minvalue");
	var maxvalue = slide.getAttribute("data-maxvalue");
	slide.onmousedown = function(event) {
		pointstart = event.clientX;
		point_offl = point.offsetLeft;
		console.log(1)
		window.onmousemove = move;
		window.onmouseup = up;

	}
	this.addevent = function(changed) {
		
			change1 = changed;
		
	}

	function move(event) {
		var a = event.clientX - pointstart;

		if (point_offl + a < 0) {
			point.style.left = 0;
		} else if (point_offl + a > getIntWidth(getcssStyle(slide, "width")) - getIntWidth(getcssStyle(point, "width"))) {
			point.style.left = (getIntWidth(getcssStyle(slide, "width")) - getIntWidth(getcssStyle(point, "width"))) + "px";

		} else {
			point.style.left = point_offl + a + "px";
		}
		//				change((maxvalue - minvalue) / 90 * point.offsetLeft + (minvalue - 0)).toFixed(1))
		var curVal=((maxvalue - minvalue) / ( getIntWidth(getcssStyle(slide, "width")) - getIntWidth(getcssStyle(point, "width"))) * point.offsetLeft + (minvalue - 0)).toFixed(2)
		if(typeof change1==="function"){
		change1(curVal);
       }
	}

	function up() {
		window.onmousemove = null;
		window.onmouseup = null;

	}

	function getIntWidth(str) {
		var len = str.length;
		var str = str.substring(0, len - 2);
		return str - 0;
	}

	function getcssStyle(ele, stylename) {
		var style = document.defaultView.getComputedStyle(ele, "").getPropertyValue(stylename);
		return style;
	}
	}
	
	window.Myslide=slideF;
	
})()

