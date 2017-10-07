'use strict';

//ZAD.1//

document.addEventListener('DOMContentLoaded', function () {
    var forDropdown = document.querySelector('.for-dropdown');
    var contents = document.querySelector('.dropdown');

    forDropdown.addEventListener('mouseover', function () {
        contents.style.display = "block";
    });

    forDropdown.addEventListener('mouseout', function () {
        contents.style.display = "none";
    });
});
