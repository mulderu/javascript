
(function() {
  // Scoping rules
  function f(shouldInitialize: boolean) {
    if (shouldInitialize) {
        var x = 10;
    }

    return x;
  }

  // console.log(x) // error
  console.log(f(true));  // returns '10'
  console.log(f(false)); // returns 'undefined'

})();

(function() {
  console.log('------')

  //One problem they exacerbate is the fact that it is not an error to declare the same variable multiple times:
  function sumMatrix(matrix: number[][]) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        console.log('out-i:' + i);
        for (var i = 0; i < currentRow.length; i++) {
            console.log('in-i:' + i);
            sum += currentRow[i];
        }
    }

    return sum;
  }
  let pm:number[][] = [[1,2,3,4]];
  console.log(sumMatrix(pm));

})();

(function() {
  // i => 10
  for (var i = 0; i < 10; i++) {
    setTimeout(function() { console.log(i); }, 100 * i);
  }

  for (let i = 0; i < 10 ; i++) {
    setTimeout(function() { console.log('let'+i); }, 100 * i);
  }

  setTimeout(function() {
    console.log('------')
    for (var i = 0; i < 10; i++) {
      // capture the current state of 'i'
      // by invoking a function with its current value
      (function(i) {
          setTimeout(function() { console.log(i); }, 100 * i);
      })(i);
    }

  }, 2000);
})();


(function() {
  console.log('------')
  function f(condition, x) {
    if (condition) {
        let x = 100;
        return x;
    }

    return x;
  }

  console.log(f(false, 0)); // returns '0'
  console.log(f(true, 0));  // returns '100'

})();


(function() {
  console.log('------')

  function sumMatrix(matrix: number[][]) {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        console.log('2out-i:' + i);
        for (let i = 0; i < currentRow.length; i++) {
            sum += currentRow[i];
            console.log('2in-i:' + i);
        }
    }

    return sum;
  }
  let pm:number[][] = [[1,2,3,4]];
  console.log(sumMatrix(pm));


})();

(function() {
  console.log('------')

  let input = [1, 2];
  let [first, second] = input;
  console.log("[",first, second, "l");
  [first, second] = [second, first];
  console.log("[",first, second, "]");

  function f([first, second]: [number, number]) {
    console.log("[",first, second, "]");
  }
  f([1, 2]);
  // using ... syntax
  let [first2, ...rest] = [1,2,3,4];
  console.log("first2:", first2)
  console.log("rest:", rest)

  //
  let [first3] = [1, 2, 3, 4];
  console.log('first3:', first3); // outputs 1

  let [, second2, , fourth] = [1, 2, 3, 4];
  console.log('second2:', second2, fourth);

  let o = {
    a: "foo",
    b: 12,
    c: "bar"
 };
 let { a, b } = o;
 console.log(a, b); // foo 12o

 ({ a, b } = { a: "baz", b: 101 });
 console.log(a, b); // baz 101


 let { x, ...passthrough } = o;
 let total = passthrough.b + passthrough.c.length;
 console.log(total) // 15

 // default value
 function keepWholeObject(wholeObject: { a: string, b?: number }) {
  let { a, b = 1001 } = wholeObject;
  return {a, b}; 
 }
 console.log('==', keepWholeObject({a:"hi", b:28}));
 console.log('==', keepWholeObject({a:"hix"}));
 
 function ff({ a, b } = { a: "x", b: 0 }): void {
   console.log('hi', a, b)
 }
 ff();
 ff({a:'mulder'});
 ff({a:'mulder', b:28});


 let first_1 = [1, 2];
 let second_1 = [3, 4];
 let bothPlus = [0, ...first_1, ...second_1, 5];

 console.log(bothPlus); // [ 0, 1, 2, 3, 4, 5 ]


 let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
 let search = { ...defaults, food: "rich" };
 console.log(search); // { food: 'rich', price: '$$', ambiance: 'noisy' }

 let search2 = { food: "rich", ...defaults };
 console.log(search2); // { food: 'spicy', price: '$$', ambiance: 'noisy' }, Then the food property in defaults overwrites food: "rich", which is not what we want in this case.
 
 
  class C {
    p = 12;
    m() {
    }
  }
  let c = new C();
  let clone = { ...c };
  clone.p; // ok
  // clone.m(); // error!  object spreading : it only includes an objects’ own, enumerable properties. 






})();