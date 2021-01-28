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
  console.log('h1Text is', h1Text); // get stuff from the DOM

  const louderText = h1Text.toUpperCase() + '!!!!';
  $('h1').text(louderText);

  $('#button').on('click', whenIAddAHarmonica); // not calling function, referring
  //calling would be whenIAddAHarmonica();
  $('.deleteBut').on('click', deleteMe);

  //event delegation
  //descendent selectors
  $(document).on('click', '.deleteBut', deleteMe);
}
function deleteMe() {
  console.log('delete', $('.harmonica-item'));
  $('.harmonica-item').remove();
}

function whenIAddAHarmonica() {
  //TODO
  console.log('button');
  //grab data to pass through
  let brand = $('#brand').val(); // put the input value as the var, grab via JQ on id
  console.log('brand is ', brand); // console log the val
  $('#harmonicas').append(` 
  <li class="harmonica-item"> 
    Brand is: ${brand}
    <button class= "deleteBut">Delete Me</button>
  </li>`); // grab id of harmonicas, append so onto DOM, this we want to create a list item then append onto that
  //append brand is and grab brand with jq
}
