function Shape()
{
    this.name='shape';
    this.toString=function()
    {
        return this.name;
    }
}
function TwoDShape()
{
    this.name='2D shape';
}
function Triangle(size,height)
{
    this.name='triangle';
    this.size=size;
    this.height=height;
    this.getArea=function()
    {
        return this.size*height/2;
    }
}
TwoDShape.prototype=new Shape();
Triangle.prototype=new TwoDShape();
TwoDShape.prototype.constructor=TwoDShape;
Triangle.prototype.constructor=Triangle;
var my=new Triangle(5,10);
console.log(my.getArea());
my.toString();
my.constructor;
my instanceof Shape;
my instanceof TwoDShape;
my instanceof Triangle;
my instanceof Array;
Shape.prototype.isPrototypeOf(my);
TwoDShape.prototype.isPrototypeOf(my);
Triangle.prototype.isPrototypeOf(my);
String.prototype.isPrototypeOf(my);
function Shape(){}
Shape.prototype.name='shape';
Shape.prototype.toString=function()
{
    return this.name;
}
function TwoDShape(){}
TwoDShape.prototype=new Shape();
TwoDShape.prototype.constructor=TwoDShape;
TwoDShape.prototype.name='2D shape';
function Triangle(size,height)
{
    this.size=size;
    this.height=height;
}
//first the inheritance
Triangle.prototype=new Shape;
Triangle.prototype.constructor=TwoDShape;
//... then, augment the prototype
TwoDShape.prototype.name='2D shape';
