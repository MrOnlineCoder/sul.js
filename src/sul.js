/*
	SUL JavaScript Library
	Author: MrOnlineCoder (https://github.com/MrOnlineCoder)
	License: MIT
	2016
*/


(function () {

	"use strict";

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
		if (val === undefined || val === null) {
			return this.native.innerHTML;
		}

		this.native.innerHTML = val;
		return this;
	};

	SUL_Object.prototype.val = function(newval) {
		if (newval === undefined || newval === null) {
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
	}


	//#########
	///AJAX Part
	//#########

	var SULX =  {

		globalOptions: {
			async: true,
			contentType: "application/x-www-form-urlencoded",
			ajaxHeader: true
		},

		ajax: function(method, url, data, callback, options) {
			if (method.toUpperCase() != "GET" && method.toUpperCase() != "POST") {
				console.log("[SUL AJAX] Invalid method. Use GET or POST");
				return;
			}

			var xhr = new XMLHttpRequest();

			xhr.open(method, url, options.async);

			xhr.setRequestHeader("Content-Type", options.contentType);

			if (options.ajaxHeader) {
				xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
			}

			if (data == {}) {
				xhr.send();
			} else {
				xhr.send(data);
			}



			xhr.onreadystatechange = function() {
			  if (xhr.readyState != 4) return;

			  if (xhr.status != 200) {
			   	callback(xhr.status, null);
			  } else {
			    callback(xhr.status, xhr.responseText);
			  }

			};
		},

		get: function(url, callback, options) {
			callback = callback || sulNoop;
			options = options || this.globalOptions;

			this.ajax("GET", url, {}, callback, options);
		},

		post: function(url, data, callback, options) {
			callback = callback || sulNoop;
			data = data || {};
			options = options || this.globalOptions;

			this.ajax("POST", url, data, callback, options);
		}
	};

	//#########
	//End
	//#########
	
	window.SUL = SUL;
	window.SULX = SULX;
}());
