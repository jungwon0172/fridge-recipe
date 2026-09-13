
function setCookieConsent(accepted){
  try{ localStorage.setItem('cookie_consent', accepted ? 'accepted' : 'declined'); }catch(e){}
  var b = document.getElementById('cookie-banner');
  if(b) b.classList.remove('show');
}
(function(){
  try{
    var v = localStorage.getItem('cookie_consent');
    if(!v){
      window.addEventListener('DOMContentLoaded', function(){
        var b = document.getElementById('cookie-banner');
        if(b) b.classList.add('show');
      });
    }
  }catch(e){}
})();
window.addEventListener('DOMContentLoaded', function(){
  var hamb = document.getElementById('hamb-btn');
  var menu = document.getElementById('mobile-menu');
  if(hamb && menu){
    hamb.addEventListener('click', function(){
      menu.classList.toggle('open');
    });
  }
});
