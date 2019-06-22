document.querySelector('#btn-localizacao').addEventListener('click', function (event) {
    var titulo = document.getElementById('titulo');
    var latitudeS = document.getElementById('latitude');         
    var longitudeS = document.getElementById('longitude');         

    if (navigator.geolocation) {
        /* geolocation is available */
           navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        /* geolocation IS NOT available */
        navigator.geolocation.getCurrentPosition(showError);
    }

    function showPosition(position){
        // titulo.innerHTML = "Você está localizando em: ";
        // var latitude = "Latitude: " + position.coords.latitude + " - ";
        // var longitude = "Longitude: " + position.coords.longitude;
        
        latitudeS.innerHTML = "Latitude "+position.coords.latitude;
        longitudeS.innerHTML = "Longitude "+position.coords.longitude;
    }

    function showError(error) {
        var mensagem = "";
        switch (error.code) {
            case error.PERMISSION_DENIED:
                mensagem = "User denied the request for Geolocation."
                break;
            case error.POSITION_UNAVAILABLE:
                mensagem = "Location information is unavailable."
                break;
            case error.TIMEOUT:
                mensagem = "The request to get user location timed out."
                break;
            case error.UNKNOWN_ERROR:
                mensagem = "An unknown error occurred."
                break;
        }
        titulo.innerHTML =  'Desculpe, não conseguimos localizá-lo. Motivo: ';
        localizacao.innerHTML = mensagem;
    }
});