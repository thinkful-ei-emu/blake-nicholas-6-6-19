'use strict';

$('.thumbnail').on('click', event => {
//   console.log(event.target);
    $('.hero > img').attr('src', event.target.src);
});

