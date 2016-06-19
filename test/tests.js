QUnit.module( "DOM Part" );

QUnit.test( "SUL and SUL_Object", function( assert ) {
  assert.ok( typeof (SUL("testDiv")) == "object", "SUL() returns the Object" );
  assert.ok( typeof (SUL("testDiv").native) == "object", "SUL().native is Object" );
});