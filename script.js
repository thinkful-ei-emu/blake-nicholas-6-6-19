'use strict';

// $('.shopping-item-toggle').click(event => {
//     $(event.target).parent().parent().prev().toggleClass('shopping-item__checked');
// });

$('#js-shopping-list-form').submit(event => {
    event.preventDefault();
   const text = $('#shopping-list-entry').val();
   $('ul').append(`<li>
    <span class="shopping-item">${text}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`);
  $('#shopping-list-entry').val('');
});

$('body').on('click','.shopping-item-toggle', event => {
    $(event.target).parent().parent().prev().toggleClass('shopping-item__checked');
});


// $('body').on('click','.shopping-item-delete', event => {
//     $(event.target).parent().parent().parent().remove();
// });

$('body').on('click','.shopping-item-delete', event => {
    $(event.target).closest('li').remove();
});






