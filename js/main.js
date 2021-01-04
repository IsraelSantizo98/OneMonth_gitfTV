//Obtner la respuesta del usuario
document.querySelector('.js-go').addEventListener('click', function(){
    var input = document.querySelector('input').value;
    var userInput = getUserInput();
    alert(userInput);
    searchGiphy(userInput);
});
//Reconcer el click del teclado
document.querySelector('.js-userinput').addEventListener('keyup', function(e){
    if(e.which === 13){
        var userInput = getUserInput();
        searchGiphy(userInput);
    }else{
        //alert('N era el enter');
    }
});
function getUserInput() {
    var inputValue = document.querySelector('.js-userinput').value;
	return inputValue;
}
//Credenciales para ingresar al API
function searchGiphy(searchQuery) {
    var url = "https://api.giphy.com/v1/gifs/search?q="+ searchQuery +"&api_key=Rhp6uPOa1OBOgfjv7Gl7neJ8gTH2BuSs&rating=g&lang=en";
    var GiphyAJAXCall = new XMLHttpRequest();
	GiphyAJAXCall.open( 'GET', url );
	GiphyAJAXCall.send();
	GiphyAJAXCall.addEventListener('load', function( data ) {
			var actualData = data.target.response;
			pushToDOM(actualData);
			console.log(actualData);
	});
}
//searchGiphy( "cats" );
function pushToDOM(input){
    var response = JSON.parse(input);
    //alert(input);
    var images = response.data;
    //var imageUrl = response.data[1].images.fixed_height.url;
    //var imageUrls = response.data;
    var container = document.querySelector('.giftScreen');
    //console.log(imageUrl);
    //var src = images.fixed_height.url
    for(i = 0; i<5; i++) {
    container.innerHTML= " ";
        // concatenate a new IMG tag
        setTimeout(function(){
                var src = images[i].images.fixed_height.url;
                container.innerHTML = " ";
                container.innerHTML += "<img src='"+ src +"' class='container__image' />";
                i++;
        }, 3000*i);
    }
}