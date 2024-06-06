const asnulsabuns = document.querySelectorAll('.nav-link dropdown-toggle text-white');

console.log(asnulsabuns);

let body = document.querySelector('body');
const changeBgBtn = document.querySelector('.change-bg-btn');

changeBgBtn.addEventListener('click', () => {
    let index = document.body.id
    switch (index) {
        case '1':
            return body.style.backgroundImage = "url('/static/deps/images/bg-image.jpg')";
        case '2':
            return body.style.backgroundImage = "url(\"{\%static\'\/deps\/images\/bg-image0.jpg\' %}\")";
        case '3':
            return body.style.backgroundImage = "url(\"{\%static\'\/deps\/images\/bg-image2.jpg\' %}\")";
    }
})
