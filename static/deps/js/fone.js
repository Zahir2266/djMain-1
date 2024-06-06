const asnulsabuns = document.querySelectorAll('.nav-link dropdown-toggle text-white');
const body = document.querySelector('body');

console.log(asnulsabuns);

asnulsabuns.forEach(function(asnulsabun){
  asnulsabun.addEventListener('click', function(e){
  console.log(e.target);
  if (e.target.id === '2'){
  document.body.style.backgroundImage = "url(\"../images/bg-image.jpg\")";
  }
  if (e.target.id === '0'){
  document.body.style.backgroundImage = "url(\'static/images/bg-image1.jpg\')";
  }
  if (e.target.id === '1'){
  document.body.style.backgroundImage = "url(\"../images/bg-image2.jpg\")";
  }
  })
})