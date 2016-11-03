/**
 * Created by Boris on 02-Nov-16.
 */
var PersonStatic = true;
Person();
function Person(n, a, m) {

    if(PersonStatic){
        Person.minAge = 18;
        Person.maxAge = 45;
        PersonStatic = false;
    }

    var name =n;
    var age = a;
    var married = m;

    var sName = function (nameValue) {
        name = nameValue;
    };

    var sAge = function (ageValue) {
        age = ageValue;
    };

    var sMarried = function (mValue) {
        married = mValue;
    };

    var gName = function () {
        return name;
    };
    var gAge = function () {
        return age;
    };
    var gMarried = function () {
        return married;
    };

    return {setName : sName,
        setAge: sAge,
        setMarried : sMarried,
        getName : gName,
        getAge: gAge,
        getMarried : gMarried
    }
}