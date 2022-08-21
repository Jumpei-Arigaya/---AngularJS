const app = angular.module('myApp', []);
app.controller('myController', function () {
    this.members = [
        { name: 'Tanaka', age: 36 },
        { name: 'Tanaka', age: 36 },
        { name: 'Tanaka', age: 36 },
        { name: 'Tanaka', age: 36 },
        { name: 'Tanaka', age: 36 }
    ];

    this.onAdd = function () {
        this.members.push({ name: this.name, age: this.selectedAge });
        this.name = '';
    }

    this.onDel = function () {
        for (flg = 0; this.members.length; flg++)
            if (this.members[flg].check) {
                this.members.splice(flg--, 1);
            }
    }

    this.cl = function() {
        this.members.splice(this.fl,1)
        console.log(this.members)
    }

    this.ageList = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
    ];

});