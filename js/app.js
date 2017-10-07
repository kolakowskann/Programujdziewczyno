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

//ZAD.2//
var buttons = document.querySelectorAll('.read-more');

function showHide() {

    var textArea = this.previousElementSibling;

    if (textArea.style.display === 'none' || textArea.style.display === '') {
        textArea.style.display = 'block';
        this.innerHTML = 'MNIEJ <span class="glyphicon glyphicon-chevron-up"></span>';
    } else {
        textArea.style.display = 'none';
        this.innerHTML = 'WIĘCEJ <span class="glyphicon glyphicon-chevron-down"></span>';
    }
}
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', showHide);
}
