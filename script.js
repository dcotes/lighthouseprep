$(document).ready(function() {
   $('list').click(function () {
    $(document).on('click', '.item', function () {
        $(this).remove();
    });