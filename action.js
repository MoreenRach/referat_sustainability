function showDate() {
  var d = new Date();
  var curr_date = d.getDate();
  var curr_month = d.getMonth() + 1; //months are zero based
  var curr_year = d.getFullYear();
  document.write(curr_date + "-" + curr_month + "-" + curr_year);
}

showDate();

window.onload = function() {
    const btn = document.getElementById('scrollButton');
    btn.addEventListener('click', () => window.scrollTo({
       top: 0,
       behavior: 'smooth',
    }));
}