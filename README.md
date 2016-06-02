# sul.js
Simple Utility Library

This library is a "lighter" and "smaller" version of jQuery. You can use it, when you need simple operations with DOM and you do not want to load big library.

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
5. Chaining
Note, that SUL supports chaining.

```javascript
SUL("#id").html("Hello World!").show();
```



