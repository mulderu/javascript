var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
(function () {
    // Scoping rules
    function f(shouldInitialize) {
        if (shouldInitialize) {
            var x = 10;
        }
        return x;
    }
    // console.log(x) // error
    console.log(f(true)); // returns '10'
    console.log(f(false)); // returns 'undefined'
})();
(function () {
    console.log('------');
    //One problem they exacerbate is the fact that it is not an error to declare the same variable multiple times:
    function sumMatrix(matrix) {
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
    var pm = [[1, 2, 3, 4]];
    console.log(sumMatrix(pm));
})();
(function () {
    // i => 10
    for (var i = 0; i < 10; i++) {
        setTimeout(function () { console.log(i); }, 100 * i);
    }
    var _loop_1 = function (i_1) {
        setTimeout(function () { console.log('let' + i_1); }, 100 * i_1);
    };
    for (var i_1 = 0; i_1 < 10; i_1++) {
        _loop_1(i_1);
    }
    setTimeout(function () {
        console.log('------');
        for (var i = 0; i < 10; i++) {
            // capture the current state of 'i'
            // by invoking a function with its current value
            (function (i) {
                setTimeout(function () { console.log(i); }, 100 * i);
            })(i);
        }
    }, 2000);
})();
(function () {
    console.log('------');
    function f(condition, x) {
        if (condition) {
            var x_1 = 100;
            return x_1;
        }
        return x;
    }
    console.log(f(false, 0)); // returns '0'
    console.log(f(true, 0)); // returns '100'
})();
(function () {
    console.log('------');
    function sumMatrix(matrix) {
        var sum = 0;
        for (var i = 0; i < matrix.length; i++) {
            var currentRow = matrix[i];
            console.log('2out-i:' + i);
            for (var i_2 = 0; i_2 < currentRow.length; i_2++) {
                sum += currentRow[i_2];
                console.log('2in-i:' + i_2);
            }
        }
        return sum;
    }
    var pm = [[1, 2, 3, 4]];
    console.log(sumMatrix(pm));
})();
(function () {
    console.log('------');
    var input = [1, 2];
    var first = input[0], second = input[1];
    console.log("[", first, second, "l");
    _a = [second, first], first = _a[0], second = _a[1];
    console.log("[", first, second, "]");
    function f(_a) {
        var first = _a[0], second = _a[1];
        console.log("[", first, second, "]");
    }
    f([1, 2]);
    // using ... syntax
    var _b = [1, 2, 3, 4], first2 = _b[0], rest = _b.slice(1);
    console.log("first2:", first2);
    console.log("rest:", rest);
    //
    var first3 = [1, 2, 3, 4][0];
    console.log('first3:', first3); // outputs 1
    var _c = [1, 2, 3, 4], second2 = _c[1], fourth = _c[3];
    console.log('second2:', second2, fourth);
    var o = {
        a: "foo",
        b: 12,
        c: "bar"
    };
    var a = o.a, b = o.b;
    console.log(a, b); // foo 12o
    (_d = { a: "baz", b: 101 }, a = _d.a, b = _d.b);
    console.log(a, b); // baz 101
    var x = o.x, passthrough = __rest(o, ["x"]);
    var total = passthrough.b + passthrough.c.length;
    console.log(total); // 15
    // default value
    function keepWholeObject(wholeObject) {
        var a = wholeObject.a, _a = wholeObject.b, b = _a === void 0 ? 1001 : _a;
        return { a: a, b: b };
    }
    console.log('==', keepWholeObject({ a: "hi", b: 28 }));
    console.log('==', keepWholeObject({ a: "hix" }));
    function ff(_a) {
        var _b = _a === void 0 ? { a: "x", b: 0 } : _a, a = _b.a, b = _b.b;
        console.log('hi', a, b);
    }
    ff();
    ff({ a: 'mulder' });
    ff({ a: 'mulder', b: 28 });
    var first_1 = [1, 2];
    var second_1 = [3, 4];
    var bothPlus = [0].concat(first_1, second_1, [5]);
    console.log(bothPlus);
    var defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
    var search = __assign({}, defaults, { food: "rich" });
    console.log(search);
    var search2 = __assign({ food: "rich" }, defaults);
    console.log(search2);
    var _a, _d;
})();
