var teachersDom = document.querySelectorAll('.teachers');

document.querySelector('.instructor').addEventListener('mouseover', () => {


    if (teachersDom % 2 == 0) {
        teachersDom.classList.add('.teachers-details')
    }

})