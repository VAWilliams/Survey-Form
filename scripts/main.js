
var app = angular.module('form', []);
app.controller('formController', function($scope) {
    var vm = $scope;

    vm.dropdownItemDetails = [
        { text: "Select current role", value: "" },
        { text: "Student", value: "student" },
        { text: "Full Time Job", value: "job" },
        { text: "Full Time Learner", value: "learner" },
        { text: "Prefer Not To Say", value: "notSpecified" }
    ];

    vm.radioButtonItemDetails = [
        { text: "Definitely", value: "definitely" },
        { text: "Maybe", value: "maybe" },
        { text: "Unsure", value: "unsure" }

    ];

    vm.checkboxItemDetails = [
        { label: "Front-end Projects", value: "1" },
        { label: "Back-end Projects", value: "2" },
        { label: "Data Visualization", value: "3" },
        { label: "Challenges", value: "4" },
        { label: "Open Source Community", value: "5" },
        { label: "Gitter help rooms", value: "6" },
        { label: "Videos", value: "7" },
        { label: "City Meetups", value: "8" },
        { label: "Wiki", value: "9" },
        { label: "Forum", value: "10" },
        { label: "Additional Courses", value: "11" }
    ];

});