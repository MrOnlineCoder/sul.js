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

	function SUL_Object(selector) {
		var elements = [];
		// If selector is real node
		if (selector.nodeType) {
			elements.push(selector);
		} else {
			if (typeof(selector) != "string") {
				throw "[SUL] Given selector is not a string or node: "+selector;
			}

			var tokens = selector.split(",");
			for (var i=0;i<tokens.length;i++) {
				var token = tokens[i].trim();

				//Faster way to get element
				if (token.charAt(0) == "#") {
					elements.push(document.getElementById(token.substring(1)));
				} else {
					var tokenElems = document.querySelectorAll(token);
					for (var j=0;j<tokenElems.length;j++) {
						elements.push(tokenElems[j]);
					}
				}
			}
		}

		this.native = elements;
	}

	SUL_Object.prototype.each = function(callback) {
		for (var i=0;i<this.native.length;i++) {
			callback.call(this, this.native[i]);
		}
	};

	SUL_Object.prototype.html = function(val) {
		if (val === undefined || val === null) {
			return this.native[0].innerHTML;
		}

		this.each(function(e) {
			e.innerHTML = val;
		});

		return this;
	};

	SUL_Object.prototype.val = function(newval) {
		if (newval === undefined || newval === null) {
			return this.native[0].value;
		}

		this.each(function(e) {
			e.value = newval;
		});
		return this;
	};


	SUL_Object.prototype.hide = function() {
		this.each(function(e) {
			e.style.display = "none";
		});
		return this;
	};

	SUL_Object.prototype.focus = function() {
		this.each(function(e) {
			e.focus();
		});
		return this;
	};

	SUL_Object.prototype.addOption = function(text) {
		var toAdd = document.createElement("option");
		toAdd.text = text;
		toAdd.value = text;

		this.each(function(e) {
			if (e.tagName == "SELECT") {
				e.add(toAdd);
			}
		});
	};

	SUL_Object.prototype.index = function(text) {
		var idx = null;
		this.each(function(e) {
			if (e.tagName == "SELECT") {
				idx = e.selectedIndex;
				return;
			}
		});

		return idx;
	};

	SUL_Object.prototype.show = function() {
		this.each(function(e) {
			e.style.display = "block";
		});
		return this;
	};

	SUL_Object.prototype.hasClass = function(c) {
		var found = false;

		this.each(function(e) {
			if (e.className.indexOf(c) > -1) {
				found = true;
				return;
			}
		});

		return found;
	};

	SUL_Object.prototype.addClass = function(c) {
		this.each(function(e) {
			e.className += (" "+c); 
		});
		return this;
	};

	SUL_Object.prototype.removeClass = function(c) {
		this.each(function(e) {
			e.className = e.className.replace(c, "").trim();
		});
		return this;
	};

	SUL_Object.prototype.on = function(event, handler) {
		this.each(function(e) {
			e.addEventListener(event, handler);
		});

		return this;
	};

	SUL_Object.prototype.append = function(content) {
		this.each(function(e) {
			if (typeof(content) === "string") {
				e.innerHTML = e.innerHTML + content;
			} else if (typeof(content) === "object") {
				if (content.nodeType) {
					e.appendChild(content);
				}
			}
		});

		return this;
	};

	SUL_Object.prototype.isEmpty = function() {
		var found = false;

		this.each(function(e) {
			if (e.tagName == "INPUT") {
				if (e.value === "" || e.value === null) {
					found = true;
					return;
				}
			}
		});


		return found;
	};

	SUL_Object.prototype.clear = function() {
		this.each(function(e) {
			e.value = "";
		});
		return this;
	};

	SUL_Object.prototype.getNative = function() {
		if (this.native.length == 1) {
			return this.native[0];
		} else {
			return this.native;
		}
	};

	SUL_Object.prototype.getFirst = function() {
		return this.native[0];
	};

	function SUL(selector) {
		return new SUL_Object(selector);
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
	window.SULasJQuery = function (mode) {
		if (mode) {
			window.$ = SUL;
		} else {
			window.$ = window.JQuery || null;
		}

		if (!window.$) console.error("[SUL] JQuery is not defined! $ shorthand is not avaliable!");
	};
}());
