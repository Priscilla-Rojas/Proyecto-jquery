$(document).ready(function(){

    console.log('Listos par trabajar');
    // Reloj
    setInterval(function(){
        let reloj = moment().format('hh:mm:ss');
        $('#reloj').html(reloj + ' hs');
    }, 1000)
    
    // Selector theme

    let theme = $('#theme');
    theme.attr('href', 'assets/css/black.css')

    $('#to-black').click(function(){
        theme.attr('href', 'assets/css/black.css');
        localStorage.setItem('theme', theme.attr('href'))
    })
    $('#to-blue').click(function(){
        theme.attr('href', 'assets/css/blue.css');
        localStorage.setItem('theme', theme.attr('href'))
    })
    $('#to-red').click(function(){
        theme.attr('href', 'assets/css/red.css');
        localStorage.setItem('theme', theme.attr('href'))
    })
    $('#to-green').click(function(){
        theme.attr('href', 'assets/css/defauld.css');
        localStorage.setItem('theme', theme.attr('href'))
    })

    let storageTheme = localStorage.getItem('theme');
    theme.attr('href', storageTheme)
    
    $('.subir').click(function(e){
        $('html','body').animate({
            scrollTop: 0
        }, 500);
    })

    $('.login  form').submit(function(){
        let form_name = $('#form_name').val();
        localStorage.setItem("form_name", form_name);
    })

    let form_name = localStorage.getItem("form_name");
    
    if(form_name !== null && form_name !== 'undefined'){
        $('#usuario').prepend(`<p><strong> Bienvenido/a ${form_name} </strong></p>`);
        $('.login').hide();
        $('#cerrar-sesion').show();
    }
    $('#cerrar-sesion').click(function(){
        localStorage.clear();
        location.reload();
    })
})