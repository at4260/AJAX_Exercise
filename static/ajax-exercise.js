// PART 1: SHOW A FORTUNE

function showFortune(evt) {
    // TODO: get the fortune and show it in the fortune-text div
    evt.preventDefault();
    // using load because want to pull the result and display it
    $("#fortune-text").load("/fortune");
}     
$('#get-fortune-button').on('click', showFortune);


// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();
    var url = "/weather?zipcode=" + $("#zipcode-field").val();
    // TODO: request weather with that URL and show the forecast in #weather-info
    // using get because we want to change the data that we got before displaying it
    $.get(url,
        function (result) {
            $("#weather-info").append(result.forecast, "<br/>", result.temp);
        }
    );
}

$("#weather-form").on('submit', showWeather);


// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    $.post("/order-melons",
        $('#order-form').serialize(),
        function (result) {
            // TODO: show the result message after your form
            // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
            $("#order-status").append(result.msg);
            if (result.code === "ERROR") {
                $("#order-status").addClass("order-error");
            }        
        }
    );
}

$("#order-form").on('submit', orderMelons);


