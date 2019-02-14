// typeScript支持JavaScript的新特性，如：基于类的面向对象
class Student { 
    fullName:string;
    constructor ( public firstName: string, public middleName: string, public lastName: string) {
        //构造函数的参数中使用了public等同于创建了同名的成员变量，也就是 public firstName:string和类中声明的fullName:string是一样的
        this.fullName = firstName + " " + middleName + " " + lastName;
    }
}

interface Person {  //接口 此接口用来描述一个拥有firstName和lastName两个字段的对象
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {  
    return "Hello, " + person.firstName + " " + person.lastName;
}

function test(user: string, name: number){ //类型注解  
    /* 
    1、为函数或变量添加约束的方式  
    2、尝试删除test函数调用的所有参数。 TypeScript会提示 An argument for 'user' was not provided.（没有提供user的参数）
     使用了非期望个数的参数调用了这个函数。
     在这两种情况中，TypeScript提供了静态的代码分析，它可以分析代码结构和提供的类型注解。
    */
    return '我是' + user + name
}
let users = '谁';
let name1 = 666 ;
document.body.innerHTML = test(users,name1);

// let user = {firstName :'jack', lastName:'jhon'}
let user = new Student("张", "mmm ", "三丰");

document.body.innerHTML = greeter(user);