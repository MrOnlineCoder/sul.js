# sul.js
![TravisCI Build image](https://travis-ci.org/MrOnlineCoder/sul.js.svg?branch=master)
Simple Utility Library

This library is a "lighter" and "smaller" version of jQuery. You can use it, when you need simple operations with DOM and you do not want to load big library.

**What it supports:**

1.Operations with element contents (html, value, etc) (DONE)

2.Simple CSS functions (show, hide, classes, etc) (DONE)

3.Chaining (DONE)

4.Events (DONE)

5.Simplified AJAX (TODO)


**What it WON'T support:**

1.Data-atrributes

2.Advanced effects 

## Documentation:

1.Getting the element

Use *SUL()* function to get the SUL wrapper of DOM element.
```javascript

SUL("#id");

```
2.Working with inner HTML

Use *.html()* function to get or update inner HTML of element.

```javascript
//Get contents
var html = SUL("#id").html();

//Update contents
SUL("#id").html("Updated content");

```

3.Working with input values

Use *.val()* function to get or update value of input element.

```javascript
//Get value
var value = SUL("#id").val();

//Update value
SUL("#id").val("Updated value");
```

4.Show/Hide element

Use *.hide()* and *.show()* function to toggle element visibility.

```javascript
//Hide element
SUL("#id").hide();

//Show element
SUL("#id").show();
```

5.CSS Classes

Use *.hasClass()* function to check, if element has specified class.
```javascript

SUL("#id").hasClass("awesomeclass");

```

Use *.addClass()* and *.removeClass()* functions to remove or add classes.

```javascript

//Add class
SUL("#id").addClass("awesomeclass");

//Remove class
SUL("#id").removeClass("awesomeclass");

```

6.Events

You can add event handlers to element using *.on()* function:

```javascript

SUL("#id").on("click", function(event) {
	alert("Hello World!");
});

```

### Chaining

Note, that SUL supports chaining.

```javascript
SUL("#id").html("Hello World!").show();
```

**See example.html for working example**
