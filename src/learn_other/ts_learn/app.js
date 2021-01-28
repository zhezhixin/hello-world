var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//基本类型 ,使用类型number，string，boolean，object和symbol全小写
//布尔值
var isDone = false;
//数
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
//let big: bigint = 100n;BigInt literals are not available when targeting lower than ES2020.
//字符串
var color = "blue";
color = 'red';
var fullName = 'bob bobbington';
var sentence = "hello, my name is " + fullName + ". \ni'll be " + (decimal + 1) + " years old next month.";
var sentence2 = "hello, my name is " + fullName + ".\n" +
    "I'll be " + (decimal + 1) + ' years old next month.';
console.log(sentence);
console.log(sentence2);
//数组
var list = [1, 2, 3];
var list2 = [2, 3, 4];
//元组
var x;
x = ['hello', 99]; //0k
// x = [10,'hello'] //Type 'string' is not assignable to type 'number'.
//枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green; //c=1
//unknown该类型告诉编译器和将来的读者该变量可以是任何变量
var notSure = 4;
notSure = 'maybe a string instead';
// OK, definitely a boolean
notSure = false;
console.log(notSure);
// //以下
// declare const maybe:unknown;
// // const aNumber:number = maybe; //Type 'unknown' is not assignable to type 'number'.
// if(maybe === true) {
//    const aBoolean: boolean = maybe;
//    // const aString:string = maybe; //Type 'boolean' is not assignable to type 'string'.
// }
//any 任何 退出的类型检查,any允许您访问任意属性
// declare function getValue(key:string): any;
// // OK, return value of 'getValue' is not checked
// const str: string = getValue('mystring');
var looselyTyped = 4;
looselyTyped.toFixed(); //OK, toFixed exists (but the compiler doesn't check)
var stricklyTyped = 4;
// stricklyTyped.toFixed(); //Property 'toFixed' does not exist on type 'unknown'.
//void 用于标识方法返回值的类型，表示该方法没有返回值。空洞 根本没有任何类型。您可能通常将其视为不返回值的函数的返回类型：
function warnUser() {
    console.log('this is my warning message.');
}
//声明类型的变量void没有用，在--strictNullChecks未指定的情况下,因为只能分配null或undefined
var unusable = undefined;
unusable = null;
var u = undefined;
var n = null;
//数独
function makeRow(v) {
    if (v === void 0) { v = 0; }
    var array = new Array(9);
    array.fill(v);
    return array;
}
function makeMatrix(v) {
    if (v === void 0) { v = 0; }
    return Array.from({ length: 9 }, function () { return makeRow(v); });
}
var am = makeMatrix();
am[0][1] = 2;
console.log(am);
// Fisher-yates 洗牌算法
function shuffle(array) {
    var _a;
    var endIndex = array.length - 2;
    for (var i_1 = 0; i_1 <= endIndex; i_1++) {
        var j_1 = i_1 + Math.floor(Math.random() * (array.length - i_1));
        _a = [array[j_1], array[i_1]], array[i_1] = _a[0], array[j_1] = _a[1];
    }
    return array;
}
//函数可选参数
function buildName(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
var result2 = buildName("Bob");
//函数默认参数
function calculate_discount(price, rate) {
    if (rate === void 0) { rate = 0.50; }
    var discount = price * rate;
    console.log("计算结果: ", discount);
}
calculate_discount(1000);
calculate_discount(1000, 0.30);
//函数剩余参数。假如我们不知道要向函数传入多少个参数，这时候我们就可以使用剩余参数来定义。
function ca3() {
    var l = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        l[_i] = arguments[_i];
    }
    var res = 0;
    for (var _a = 0, l_2 = l; _a < l_2.length; _a++) {
        var i_2 = l_2[_a];
        res += i_2;
    }
    console.log(res);
}
function ca4(l) {
    var res = 0;
    for (var _i = 0, l_3 = l; _i < l_3.length; _i++) {
        var i_3 = l_3[_i];
        res += i_3;
    }
    console.log(res);
}
ca3(1, 2, 3, 4);
ca4([1, 2, 3, 4, 5]);
//匿名函数自调用,***注意** 前面的代码后面必须加分号; 否则会报错
(function (str) {
    console.log('匿名函数自调用：', str);
})('hello');
//计算整数以内的素数
function su(n) {
    var res = [2];
    var aArray = Array.from({ length: n + 1 - 3 }, function (x, i) { return i + 3; });
    // console.log(aArray)
    for (var _i = 0, aArray_1 = aArray; _i < aArray_1.length; _i++) {
        var i_4 = aArray_1[_i];
        var bl = true;
        var bArray = Array.from({ length: i_4 - 2 }, function (x, y) { return (y + 2); });
        for (var _a = 0, bArray_1 = bArray; _a < bArray_1.length; _a++) {
            var j_2 = bArray_1[_a];
            if (i_4 % j_2 == 0) {
                bl = false;
                break;
            }
        }
        if (bl == true) {
            res.push(i_4);
        }
    }
    console.log(res);
}
su(20);
function su2(n) {
    var res = [2];
    for (var i_5 = 3; i_5 <= n; i_5++) {
        var bl = true;
        for (var j_3 = 2; j_3 < i_5; j_3++) {
            if (i_5 % j_3 == 0) {
                bl = false;
                break;
            }
        }
        if (bl == true) {
            res.push(i_5);
        }
    }
    console.log(res);
}
su2(20);
// 这里出现6 6 6 6 6，是因为js 作用域缺陷导致的。
// 缺陷是什么？我们需要更多的闭包作用域，特别是在循环的过程中每个迭代都需要一个闭包作用域,这里是全局作用域
// C 不会出现这种问题，因为它有块作用域
var l = [];
for (var i = 1; i <= 5; i++) {
    l.push(function () {
        return i;
    });
}
i = 99;
for (var _i = 0, l_1 = l; _i < l_1.length; _i++) {
    var i_6 = l_1[_i];
    console.log('function(){return i}函数里的i 是全局作用域里的i ', i_6()); //99 99 99 99 99
}
// 当一个函数满足以下两点时，就可以称之为回调函数（callback ）。
// 1、这个函数作为参数传递给另外一个函数。
// 2、这个函数会在未来某个时间点（条件得到满足时或执行流到达时）被调用。
// 例如事件、Ajax（XMLHttpRequest）、setTimeout / setInterval 和 Promise 本身就是异步任务源，
// 因此回调函数也被异步调用。
//在所有任务完成后执行A(i) 6 6 6 6 6
var A = function (x) { console.log(x); };
for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
        A(i); // 本质还是定义，还没有在延迟函数中调用
    }, 3000);
}
// 如果回调函数是放在一段程序的最后去执行，那是利用了JavaScript
// 本身的单线程缘故，属于同步任务。
function play(x, y, afunc) {
    console.log('i am in play');
    var c = x + y;
    afunc(c);
}
function todo(x) {
    console.log('i am todo:', x);
}
for (var j = 1; j <= 5; j++) {
    play(j, j + 1, todo); //同步任务，和普通函数一样，按照顺序执行
}
// function e(m,n,Callback){  
//     var d = m+n;  
//     alert("一个从父函数e 产生的参数将要被传递给回调函数 ，这个参数是:"+d);  
//     //这里才写你想调用的函数---参数要正确  
//     Callback(d);   
// }  
// function callback(data){  
//         alert("我是回调函数，我的名字叫:callback ,我接收到来自父函数的参数，参数是:"+data);   
// }
// e(1,2,callback)  
// 回调函数本身并没有同步和异步之分，同步或异步主要取决于发布回调函数的任务源是什么。
// 例如事件、Ajax（XMLHttpRequest）、setTimeout / setInterval 和 Promise 本身就是异步任务源，因此回调函数也被异步调用。
// 如果回调函数是放在一段程序的最后去执行，那是利用了JavaScript本身的单线程缘故，属于同步任务。
//以下顺序： 1,2,1000000,3,4 同步执行回调函数 https://www.imooc.com/article/278530
console.log(1);
(function (callback) {
    console.log(2);
    callback();
    console.log(3);
})(fn);
console.log(4);
fn();
console.log(5);
function fn() {
    var arr = Array(1000000);
    arr.fill(1);
    console.log(arr.reduce(function (a, b) { return a + b; }));
}
//回调函数的应用（异步获取数据），
function getAge(name) {
    var age = 10; //假设这个getAge 是个异步任务，获取age 是一个异步方法
    return age;
}
function html() {
    var s = "";
    var age = getAge('Tom');
    s = 'the age of Tom is: ' + age; //可能getAge没有执行完，还没有获取age 的值，**同步函数并不存在这个问题
    console.log(s);
}
html();
function getAge3(n, cal) {
    var age = 10; //因为这里【假设】getAge3是类似Ajax 的异步任务，所以会在执行得到数据后再执行回调函数cal（age)
    cal(age);
}
function prints(age) {
    var s = "";
    s = 'the age of Tom is: ' + age;
    console.log(s);
}
function html3() {
    getAge3('Tom', prints);
}
html3();
function disp(x, y) {
    console.log(x);
    console.log(y);
}
disp('abc'); //"abc" undefined  
disp(2, 's'); //2 's'
// disp(3)   //错误写法 ts编译报错
// disp(true);    //错误写法 ts编译报错
var month = 0;
if (month <= 0 || month > 12) {
    month = Number.NaN;
    console.log("月份是：" + month); //"月份是：NaN"
}
else {
    console.log("输入月份数值正确。");
}
var str1 = 'google baidu souhu';
var str2 = 'alibaba tecent';
var str3 = str1.concat(str2);
console.log(str3); //"google baidu souhualibaba tecent" 
console.log(str1, str2); //"google baidu souhu",  "alibaba tecent" 
console.log(str1.indexOf('e ')); //5
var str = "The rain in SPAIN stays mainly in the plain";
var ren = str.match(/ain/g);
console.log(ren); //["ain", "ain", "ain"] 
var re = /(\w+)\s(\w+)/;
var newstr = str.replace(re, "$2, $1");
console.log(newstr); //"rain, The in SPAIN stays mainly in the plain"
console.log(str.slice(0, 4)); //"The "
console.log(str.substring(1, 2)); // "h" 
console.log(str.substring(0, 10)); // "The rain i"
console.log(str.substring(5)); // "ain in SPAIN stays mainly in the plain"
console.log(str.toUpperCase()); //"THE RAIN IN SPAIN STAYS MAINLY IN THE PLAIN" 
console.log(str.toLocaleLowerCase()); // "the rain in spain stays mainly in the plain" 
console.log(str); //"The rain in SPAIN stays mainly in the plain"
var sites = ['sf', 'sfsfw'];
var nli = [2, 43, 65];
var nli2 = new Array(4);
for (var i = 0; i < nli2.length; i++) {
    nli2[i] = i + 2;
    console.log(nli2[i]); //2 3 4 5
}
//数组解构
var n2 = [12, 31];
var x1 = n2[0], y = n2[1];
console.log(x1); //12
console.log(y); //31
function isBigEnough(element, index, array) {
    return (element >= 10);
}
var passed = [12, 5, 8, 130, 44].every(isBigEnough);
console.log(passed); // false
var retval = [12, 5, 8, 1, 4].some(isBigEnough);
console.log(+retval); // true          
var passed2 = [12, 5, 8, 130, 44].filter(isBigEnough);
console.log(passed2); // [12,130,44]
var total = [1, 2, 3].reduce(function (a, b) { return a * b; });
console.log(total); //6
console.log([0, 1, 2, 3].reverse()); //[3,2,1,0]
console.log([4, 1, 2, 3].shift()); //4 删除并返回数组的第一个元素。
console.log([4, 1, 2, 3].pop()); //3 删除并返回数组的最后一个元素。
var arr = ["orange", "mango", "banana", "sugar", "tea"];
console.log(arr.slice(1, 2)); // ["mango"] 
console.log(arr.slice(1, 3)); // ["mango", "banana"] 
var arr = new Array("orange", "mango", "banana", "sugar");
var sorted = arr.sort();
console.log(arr, sorted); // ["banana", "mango", "orange", "sugar"],["banana", "mango", "orange", "sugar"]
var removed = arr.splice(2, 0, 'water', '678'); //startindex, deletenumber, 添加的元素
console.log(removed, arr); //[], ["banana", "mango", "water", "orange", "678", "sugar"] 
var str2 = arr.toString(); //把数组转换为字符串，并返回结果。
console.log(str2); //"banana,mango,water,678,orange,sugar" 
var length = arr.unshift('999'); // 向数组的开头添加一个或更多元素，并返回新的长度。
console.log(arr, length); //["999", "banana", "mango", "water", "678", "orange", "sugar"],  7 
//Map对象
var myMap = new Map([
    ['key1', 'value1'],
    ['key2', 'value2']
]);
console.log(myMap.set('google', '1')); //Map: {} 设置 Map 对象
console.log(myMap); //Map: {}
console.log(myMap.get('key1')); //"value1" 如果不存在，则返回 undefined，否则返回'value1
console.log(myMap.has('key1')); // true 判断 Map 中是否包含键对应的值 
console.log(myMap.size); //3
console.log(myMap["delete"]('key2')); //true
// console.log(myMap.clear()) //undefined  清除 Map
// for(let key of myMap.keys()){
//     console.log(key);
// }
// for (let i of myMap.values()){
//     console.log(i)
// }
// for (let i of myMap.entries()){
//     console.log(i[0], i[1])
// }
// for (let [i,j] of myMap){
//     console.log(i,j)
// }
//联合类型
function disp2(s) {
    if (typeof s == 'number') {
        console.log(s);
    }
    else {
        for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
            var i_7 = s_1[_i];
            console.log(i_7);
        }
    }
}
disp2(1); //1
disp2([1, 2, 3]); //1 2 3
//箭头函数this指向
var obj1 = {
    a: function setthis(n) {
        setTimeout(function () {
            console.log(this);
        }, n);
    }
};
obj1.a(1000); //window
var obj2 = {
    a: function setthis2(n) {
        var _this = this;
        setTimeout(function () {
            console.log(_this);
        }, n);
    }
};
obj2.a(2000); //a 箭头函数定义时的this
function greeter(person) {
    return 'hello,' + person.f + ' ' + person.l;
}
// 定义类的关键字为 class，后面紧跟类名，类可以包含以下几个模块（类的数据成员）：
// 字段 − 字段是类里面声明的变量。字段表示对象的有关数据。
// 构造函数 − 类实例化时调用，可以为类的对象分配内存。
// 方法 − 方法为对象要执行的操作。
var Student = /** @class */ (function () {
    function Student(f, m, l) {
        this.f = f;
        this.m = m;
        this.l = l;
        this.full = f + ' ' + m + ' ' + l;
    }
    return Student;
}());
var user = { f: 'jane', l: 'User' };
console.log(greeter(user)); //hello,jane User
var user2 = new Student('jane', 'M.', 'User');
console.log(greeter(user2)); //hello,jane User
console.log(user2.full); // jane M. User
//类class的继承
var Junior = /** @class */ (function (_super) {
    __extends(Junior, _super);
    function Junior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Junior.prototype.disp = function () {
        console.log('I am a junior. my name is ' + this.full);
    };
    return Junior;
}(Student));
var user3 = new Junior('Alice', 'Mrs.', 'Zhou');
user3.disp();
// 需要注意的是子类只能继承一个父类，TypeScript 不支持继承多个类，但支持多重继承
// 类继承后，子类可以对父类的方法重新定义，这个过程称之为方法的重写。
var Leaf = /** @class */ (function (_super) {
    __extends(Leaf, _super);
    function Leaf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Leaf.prototype.disp = function () {
        _super.prototype.disp.call(this); // 其中 super 关键字是对父类的直接引用，该关键字可以引用父类的属性和方法。也可不用，直接覆盖掉junior的disp()
        console.log('多重继承junior 和 Student 类结果:' + this.full);
    };
    return Leaf;
}(Junior));
var user4 = new Leaf('Bad', 'Mr.', 'Zhu');
user4.disp();
function printlabel(labeledObj) {
    console.log(labeledObj.label);
}
var myObj = { size: 10, label: 'size 10 object' };
printlabel(myObj); //size 10 object
function printlabel2(labeledObj) {
    console.log(labeledObj.label);
}
printlabel2(myObj); //size 10 object
function createSquare(config) {
    var newSquare = { color: 'white', area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: 'black' });
console.log(mySquare); // { area: 100 color: "black" }
var p = { x: 10, y: 20 };
// p.x = 5 //Cannot assign to 'x' because it is a read-only property.
var a = [1, 2, 3, 4];
var ro = a;
// ro[0] = 12; //Index signature in type 'readonly number[]' only permits reading.
//即使将整个ReadonlyArray数组分配回普通数组也是非法的。但是，您仍然可以使用类型断言来覆盖它：
// a = ro; //The type 'readonly number[]' is 'readonly' and cannot be assigned to the mutable type 'number[]'.
a = ro;
// var list3:namelist = ['john', 1, 'Bran'] //Type 'number' is not assignable to type 'string'.
var list3 = ['john', 'Bran'];
var drummer = { age: 27, instrument: 'Drums' };
console.log("年龄:  " + drummer.age);
console.log("喜欢的乐器:  " + drummer.instrument);
;
var Iobj = { age: 10, Door: 404 };
console.log(Iobj.age, Iobj.Door);
var StaticMem = /** @class */ (function () {
    function StaticMem() {
        this.str1 = 'hello';
        this.str2 = 'world';
    }
    StaticMem.disp = function () {
        console.log("num 值为 " + StaticMem.num);
    };
    return StaticMem;
}());
StaticMem.num = 12; // 初始化静态变量
StaticMem.disp(); // 调用静态方法
var obj = new StaticMem();
var isStatic = obj instanceof StaticMem;
console.log('obj 对象是 StaticMem 类实例化来的吗？', isStatic); // true
console.log(obj.str1); // 可访问 
var AgriLoan = /** @class */ (function () {
    function AgriLoan(interest, rebate) {
        this.interest = interest;
        this.rebate = rebate;
    }
    return AgriLoan;
}());
var obj3 = new AgriLoan(10, 2);
console.log('利润为：' + obj3.interest + '，抽成为：' + obj3.rebate);
// 鸭子类型允许我们使用任何提供所需方法的对象，而不需要迫使它成为一个子类。
var duck = function () {
    this.duckSinging = function () {
        return "嘎";
    };
};
var chicken = function () {
    this.duckSinging = function () {
        return "嘎";
    };
};
var choir = []; //合唱团
var joinChoir = function (animal) {
    if (animal && animal.duckSinging() === "嘎") {
        choir.push(animal);
        console.log("恭喜加入合唱团");
    }
};
for (var i = 0; i < 999; i++) { //加入999只鸭子
    joinChoir(new duck());
}
joinChoir(new chicken());
console.log(choir.length); //1000    现在凑齐了1000只可以嘎嘎叫的动物，不用管它是不是鸭子
var II = /** @class */ (function () {
    function II(x, y) {
        this.x = x;
        this.y = y;
    }
    return II;
}());
function addPoint(p1, p2) {
    var x = p1.x + p2.x;
    var y = p1.y + p2.y;
    return { x: x, y: y };
}
var p1 = { x: 2, y: 4 };
var p2 = { x: 5, y: 3 };
var newPoint = addPoint(p1, p2);
console.log(newPoint);
var p3 = new II(2, 4);
var p4 = new II(5, 3);
var newPoint1 = addPoint(p3, p4);
console.log(newPoint1);
var Article1 = /** @class */ (function () {
    function Article1() {
    }
    Article1.prototype.getContent = function () {
        return 'i am a article1.';
    };
    return Article1;
}());
var Passage = /** @class */ (function () {
    function Passage() {
    }
    Passage.prototype.getContent = function () {
        return 'i am a passage.';
    };
    return Passage;
}());
function print2(obj) {
    console.log(obj.getContent());
}
var a2 = new Article1();
var b1 = new Passage();
print2(a2); //'i am a article1.'
print2(b1); //'i am a passage.'
