$(document).ready(function(){
    console.log('Listos par trabajar');
    $('#year').datepicker({
        dateFormat: 'dd-mm-yy'
    });
    $.validate({
        lang:'es',
        errorMessagePosition:'top',
        scrollTopError: true
    });

})
