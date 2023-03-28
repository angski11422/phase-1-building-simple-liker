// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
function addHidden() {
  const error = document.querySelector('#modal')
  error.classList.add('hidden');
}
addHidden();

const heartIcon = document.querySelectorAll('.like-glyph')

function clickHeart(e) {
  const heart = e.target;
  mimicServerCall('URL')
    .then(function(){
      if (heart.textContent === EMPTY_HEART) {
        heart.textContent = FULL_HEART;
        heart.className = "activated-heart";
      } else {
        heart.textContent = EMPTY_HEART;
        heart.className = "";
      }
    })
    .catch(function(error){
      const modal = document.querySelector('#modal');
      modal.className = "";
      modal.textContent = error;
      setTimeout(() => modal.className = "hidden", 3000);
    });
}

for (const glyph of heartIcon) {
  glyph.addEventListener('click', clickHeart);
}
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
