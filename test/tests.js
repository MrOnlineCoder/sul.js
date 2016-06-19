QUnit.module( "DOM Part" );

QUnit.test( "SUL and SUL_Object", function( assert ) {
  assert.ok( typeof (SUL("#testDiv")) == "object", "SUL() returns the Object" );
  assert.ok( typeof (SUL("#testDiv").native) == "object", "SUL().native is Object" );
});

var div = SUL("#testDiv");
var input = SUL("#testInput");

QUnit.test( "HTML and Value", function( assert ) {
  assert.equal(div.html(), "Testing DIV", ".html() returns correct value" );
  assert.ok(typeof (div.html("Updated HTML")) == "object", ".html() supports chaining" );
  assert.equal(div.html(), "Updated HTML", ".html() updates html correctly" );

  assert.equal(input.val(), "12345", ".val() returns correct value");
  assert.ok(typeof (input.val("54321")) == "object", ".val() supports chaining" );
  assert.equal(input.val(), "54321", ".val() updates value correctly");
});

QUnit.test( "Hiding and Showing Element", function( assert ) {
  assert.ok(typeof (div.hide()) == "object", ".hide() supports chaining" );
  assert.equal(div.native.style.display, "none", ".hide() hides the element" );

  assert.ok(typeof (div.show()) == "object", ".show() supports chaining" );
  assert.equal(div.native.style.display, "block", ".show() shows the element" );
});

QUnit.test( "CSS Classes", function( assert ) {
  assert.ok(div.hasClass("testClass"), ".hasClass() checks if class exists" );

  assert.ok(typeof (div.addClass("anotherClass")) == "object", ".addClass() supports chaining" );
  assert.ok(div.hasClass("anotherClass"), ".addClass() adds the class to element" );
  
  assert.ok(typeof (div.removeClass("anotherClass")) == "object", ".removeClass() supports chaining" );
  assert.ok(!div.hasClass("anotherClass"), ".removeClass() removes the class from element" );
});