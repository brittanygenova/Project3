var apiBase="http://statenweb.mockable.io/conversions/";

$('#inch').on("submit",function(e){
    e.preventDefault();
    var inch = $('#inchesInput').val();
    axios.get(apiBase)
        .then(function(response){
            var convert = response.data.centimetersInInch;
            var result = convert * inch;
            $('#inchResult').html(result + " centimeters");
        })
})

$('#cent').on("submit",function(e){
    e.preventDefault();
    var cent = $('#centInput').val();
    axios.get(apiBase)
        .then(function(response){
            var convert = response.data.inchesInCm;
            var result = convert * cent;
            $('#centResult').html(result + " inches");
        })
})