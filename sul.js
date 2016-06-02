'use strict';

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

function SUL(selector) {
	return new SUL_Object(document.querySelector(selector));
};
