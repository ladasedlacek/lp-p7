// hide pop up
function closePopUp(){
    $("#landingpage .popBox--on").toggleClass("popBox--off popBox--on")
    $("#landingpage .lpPopContent").toggleClass("popContent--on popContent--off").hide()
}

$("#landingpage .lpPopContent").on("click", function(event){
    if(!$(event.target).closest("#landingpage .lpPopContent__box").length){
        closePopUp();
    }
});

$("#landingpage .lpPopContent__box--close").on("click", function() {
    closePopUp();
});

// show pop up
$("#landingpage .lpTiles__tile, #landingpage .lpDelivery tr th .par--link").on("click", function() {
    let saveValue = $(this).attr('data-target')
    $("#landingpage .lpPopContent").toggleClass("popContent--on popContent--off").fadeIn(250)
    $("#landingpage #" + saveValue).toggleClass("popBox--off popBox--on").fadeIn(250)
});