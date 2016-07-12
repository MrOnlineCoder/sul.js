!function(){"use strict";function t(){}function e(t){var e=[];if(t.nodeType&&e.push(t),"string"!=typeof t)throw"[SUL] Given selector is not a string or node: "+t;for(var n=t.split(","),i=0;i<n.length;i++){var o=n[i].trim();if("#"==o.charAt(0))e.push(document.getElementById(o.substring(1)));else for(var s=document.querySelectorAll(o),a=0;a<s.length;a++)e.push(s[a])}this["native"]=e}function n(t){return new e(t)}e.prototype.each=function(t){for(var e=0;e<this["native"].length;e++)t.call(this,this["native"][e])},e.prototype.html=function(t){return void 0===t||null===t?this["native"][0].innerHTML:(this.each(function(e){e.innerHTML=t}),this)},e.prototype.val=function(t){return void 0===t||null===t?this["native"][0].value:(this.each(function(e){e.value=t}),this)},e.prototype.hide=function(){return this.each(function(t){t.style.display="none"}),this},e.prototype.addOption=function(t){var e=document.createElement("option");e.text=t,e.value=t,this.each(function(t){"SELECT"==t.tagName&&t.add(e)})},e.prototype.show=function(){return this.each(function(t){t.style.display="block"}),this},e.prototype.hasClass=function(t){var e=!1;return this.each(function(n){return n.className.indexOf(t)>-1?void(e=!0):void 0}),e},e.prototype.addClass=function(t){return this.each(function(e){e.className+=" "+t}),this},e.prototype.removeClass=function(t){return this.each(function(e){e.className=e.className.replace(t,"").trim()}),this},e.prototype.on=function(t,e){return this.each(function(n){n.addEventListener(t,e)}),this},e.prototype.isEmpty=function(){return"INPUT"!=this["native"][0].tagName?(console.err("[SUL] Element is not an input: "+this["native"][0].id),null):null===this["native"][0].value||""===this["native"][0].value},e.prototype.getNative=function(){return 1==this["native"].length?this["native"][0]:this["native"]},e.prototype.getFirst=function(){return this["native"][0]};var i={globalOptions:{async:!0,contentType:"application/x-www-form-urlencoded",ajaxHeader:!0},ajax:function(t,e,n,i,o){if("GET"!=t.toUpperCase()&&"POST"!=t.toUpperCase())return void console.log("[SUL AJAX] Invalid method. Use GET or POST");var s=new XMLHttpRequest;s.open(t,e,o.async),s.setRequestHeader("Content-Type",o.contentType),o.ajaxHeader&&s.setRequestHeader("X-Requested-With","XMLHttpRequest"),n=={}?s.send():s.send(n),s.onreadystatechange=function(){4==s.readyState&&(200!=s.status?i(s.status,null):i(s.status,s.responseText))}},get:function(e,n,i){n=n||t,i=i||this.globalOptions,this.ajax("GET",e,{},n,i)},post:function(e,n,i,o){i=i||t,n=n||{},o=o||this.globalOptions,this.ajax("POST",e,n,i,o)}};window.SUL=n,window.SULX=i}();