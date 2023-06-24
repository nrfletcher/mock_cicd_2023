function createPerson(name) {
    var privateAge = 0;

    function increaseAge() {
        privateAge++;
    }

    return {
        getName: function() {
            return name;
        },
        getAge: function() {
            return privateAge;
        },
        happyBirthday: function() {
            increaseAge();
            console.log('Happy birthday ' + name + '!');
        }
    };
}

let person = createPerson('Jack');
person.happyBirthday();