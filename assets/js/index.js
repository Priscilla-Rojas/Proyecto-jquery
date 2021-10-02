
$(document).ready(function(){
    console.log('Listos par trabajar');

        $(function(){
            $('.bxslider').bxSlider({
                mode: 'fade',
                captions: true,
                slideWidth: 1200
            });
        });
        let date = new Date();
        let post= [
            {
                title: 'La tecnologia',
                date: `Publicado ${date.getDate()} / ${date.getMonth()} / ${date.getFullYear()}`,
                content: `Frecuentemente cuando los medios de comunicación hablan de la influencia de la tecnología en nuestras vidas se refieren a las nuevas tecnologías o la alta tecnología. Nosotros mismos al escuchar la palabra tecnología tendemos a pensar en ordenadores de última generación, en naves espaciales, satélites artificiales, redes de alta tensión, centrales eléctricas, grandes máquinas…

                Sin embargo los objetos más domésticos y cotidianos también son productos tecnológicos: los libros, la ropa que vestimos o los bolígrafos no han estado siempre ahí, surgieron a raíz de un descubrimiento o de una invención en un momento determinado de la historia; también fueron, en su día, tecnología punta.
                Se suele asociar tecnología con modernidad, pero realmente la actividad tecnológica, la curiosidad por modificar nuestro entorno para mejorar nuestras condiciones de vida, es algo tan viejo como la humanidad.
                
                Entonces, ¿qué es la tecnología?`
                // https://www.edu.xunta.gal/espazoAbalar/sites/espazoAbalar/files/datos/1464945204/contido/1_la_tecnologa.html
            },
            {
                title: 'La influencia de la tecnologia en nuestra vida cotidiana',
                date: `Publicado ${date.getDate()} / ${date.getMonth()} / ${date.getFullYear()}`,
                content: `Los equipos de telecomunicación, a través de los cuales se transmite la información, han ido evolucionando y formando parte importante de nuestra vida cotidiana, pasamos del telégrafo a WhatsApp y de la televisión en blanco y negro, que merecía su propio espacio, a celulares o tablets de alta resolución que pueden llevarse hasta al baño. Pero los aparatos tecnológicos no solamente aportan un valor práctico, sino estético y simbólico que nos llevan a elegir entre un sinfín de opciones: no sólo el más eficiente, sino el más lindo, el de mejor diseño o el que me otorga mayor estatus.

                Vale la pena entonces empezar a reflexionar sobre la tecnología en nuestra vida cotidiana cuestionando no sólo la manera en que la uso, sino también por qué y para qué.`
                // https://www.anahuac.mx/generacion-anahuac/la-influencia-de-la-tecnologia-en-nuestra-vida-cotidiana
            },
            {
                title: 'Historia de la tecnología',
                date: `Publicado ${date.getDate()} / ${date.getMonth()} / ${date.getFullYear()}`,
                content: `La historia de la tecnología es la historia de la invención de herramientas y técnicas con un propósito práctico. Los artefactos tecnológicos son productos de una economía, una fuerza del crecimiento económico y una buena parte de la vida. Las innovaciones tecnológicas afectan y están afectadas por las tradiciones culturales de la sociedad. También son un medio de obtener poder militar.

                La forma más simple de tecnología es el desarrollo y uso de herramientas básicas. La invención prehistórica de herramientas de piedra, seguida por el descubrimiento de cómo controlar el fuego, aumentaron las fuentes de alimento. La posterior Revolución Neolítica cuadruplicó el sustento disponible de un territorio. La invención de la rueda ayudó a los humanos a viajar y controlar su entorno.`
                // https://es.wikipedia.org/wiki/Historia_de_la_tecnolog%C3%ADa
            }
        ];
    
        post.forEach((element, index) =>{
            let post = `
            <article class="post">
                <h2>${element.title}</h2>
                <span class="date">${element.date}</span>
                <p>${element.content}</p>
                <a href="#" class="button-more">Leer Más</a>
            </article>`;
            $('.posts').append(post);
        })

        

})