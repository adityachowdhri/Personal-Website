function toggleText(el) {
    var text = el.closest('div').querySelector(".expand");
    if (text.style.display === "none") {
      text.style.display = "block";
      el.innerText = '[-]'
      
    } else {
      text.style.display = "none";
      el.innerText = '[+]';
    }
  }
function toggleTextIcon(el) {
    var text = el.closest('div').querySelector(".expand");
    if (text.style.display === "none") {
      text.style.display = "block";
      el.innerHTML = '<i class="fa fa-stop" aria-hidden="true"></i>'
      
    } else {
      text.style.display = "none";
      el.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
    }
  }
