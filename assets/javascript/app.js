var buttons = ["Cat", "Dog", "Mouse", "Lion", "Rabbit", "Frog"];
var buttonText;

// make buttons out of array -- for loop?
// add user input to array
// clear array?


//////////// API
// create query URL:
//      concatenate button value into url
//      limit results to 10 gifs
//      add details for rating, and other details
//      put results in #gifsGoHere
//      


// Function for displaying movie data
function renderButtons() {

    // Deleting the movies prior to adding new movies
    // (this is necessary otherwise you will have repeat buttons)
    $("#buttons").empty();

    // Looping through the array of movies
    for (var i = 0; i < buttons.length; i++) {

        // Then dynamicaly generating buttons for each movie in the array
        // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
        var a = $("<button>");
        // Adding a class of movie-btn to our button
        a.addClass("animal-btn btn btn-info");
        // Adding a data-attribute
        a.attr("data-name", buttons[i]);
        // Providing the initial button text
        a.text(buttons[i]);
        // Adding the button to the buttons-view div
        $("#buttons").append(a);
    }
}

function displayGIFs() {
    var giphyURL = "http://api.giphy.com/v1/gifs/search?q=cat&api_key=CRayK7TqalIsNLe4qFEfH2Eandlo4sDY&limit=10";

}

renderButtons();
$("#addAnimal").on("click", function () {
    console.log($("input").val())
    buttons.push($("input").val())
    renderButtons();
})

$(".animal-btn").on("click", function () {
    buttonText = $(this).text()
    console.log(buttonText)

})

displayGIFs();



