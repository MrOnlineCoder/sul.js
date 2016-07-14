# sul.js
![TravisCI Build image](https://travis-ci.org/MrOnlineCoder/sul.js.svg?branch=master)

Simple but Usable Library

This library is a "lighter" and "smaller" version of jQuery. You can use it, when you need simple operations with DOM and you do not want to load big library.

**Advantages:**

1.Small size ~4 Kb.

2.Speed - all tests run up to 15 ms.

3.Support - we improve SUL all time.

**Features:**

1.Operations with element contents (html, value, etc) (DONE)

2.Simple CSS functions (show, hide, classes, etc) (DONE)

3.Chaining (DONE)

4.Events (DONE)

5.Simplified AJAX (DONE)

6.Selecting multiple elements

## Getting SUL

You can always get SUL using next links:

[Normal](https://raw.githubusercontent.com/MrOnlineCoder/sul.js/master/src/sul.js)

[Minified](https://raw.githubusercontent.com/MrOnlineCoder/sul.js/master/dist/sul.js)


## Documentation:

1.Getting the element

Use *SUL()* function to get the SUL wrapper of DOM element.
```javascript

SUL("selector");

```

where *selector* - is just a list of CSS selectors seperated by comma:

```javascript

SUL("#aloneElement"); // => you will work with element with ID aloneElement

SUL("#happyElement, #hisFriend") // => elements with IDs happyElement and #hisFriend will be selected

SUL(".someElements") // => elements with class someElements will be selected

```

2.Working with inner HTML

Use *.html()* function to get or update inner HTML of element.

```javascript
//Get contents
var html = SUL("selector").html();

//Update contents
SUL("selector").html("Updated content");

```

3.Working with input values

Use *.val()* function to get or update value of input element.

```javascript
//Get value
var value = SUL("selector").val();

//Update value
SUL("selector").val("Updated value");
```

4.Show/Hide element

Use *.hide()* and *.show()* function to toggle element visibility.

```javascript
//Hide element
SUL("selector").hide();

//Show element
SUL("selector").show();
```

5.CSS Classes

Use *.hasClass()* function to check, if element has specified class.
```javascript

SUL("selector").hasClass("awesomeclass");

```

Use *.addClass()* and *.removeClass()* functions to remove or add classes.

```javascript

//Add class
SUL("selector").addClass("awesomeclass");

//Remove class
SUL("selector").removeClass("awesomeclass");

```

6.Events

You can add event handlers to element using *.on()* function:

```javascript

SUL("selector").on("click", function(event) {
	alert("Hello World!");
});

```

7.AJAX

You can do AJAX requests using SULX (SUL AJAX) object:

```javascript

//Do a GET request
SULX.get(url, callback, options);

//Do a POST request
SULX.post(url, data, callback, options);

```

Where:

**url** - target URL

**data** - data, that will be sent with POST request

**callback(status, data)** - the callback function, which will be called when request will be
finished. The status argument is status code from server, and data is data from server (will be null if request failed)

**options** - options for AJAX request, must be an object. By default, global options used, but you can use custom or edit globalOptions, so they will be applied for all next requests.

Example of options object:

```javascript

var options = {};

options.async = true; //Should request be async?
options.contentType = "application/x-www-form-urlencoded"; // Content-Type header
options.ajaxHeader = true; //Should SUL include AJAX header in request? (X-Requested-With)

```

### Utilities/useful functions

1.Add options to **select** tag

```javascript

SUL("selector").addOption("foobar");

```

2.Check if **input** is empty:

```javascript

SUL("selector").isEmpty();

```

3.Get selected index of **select** tag.

```javascript

SUL("selector").index();

```

4.You can also use **$()** function instead of **SUL()** like in JQuery. Note, that you have to define it before using. Use **SULasJQuery(mode)**:

```javascript

SULasJQuery(true);

//$() is now implemented by SUL

$("#foobar").html();

//You can disable it too:

SULasJQuery(false); // If JQuery is connected, $ will have JQuery implementation. If not, $ will be null 

$("#foobar").hide(); // => this will work only if JQuery is connected!

```

### Chaining

Note, that SUL supports chaining.

```javascript
SUL("selector").html("Hello World!").show();
```

**See example.html for working example**
