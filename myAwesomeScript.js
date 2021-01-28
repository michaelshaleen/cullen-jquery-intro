console.log('I haz js');

$(document).ready(onReady);

function onReady() {
  console.log('onReady func');
  const h1 = $('h1');
  console.log('h1', h1);

  const h2 = $('h2');
  //h2.css('background-color', 'blue');
  $('h2').addClass('froggy');
  const h1Text = $('h1').text();
  console.log('h1Text is', h1Text);

  const louderText = h1Text.toUpperCase() + '!!!!';
  $('h1').text(louderText);
}
