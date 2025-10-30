/* 
In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out. 
Example 
filter_list([1,2,'a','b']) == [1,2] 
filter_list([1,'a','b',0,15]) == [1,0,15] 
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
*/

/* 
sample test: 
const assert = require('chai').assert; 
describe("Tests", () => { it("test", () => { assert.deepEqual(filter_list([1,2,'a','b']),[1,2], 'For input [1,2,"a","b"]'); 
assert.deepEqual(filter_list([1,'a','b',0,15]),[1,0,15], 'For input [1,"a","b",0,15]');
assert.deepEqual(filter_list([1,2,'aasf','1','123',123]),[1,2,123], 'For input [1,2,"aasf","1","123",123]'); }); });
*/

function filter_list(l) {
    // Return a new array with the strings filtered out
    let filter_list = l.filter(item => typeof item === 'number');
    return filter_list;
}

// Explanation
// filter() is a built-in array method.
// It goes through each element in the array(l in this case).
// It keeps only the elements for which the provided function returns true.

// item => typeof item === 'number'   ---- this is arrow function
/* 
    function(item){
        return typeof item === 'number';
    }
*/
