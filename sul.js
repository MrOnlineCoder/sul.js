/*
	SUL JavaScript Library
	Author: MrOnlineCoder (https://github.com/MrOnlineCoder)
	License: MIT
	2016
*/

'use strict';

(function () {

	//#########
	//Global Part
	//#########

	function sulNoop() {
		// nope :)
	}

	//#########
	//DOM Part
	//#########

	function SUL_Object(domElement) {
		this.native = domElement;
	}

	SUL_Object.prototype.html = function(val) {
		if (val == undefined || val == null) {
			return this.native.innerHTML;
		}

		this.native.innerHTML = val;
		return this;
	};

	SUL_Object.prototype.val = function(newval) {
		if (newval == undefined || newval == null) {
			return this.native.value;
		}

		this.native.value = newval;
		return this;
	};


	SUL_Object.prototype.hide = function() {
		this.native.style.display = "none";
		return this;
	};

	SUL_Object.prototype.show = function() {
		this.native.style.display = "block";
		return this;
	};

	SUL_Object.prototype.hasClass = function(c) {
		return this.native.className.indexOf(c) > -1;
	};

	SUL_Object.prototype.addClass = function(c) {
		this.native.className += (" "+c); 
		return this;
	};

	SUL_Object.prototype.removeClass = function(c) {
		this.native.className = this.native.className.replace(c, "").trim();
		return this;
	};

	SUL_Object.prototype.on = function(event, handler) {
		this.native.addEventListener(event, handler);
		return this;
	};

	function SUL(selector) {
		return new SUL_Object(document.querySelector(selector));
	};


	//#########
	///AJAX Part
	//#########

	function SULX() {
		
	}


	//#########
	//End
	//#########
	
	window.SUL = SUL;
	//window.SULX = SULX;
}());
