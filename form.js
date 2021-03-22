$(document).ready(function () {
  $('#form').submit(function () {
    $.ajax({
      type: 'POST',
      url: 'form.php',
      data: $(this).serialize(),
    }).done(function () {
      window.location = '/thanks.html';
    });
    return false;
  });
});
