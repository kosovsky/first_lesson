/**
 * Created by yurii.kosovskyi on 04.04.2016.
 */

//Task 1: variables
var name = 'Yurii',
    email = 'ykosovsky@gmail.com',
    age = 31,
    isAdmin = true;

//Task 2 and Task 3: Object user (Compatible with ECMA6)
var user = {name:name,email:name,age:name,isAdmin:name};

//Task 3: Not compatible with ECMA6
//window.user.name = name;
//window.user.email = email;
//window.user.age = age;
//window.user.isAdmin = isAdmin;

//Task 4: Reverse boolean
window.user.isAdmin = !window.user.isAdmin;

//Task 5: Increment value
window.user.age += 1;

//Task 6: Adding value
window.user.address = {city:'Kyiv',street:'Pavla Tychiny Ave',appartment:'Office A'}

//Task 7: Console
console.log(user);