var topics = ["Cat", "Dog", "Mouse", "Bird", "Rabbit", "Frog"];



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
    limitNumber = 10;
    var giphyURL = "https://api.giphy.com/v1/gifs/search?q=" + buttonText + "&api_key=CRayK7TqalIsNLe4qFEfH2Eandlo4sDY&limit=" + limitNumber;

    $.ajax({
        url: giphyURL,
        method: "GET"
    })
        .then(function (response) {
            console.log(response.data)
            for (var i = 0; i < response.data.length; i++) {
                var pRating = $("<p>").text("Rating: " + response.data[i].rating);
                var pTitle = $("<p>").text("Title: " + response.data[i].title);
                var pSource = $("<p>").text("Source: " + response.data[i].source)
                var pic = $("<img>").attr("src", response.data[i].images.fixed_height_still.url);
                pic.attr("data-still", response.data[i].images.fixed_height_still.url);
                pic.attr("data-animate", response.data[i].images.fixed_height.url);
                pic.attr("data-state", "still");
                pic.addClass("gif");
                //pic.attr("data-state", "still")

                $("#gifsGoHere").append(pTitle);
                $("#gifsGoHere").append(pRating);
                $("#gifsGoHere").append(pSource);
                $("#gifsGoHere").append(pic);

            }

            // Start/stop gifs on click
            $(".gif").on("click", function() {
                var state = $(this).attr("data-state");
                if (state === "still") {
                    $(this).attr("src", $(this).attr("data-animate"));
                    $(this).attr("data-state", "animate");
                  } else {
                    $(this).attr("src", $(this).attr("data-still"));
                    $(this).attr("data-state", "still");
                  }
            })

        })
})

// $("#moreGifs").on("click", function() {
//     limitNumber = limitNumber + 10;
// })