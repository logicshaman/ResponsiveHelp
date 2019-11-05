# ResponsiveHelp
## Responsive attribute-value tool kit.
### Create a responsive website that is also proportionate to all mobile device using responsive font-size, responsive width, responsive margin, responsive padding and almost all attribute-value are Responsive.

#### Features and Benefits:
* A very lightweight jQuery plugin only 1.22kb minified.
* Will work on all versions of jQuery and will also work on all majority of browsers.
* Licensed under MIT.
* Intuitively easy to learn.
* Make the attributes-value responsive, that has a number value up to 4.
```css
  target-elmnt {
	margin: 2rem 5rem 4rem 2rem;   /* 4 values */
	margin: 1em 5em 2em;        /* 3 values */
	margin: 1em 2.5em;        /* 2 values */
	margin: 2%;             /* 1 value  */
  }
```
  to
```javascript
  $("target-elmnt").Rcss([
	["margin",[[2,5,4,2, 3,6,5,4]]],              // 4 values
	["margin",[[1,5,2, 2,6,5, {scale:"em"}]]],     // 3 values
	["margin",[[1,2.5, 2,4, {scale:"em"}]]],     // 2 values
	["margin",[[2, 4, {scale:"%"}]]]         // 1 value
  ]);
```

<br>

###### Basic syntax
```javascript
$("target-element").Rcss([
  ["attribute-name", [["atribute-value", {minRange:900, maxRange: 1200}]]],
  ["margin", [[ 2, 4, {minRange:500, maxRange:900}]]],
  ["padding", [
    [ 2, 4,  6, 8, {minRange:250, maxRange:500, scale:"%"}],
    [ x1, x2,  y1, y2, {minRange:501, maxRange:600, scale:"em"}],
    [ x1, x2, x3,  y1, y2,y3, {minRange:601, maxRange:700, scale:"vh"}],
    [ x1, x2, x3, x4,  y1, y2, y3, y4, {minRange:701, maxRange:900, scale:"wh"}]
  ]],
  ["display", [
    [ "none", {minRange:250, maxRange:500}],
    [ "block", {minRange:501, maxRange:600}]
  ]]
]);
```
<br>

Initialize it first by calling
```javascript
responsiveHelp();
```

<br>

Or explicitly define your default minimum, maximum width and the scale to use.
This must be coded as follows...
```javascript
responsiveHelp(255, 1500, "em");
```
If not defined, it defaults to 500px as minimum width,
1200px as maximum width and "rem" as default scale.
rem are being used as default instead of px,%,vh,wh,em or any
because rem are more flexible and easy to grasp.

<br>

###### Sample code:
```javascript
responsiveHelp(400, 1400, "em");
function runWhenWindowResizingHasStop(){
  $("target-element").Rcss([
    ["margin", [[ 2,4 {scale:"%"}]]]
  ]);
  // or Top-Bottom Right-Left
  $("target-element").Rcss([
    ["margin", [[ 2,4, 6,8, {scaleTB:"em", scaleRL:"vh", minRange:500}]]]
  ]);
  // or Top Right-Left Bottom
  $("target-element").Rcss([
    ["margin", [[ 2,4,6, 8,10,12, {maxRange:900, scaleT:"vw", scaleRL:"vh", scaleB:"em"}]]]
  ]);
  // or Top Bottom Right Left
  $("target-element").Rcss([
    ["margin", [[ 2,4,6,8, 10,12,14,16, {scaleT:"em", scaleR:"vh", scaleB:"%", scaleL:"vw"}]]]
  ]);
  // or set some multiple values according to a breakpoint you like.
  $("target-element").Rcss([
    ["margin", [
      [ 2,4, {maxRange:499}],
      [ 2,4, 6,8, {minRange:500, maxRange:799}],
      [ 2,4,6, 8,10,12, {minRange:800, maxRange:900}],
      [ 2,4,6,8, 10,12,14,16, {minRange:901, scale:"%"}],
      [ "20px", {minRange:1201}]
    ]]
  ]);
}runWhenWindowResizingHasStop();
```

<br>

This will run the function after the window resize has completed
```javascript
$(window).resize(function(){
	clearTimeout(window.resizingHasStoped);
	window.resizingHasStoped=setTimeout(function(){
		runWhenWindowResizingHasStop();
	},250);
});
```
(The runWhenWindowResizingHasStop function can be renamed according to what you like.)

<br>

### Available Options:
```javascript
{ minRange: number } // The minimum window width in which the element will stay to its minimum size.
{ maxRange: number } // The maximum window width in which the element will stay to its maximum size.
{ scale: "string"  } // The scale to use ex. "%","em","vh","wh" . If not defined defaults to "rem".
{ scaleTB: "string" } // specific for Top-Bottom scale only.
{ scaleRL: "string" } // specific for Right-Left scale only.
{ scaleT: "string" } // specific for Top scale only.
{ scaleR: "string" } // specific for Right scale only.
{ scaleB: "string" } // specific for Bottom scale only.
{ scaleL: "string" } // specific for Left scale only.
```

<br>

## Demo:
### [Sample 1](https://logicshaman.github.io/ResponsiveHelp/1)  |  [Sample 2](https://logicshaman.github.io/ResponsiveHelp/2)
(Test it by resizing your browser.)

<br>
<br>

### Please inform me if you found some bugs...
### And please tell me if you want some features to be added...
### Or hire Me: [Website](https://logicshaman.ml) | logicshaman@gmail.com | [Facebook](https://www.facebook.com/logicshaman) | +639275657459
### If You feel that it is really a good help, you can buy me a :coffee: ...

<br>

### Thanks and Enjoy...
