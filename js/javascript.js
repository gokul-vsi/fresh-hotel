var first = document.querySelector('.b-1');
var second = document.querySelector('.b-2');
var third = document.querySelector('.b-3');

anime({
targets: first,
innerHTML: [0, 10],
easing: 'linear',
round: 1 // Will round the animated value to 1 decimal
});

anime({
targets: second,
innerHTML: [0, 150],
easing: 'linear',
round: 1 // Will round the animated value to 1 decimal
});

anime({
targets: third,
innerHTML: [0, 2000],
easing: 'linear',
round: 1 // Will round the animated value to 1 decimal
});