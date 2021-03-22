$(document).ready(function () {
  $('#form').submit(function () {
    $.ajax({
      type: 'POST',
      url: 'mail.php',
      data: $(this).serialize(),
    }).done(function () {
      window.location = '/thanks.html';
      // alert('Ok');
    });
    return false;
  });
});
