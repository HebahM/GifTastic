var topics = ["Cat", "Dog", "Mouse", "Lion", "Rabbit", "Frog"];



// function to create buttons from array
function renderButtons() {


    $("#buttons").empty();
    for (var i = 0; i < topics.length; i++) {
        var a = $("<button>");
        a.addClass("animal-btn btn btn-info");
        a.attr("data-name", topics[i]);
        a.text(topics[i]);
        $("#buttons").append(a);
    }
}



// create buttons
renderButtons();

// add buttons to array and append to DOM
$("#addAnimal").on("click", function () {
    console.log($("input").val())
    topics.push($("input").val())
    renderButtons();
})


// Function for displaying gifs and data

$(document).on("click", ".animal-btn", function () {
    $("#gifsGoHere").empty();
    var buttonText = $(this).text();
    var giphyURL = "http://api.giphy.com/v1/gifs/search?q=" + buttonText + "&api_key=CRayK7TqalIsNLe4qFEfH2Eandlo4sDY&limit=10";

    $.ajax({
        url: giphyURL,
        method: "GET"
    })
        .then(function (response) {
            console.log(response.data)
            for (var i = 0; i < response.data.length; i++) {
                var pRating = $("<p>").text("Rating: " + response.data[i].rating)
                var pTitle = $("<p>").text("Title: " + response.data[i].title)
                var pic = $("<img>")
                pic.attr("src", response.data[i].images.fixed_height.url)
                $("#gifsGoHere").append(pTitle);
                $("#gifsGoHere").append(pRating);
                $("#gifsGoHere").append(pic);
            }
        })
})

