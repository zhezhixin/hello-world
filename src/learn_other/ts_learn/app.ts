
//基本类型 ,使用类型number，string，boolean，object和symbol全小写
//布尔值
let isDone: boolean = false;
//数
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
//let big: bigint = 100n;BigInt literals are not available when targeting lower than ES2020.
//字符串
let color: string = "blue"
color = 'red';
let fullName: string = 'bob bobbington';
let sentence: string = `hello, my name is ${fullName}. 
i'll be ${decimal + 1} years old next month.`;

let sentence2: string = "hello, my name is " + fullName + ".\n" +
    "I'll be " + (decimal + 1) + ' years old next month.';

console.log(sentence)
console.log(sentence2)

//数组
let list: number[] = [1, 2, 3];
let list2: Array<number> = [2, 3, 4]

//元组
let x: [string, number]
x = ['hello', 99] //0k
// x = [10,'hello'] //Type 'string' is not assignable to type 'number'.

//枚举
enum Color {
    Red,
    Green,
    Blue
}
let c: Color = Color.Green; //c=1

//unknown该类型告诉编译器和将来的读者该变量可以是任何变量
let notSure: unknown = 4;
notSure = 'maybe a string instead';
// OK, definitely a boolean
notSure = false;
console.log(notSure)
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
let looselyTyped: any = 4;
looselyTyped.toFixed();//OK, toFixed exists (but the compiler doesn't check)

let stricklyTyped: unknown = 4;
// stricklyTyped.toFixed(); //Property 'toFixed' does not exist on type 'unknown'.

//void 用于标识方法返回值的类型，表示该方法没有返回值。空洞 根本没有任何类型。您可能通常将其视为不返回值的函数的返回类型：
function warnUser(): void {
    console.log('this is my warning message.')
}
//声明类型的变量void没有用，在--strictNullChecks未指定的情况下,因为只能分配null或undefined
let unusable: void = undefined;
unusable = null;

let u: undefined = undefined;
let n: null = null;


//数独
function makeRow(v = 0) {
    const array = new Array(9)
    array.fill(v);
    return array
}

function makeMatrix(v = 0) {
    return Array.from({ length: 9 }, () => makeRow(v))
}

const am = makeMatrix();
am[0][1] = 2;
console.log(am)

// Fisher-yates 洗牌算法
function shuffle(array) {
    const endIndex = array.length - 2;
    for (let i = 0; i <= endIndex; i++) {
        const j = i + Math.floor(Math.random() * (array.length - i));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


//函数可选参数
function buildName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
let result2 = buildName("Bob");

//函数默认参数
function calculate_discount(price: number, rate: number = 0.50) {
    var discount = price * rate;
    console.log("计算结果: ", discount);
}
calculate_discount(1000)
calculate_discount(1000, 0.30)

//函数剩余参数。假如我们不知道要向函数传入多少个参数，这时候我们就可以使用剩余参数来定义。
function ca3(...l: number[]) {
    let res: number = 0
    for (let i of l) {
        res += i
    }
    console.log(res)
}

function ca4(l) {
    let res: number = 0
    for (let i of l) {
        res += i
    }
    console.log(res)
}

ca3(1, 2, 3, 4);
ca4([1, 2, 3, 4, 5]);

//匿名函数自调用,***注意** 前面的代码后面必须加分号; 否则会报错
(function (str: string) {

    console.log('匿名函数自调用：',str);

})('hello');


//计算整数以内的素数
function su(n: number) {
    let res = [2]
    let aArray = Array.from({ length: n + 1 - 3 }, (x, i) => i + 3)
    // console.log(aArray)
    for (let i of aArray) {
        let bl = true;
        let bArray = Array.from({ length: i - 2 }, (x, y) => (y + 2))
        for (let j of bArray) {
            if (i % j == 0) {
                bl = false;
                break
            }
        }
        if (bl == true) {
            res.push(i)
        }
    }
    console.log(res)
}
su(20)


function su2(n: number) {
    let res = [2]
    for (let i = 3; i <= n; i++) {
        let bl = true;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                bl = false;
                break
            }
        }
        if (bl == true) {
            res.push(i)
        }
    }
    console.log(res)
}
su2(20);



// 这里出现6 6 6 6 6，是因为js 作用域缺陷导致的。
// 缺陷是什么？我们需要更多的闭包作用域，特别是在循环的过程中每个迭代都需要一个闭包作用域,这里是全局作用域
// C 不会出现这种问题，因为它有块作用域
var l = [];
for (var i = 1; i <= 5; i++) {
    l.push(function () { //https://www.imooc.com/article/80117  push函数源码里并没有执行function(){return i}，也就是没有调用匿名函数，所以这不是回调函数
        return i
    })
}
i= 99;
for (let i of l) {
    console.log('function(){return i}函数里的i 是全局作用域里的i ',i()); //99 99 99 99 99
}

// 当一个函数满足以下两点时，就可以称之为回调函数（callback ）。

// 1、这个函数作为参数传递给另外一个函数。
// 2、这个函数会在未来某个时间点（条件得到满足时或执行流到达时）被调用。

// 例如事件、Ajax（XMLHttpRequest）、setTimeout / setInterval 和 Promise 本身就是异步任务源，
// 因此回调函数也被异步调用。

//在所有任务完成后执行A(i) 6 6 6 6 6
var A = function(x) { console.log(x) };
for (var i = 1; i <= 5; i++) {
    setTimeout(() => {
        A(i) // 本质还是定义，还没有在延迟函数中调用
    },3000);
}

// 如果回调函数是放在一段程序的最后去执行，那是利用了JavaScript
// 本身的单线程缘故，属于同步任务。

function play(x:number,y:number, afunc) {
   
    console.log('i am in play');
    var c = x+y;
    afunc(c)
}
function todo(x:number){
    console.log('i am todo:', x)
}
for(var j= 1;j<=5;j++){
    play(j,j+1, todo) //同步任务，和普通函数一样，按照顺序执行
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

(function(callback){
    console.log(2);
    callback();
    console.log(3);
})(fn);

console.log(4);
fn();
console.log(5)

function fn(){
    let arr = Array(1000000);
    arr.fill(1);
    console.log(arr.reduce((a,b)=>a+b));
}

//回调函数的应用（异步获取数据），
function getAge(name: string){ 
    let age = 10;//假设这个getAge 是个异步任务，获取age 是一个异步方法
    return age;
}
function html(){
    let s = ``;
    let age = getAge('Tom');
    s = 'the age of Tom is: '+ age //可能getAge没有执行完，还没有获取age 的值，**同步函数并不存在这个问题
    console.log(s)
}
html();


function getAge3(n:string, cal){
    let age = 10; //因为这里【假设】getAge3是类似Ajax 的异步任务，所以会在执行得到数据后再执行回调函数cal（age)
    cal(age);
}
function prints(age:number){
    let s = ``;
    s = 'the age of Tom is: '+ age;
    console.log(s)
}
function html3(){
    getAge3('Tom', prints);
}
html3();




//函数重载
// 5、ts函数重载 （比较特殊）
 
// java中方法的重载：重载指的是两个或者两个以上同名函数，但它们的参数不一样，这时会出现函数重载的情况。
// typescript中的重载：通过为同一个函数提供多个函数类型定义来试下多种功能的目的。
//ts为了兼容es5 以及 es6 重载的写法和java中有区别。
 
 
//es5中若出现同名方法，后声明的会覆盖之前声明的(前声明的方法失效)
/*
    function css(config){
    }
    function css(config,value){
    }
*/
 
 
//ts中的重载
 
//下面的两行函数声明，指明disp函数接收的参数s可为string或(number,string)类型

function disp(s1:string):void;
function disp(n1:number, s1:string):void;

function disp(x:any, y? :any):void {
    console.log(x);
    console.log(y);
}
disp('abc');//"abc" undefined  
disp(2,'s') //2 's'
// disp(3)   //错误写法 ts编译报错
// disp(true);    //错误写法 ts编译报错

var month = 0 
if( month<=0 || month >12) { 
    month = Number.NaN 
    console.log("月份是："+ month) //"月份是：NaN"
} else { 
    console.log("输入月份数值正确。") 
}

var str1 = 'google baidu souhu';
var str2 = 'alibaba tecent';
var str3 = str1.concat(str2) 

console.log(str3) //"google baidu souhualibaba tecent" 
console.log(str1,str2) //"google baidu souhu",  "alibaba tecent" 

console.log(str1.indexOf('e ')) //5

var str="The rain in SPAIN stays mainly in the plain"; 
var ren = str.match(/ain/g)  
console.log(ren) //["ain", "ain", "ain"] 

var re = /(\w+)\s(\w+)/;
var newstr = str.replace(re, "$2, $1")  
console.log(newstr) //"rain, The in SPAIN stays mainly in the plain"

console.log(str.slice(0,4)) //"The "

console.log(str.substring(1,2));   // "h" 
console.log(str.substring(0, 10)); // "The rain i"
console.log(str.substring(5));     // "ain in SPAIN stays mainly in the plain"

console.log(str.toUpperCase()) //"THE RAIN IN SPAIN STAYS MAINLY IN THE PLAIN" 
console.log(str.toLocaleLowerCase( ));  // "the rain in spain stays mainly in the plain" 
console.log(str) //"The rain in SPAIN stays mainly in the plain"


var sites:string[] = ['sf', 'sfsfw'];
var nli: number[] = [2,43,65];
var nli2:number[] = new Array(4);
for (var i = 0; i < nli2.length; i++){
    nli2[i] = i+2;
    console.log(nli2[i]) //2 3 4 5
}

//数组解构
var n2:number[] = [12,31];
var [x1,y] = n2;
console.log(x1); //12
console.log(y) //31

function isBigEnough(element:number, index:number, array:number[]) { 
        return (element >= 10); 
} 
        
var passed = [12, 5, 8, 130, 44].every(isBigEnough); 
console.log( passed ); // false

var retval = [12, 5, 8, 1, 4].some(isBigEnough); 
console.log( +retval );  // true          

var passed2 = [12, 5, 8, 130, 44].filter(isBigEnough); 
console.log( passed2 ); // [12,130,44]

var total= [1,2,3].reduce((a,b) => {return a*b;})
console.log(total) //6

console.log([0,1,2,3].reverse())  //[3,2,1,0]

console.log([4,1,2,3].shift()) //4 删除并返回数组的第一个元素。
console.log([4,1,2,3].pop()) //3 删除并返回数组的最后一个元素。


var arr = ["orange", "mango", "banana", "sugar", "tea"]; 
console.log( arr.slice( 1, 2) );  // ["mango"] 
console.log( arr.slice( 1, 3) );  // ["mango", "banana"] 

var arr = new Array("orange", "mango", "banana", "sugar"); 
var sorted = arr.sort(); 
console.log(arr, sorted );  // ["banana", "mango", "orange", "sugar"],["banana", "mango", "orange", "sugar"]

var removed= arr.splice(2,0,'water','678') //startindex, deletenumber, 添加的元素
console.log(removed,arr) //[], ["banana", "mango", "water", "orange", "678", "sugar"] 

var str2 = arr.toString(); //把数组转换为字符串，并返回结果。
console.log(str2)//"banana,mango,water,678,orange,sugar" 

var length = arr.unshift('999'); // 向数组的开头添加一个或更多元素，并返回新的长度。
console.log(arr, length)//["999", "banana", "mango", "water", "678", "orange", "sugar"],  7 



//Map对象

let myMap = new Map([
    ['key1','value1'],
    ['key2','value2']
]);
console.log(myMap.set('google','1')) //Map: {} 设置 Map 对象
console.log(myMap) //Map: {}
console.log(myMap.get('key1')) //"value1" 如果不存在，则返回 undefined，否则返回'value1
console.log(myMap.has('key1')) // true 判断 Map 中是否包含键对应的值 
console.log(myMap.size) //3
console.log(myMap.delete('key2')) //true
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
function disp2(s:number | number[]){
    if(typeof s == 'number'){
        console.log(s)
    }else{
        for(let i of s){
            console.log(i)
        }
    }
}
disp2(1);//1
disp2([1,2,3]) //1 2 3


//箭头函数this指向
var obj1 = {
    a:function setthis(n:number) {
        setTimeout(function(){
            console.log(this)
        },n)
    }
}
obj1.a(1000); //window
var obj2 = {
    a:function setthis2(n:number) {
        setTimeout(()=>{
            console.log(this)
        },n)
    }
}
obj2.a(2000); //a 箭头函数定义时的this


//interface 接口 限制传入的对象的属性。我们的对象实际上具有比此更多的属性，但是编译器仅检查是否至少存在所需的属性


interface Person {
    f: string;
    l: string;
}
function greeter(person: Person) {
    return 'hello,' + person.f + ' ' + person.l;
}

// 定义类的关键字为 class，后面紧跟类名，类可以包含以下几个模块（类的数据成员）：
// 字段 − 字段是类里面声明的变量。字段表示对象的有关数据。
// 构造函数 − 类实例化时调用，可以为类的对象分配内存。
// 方法 − 方法为对象要执行的操作。
class Student {
    full: string;
    constructor(
        public f: string,
        public m: string,
        public l: string
    ) {
        this.full = f + ' ' + m + ' ' + l;
    }
}

let user = { f: 'jane', l: 'User' }
console.log(greeter(user)) //hello,jane User

let user2 = new Student('jane', 'M.', 'User');
console.log(greeter(user2)) //hello,jane User
console.log(user2.full) // jane M. User

//类class的继承
class Junior extends Student{
    disp():void {
        console.log('I am a junior. my name is '+ this.full)
    }
}
let user3 = new Junior('Alice','Mrs.','Zhou')
user3.disp()

// 需要注意的是子类只能继承一个父类，TypeScript 不支持继承多个类，但支持多重继承
// 类继承后，子类可以对父类的方法重新定义，这个过程称之为方法的重写。
class Leaf extends Junior{
    disp():void{
        super.disp() // 其中 super 关键字是对父类的直接引用，该关键字可以引用父类的属性和方法。也可不用，直接覆盖掉junior的disp()
        console.log('多重继承junior 和 Student 类结果:' + this.full)
    }
}
var user4 = new Leaf('Bad','Mr.','Zhu')
user4.disp()


function printlabel(labeledObj: { label: string }) {
    console.log(labeledObj.label)
}
let myObj = { size: 10, label: 'size 10 object' };
printlabel(myObj) //size 10 object

interface LabeledValue {
    label: string
}
function printlabel2(labeledObj: LabeledValue) {
    console.log(labeledObj.label)
}
printlabel2(myObj) //size 10 object

//类型可选接口属性
interface SquareConfig {
    color?: string;
    width?: number;
}
function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = { color: 'white', area: 100 };
    if (config.color) {
        newSquare.color = config.color
    }
    if (config.width) {
        newSquare.area = config.width * config.width
    }
    return newSquare
}
let mySquare = createSquare({ color: 'black' })
console.log(mySquare) // { area: 100 color: "black" }

//只读属性
interface Point {
    readonly x: number;
    readonly y: number;
}
let p: Point = { x: 10, y: 20 }
// p.x = 5 //Cannot assign to 'x' because it is a read-only property.

let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
// ro[0] = 12; //Index signature in type 'readonly number[]' only permits reading.
//即使将整个ReadonlyArray数组分配回普通数组也是非法的。但是，您仍然可以使用类型断言来覆盖它：
// a = ro; //The type 'readonly number[]' is 'readonly' and cannot be assigned to the mutable type 'number[]'.
a = ro as number[];

//接口和数组
interface namelist {
    [index:number]: string
}
// var list3:namelist = ['john', 1, 'Bran'] //Type 'number' is not assignable to type 'string'.
var list3:namelist = ['john', 'Bran']

//接口和继承

interface Person2 { 
    age:number 
} 
//单继承
interface Musician extends Person2 { 
    instrument:string 
} 

var drummer:Musician = {age:27,instrument:'Drums'}

console.log("年龄:  "+drummer.age)
console.log("喜欢的乐器:  "+drummer.instrument)

//接口多继承.js中不支持多重继承，但是可以用接口来实现，这样就要用到implements，
//继承只能继承一个类，但implements可以实现多个接口，用逗号分开就行
interface Person3 {
    Door:number
}
interface Child extends Person2, Person3 {};
var Iobj: Child = {age:10,Door:404}
console.log(Iobj.age, Iobj.Door)

class StaticMem {  
    static num:number; 
    str1:string = 'hello';
    private str2:string = 'world';
    static disp():void { 
       console.log("num 值为 "+ StaticMem.num) 
    } 
 } 
  
 StaticMem.num = 12     // 初始化静态变量
 StaticMem.disp()       // 调用静态方法
 
 var obj = new StaticMem();
 var isStatic = obj instanceof StaticMem;
 console.log('obj 对象是 StaticMem 类实例化来的吗？', isStatic)     // true
 
 console.log(obj.str1)     // 可访问 
 // console.log(obj.str2)   // 编译错误， str2 是私有的
 // obj.num // 报错，静态变量是类的变量，对象本身并没有
 

 // 类可以实现接口，使用关键字 implements，并将 interest 字段作为类的属性使用。
 interface Iloan {
     interest: number
 }
 class AgriLoan implements Iloan {
     interest:number;
     rebate:number;
 
     constructor(interest:number, rebate:number) {
         this.interest = interest;
         this.rebate = rebate;
     }
 }
 
 var obj3 = new AgriLoan(10,2);
 console.log('利润为：'+obj3.interest+'，抽成为：'+obj3.rebate)

// 鸭子类型允许我们使用任何提供所需方法的对象，而不需要迫使它成为一个子类。
 var duck = function(){    //鸭子
    this.duckSinging = function(){
        return "嘎";
    }
}

var chicken = function(){    //鸡
    this.duckSinging = function(){
        return "嘎";
    }
}

var choir = [];    //合唱团

var joinChoir = function(animal){    //加入合唱团的方法
    if(animal && animal.duckSinging() === "嘎"){
        choir.push(animal);
        console.log("恭喜加入合唱团");
    }
}

for(var i =0;i<999;i++){    //加入999只鸭子
    joinChoir(new duck());
}
joinChoir(new chicken());

console.log(choir.length);    //1000    现在凑齐了1000只可以嘎嘎叫的动物，不用管它是不是鸭子


//另一个例子自己理解的,关于鸭子类型
interface IPoint {
    x:number;
    y:number
}
class II{
    x: number;
    y: number;
    constructor(x:number,y:number){
        this.x = x;
        this.y = y;
    }
}
function addPoint (p1:IPoint, p2:IPoint):IPoint {
    var x = p1.x + p2.x;
    var y = p1.y + p2.y;
    return {x: x, y: y};
}
var p1:IPoint = {x:2,y:4};
var p2:IPoint = {x:5,y:3}
var newPoint = addPoint(p1,p2);
console.log(newPoint)
var p3 = new II(2,4)
var p4 = new II(5,3)
var newPoint1 = addPoint(p3,p4);
console.log(newPoint1)

// 接口只声明成员方法，不做实现。
// 类声明并实现方法。https://segmentfault.com/q/1010000005648974
// (1) extends是继承父类，只要那个类不是声明为final或者那个类定义为abstract的就能继承。
//（2）java,js中不支持多重继承，但是可以用接口来实现，这样就要用到implements，继承只能继承一个类，但implements可以实现多个接口，用逗号分开就行

// ts中的interface不同于其它强类型语言的一点是，interface中还可以定义变量，
//这就使得interface还可以充当一些model对象的基类使用，而并非通常的用来定义一些行为。

// class Article {
//     public getContent():string{
//         return 'i am a article.'
//     }
// }

// function print(obj: Article):void {
//     console.log(obj.getContent());
// }
// let a1 = new Article();
// print(a1) //'i am a article.'

//但是这样的话print函数不就只能打印Article类的对象了吗，
//如果我想要让它能够打印不止一个类的对象呢？我如何保证他们都有getContent方法？
//这时候就可以用到接口，来声明一个getContent方法.

interface ContentInterface {
    getContent(): string;
}
class Article1 implements ContentInterface {
    public getContent(): string {
        return 'i am a article1.';
    }
}
class Passage implements ContentInterface {
    public getContent():string {
        return 'i am a passage.'
    }
}
function print2(obj: ContentInterface):void {
    console.log(obj.getContent());
}

let a2 = new Article1();
let b1 = new Passage();
print2(a2); //'i am a article1.'
print2(b1); //'i am a passage.'

