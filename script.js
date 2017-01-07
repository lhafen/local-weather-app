$(document).ready(function(){
    var lon;
    var lat;
    var ftemp;
    var ctemp;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position){
            lon = position.coords.longitude;
            lat = position.coords.latitude;

            //$('#location').html("latitude: " + lat + "<br>longitude: " + long);



var api = "https://crossorigin.me/http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=8433fcf75fc420a058abf8942627633e";

$.getJSON(api, function(data){
    var weatherType = data.weather[0].description;
    var kelvin = data.main.temp;
    var icon = data.weather[0].icon;
    var city = data.name;
    var humidity = data.main.humidity;

    ftemp = (kelvin)*(9/5)-459.67;
    ctemp = kelvin-273;
    var tempSwap = true;

    if(icon === '01d'){
        $('body').css('background-image', 'url(https://upload.wikimedia.org/wikipedia/commons/0/07/Clear_Sky.jpg)');
    }
else if(icon === '01n'){
        $('body').css('background-image', 'url(https://upload.wikimedia.org/wikipedia/commons/c/c4/Moon_on_a_dark_night.jpg)');
    }
else if(icon == '02d'){
        $('body').css('background-image', 'url(https://upload.wikimedia.org/wikipedia/commons/d/d8/Clear_Blue_Sky.jpg)');
    }
else if(icon === '02n'){
        $('body').css('background-image', 'url(https://upload.wikimedia.org/wikipedia/commons/8/80/Moon_and_Clouds.jpg)');
    }
else if(icon === '03d' || icon === '03n'){
        $('body').css('background-image', 'url(https://upload.wikimedia.org/wikipedia/commons/3/3b/Altocumulus_se_2.jpg)');
    }
else if(icon === '04d' || icon === '04n'){
        $('body').css('background-image', 'url(https://upload.wikimedia.org/wikipedia/commons/4/4e/Clouds_in_vellore.JPG)');
    }
else if(icon === '09d' || icon === '09n'){
        $('body').css('background-image', 'url(https://upload.wikimedia.org/wikipedia/commons/b/b7/Rain_in_Budalla%2C_Sri_Lanka.jpg)');
    }
else if(icon === '10d' || icon === '10n'){
        $('body').css('background-image', 'url(https://upload.wikimedia.org/wikipedia/commons/c/c2/Heavy_Rain.jpg)');
    }
else if(icon === '11d' || icon === '11n'){
        $('body').css('background-image', 'url(https://upload.wikimedia.org/wikipedia/commons/4/4f/Angry_Storm_%287062576717%29.jpg)');
    }
else if(icon === '13d' || icon === '13n'){
        $('body').css('background-image', 'url(https://upload.wikimedia.org/wikipedia/commons/4/4a/Snow_on_the_mountains_of_Southern_California.jpg)');
    }
else if(icon === '50d' || icon === '50n'){
        $('body').css('background-image', 'url(https://upload.wikimedia.org/wikipedia/commons/e/e6/Mist_in_the_trees_-_Public_Domain.jpg)');
    }


$('#location').html(city);
$('#humidity').html(humidity);
$('#description').html(weatherType);
$('#icon').attr("src","http://openweathermap.org/img/w/"+icon+".png");
$('#temp').html(Math.round(ftemp)+ "&#8457");
$('button').click(function(){
        if (tempSwap === false){
            $('#temp').html(Math.round(ftemp) + "&#8457");
            tempSwap = true;
        }
        else {
            $('#temp').html(Math.round(ctemp) + "&#8451");
            tempSwap = false;
            console.log("hello");

        }



});


});

});
}



});



