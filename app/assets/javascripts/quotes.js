$(document).ready(function() {
  var startDate = document.getElementById('quote_start_date');
  var endDate = document.getElementById('quote_completion_date_estimate');

  startDate.addEventListener('change', function() {
    endDate.min = startDate.value;
  })
});


// var viewed=document.getElementById('customer_viewed');
//   viewed.onclick=viewCheck;
// `insert into contract (view_date) values (to_timestamp(${Date.now()} / 1000.0))` 