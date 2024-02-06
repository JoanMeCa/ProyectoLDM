var presupuestoInput = document.getElementById("presupuesto");
var presupuestoValor = document.getElementById("presupuestoValor");

presupuestoInput.addEventListener("input", function() {
    presupuestoValor.textContent = "$" + presupuestoInput.value;
});

$(function() {
    $(".datepicker").datepicker({
        minDate: new Date(),
        dateFormat: 'dd/mm/yy',
        onSelect: function(selectedDate) {
            $("#fechavuelta").datepicker("option", "minDate", selectedDate);
        } 
    });
});

$(function() {
    // Realiza una solicitud a la API de restcountries.com para obtener la lista de nombres de países en español
    $.ajax({
        url: "https://restcountries.com/v2/all",
        type: "GET",
        success: function(data) {
            // Procesa la respuesta para obtener los nombres de los países
            var listaPaises = data.map(function(country) {
                return country.translations.es;
            });

            // Inicializa el autocompletar con la lista de nombres de países
            $(".autocomplete").autocomplete({
                source: listaPaises,
            });
        },
        error: function(error) {
            console.error("Error al obtener la lista de países", error);
        }
    });
});