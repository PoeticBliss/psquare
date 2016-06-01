# psquare
This is a node package that checks if an input is a perfect square and returns true or false

## How to use
```bash
npm install --save psquare
```
include in your script as:
```javascript
var psquare = require('psquare');
```

Use as:
```javascript
// returns true or false
// pass the number as argument to the check method
psquare.check(49);
```
Example would be:

```javascript
var psquare = require('psquare');

\\ Check if a number is a perfect square or not, returns true or false
if (psquare.check(49)) {
 console.log("Is perfect square")
}
```
