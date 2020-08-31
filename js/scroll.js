const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const þ = console.log;

let ps = {

   botones: $$('.move'),
   posicionScroll: 0,
   ruta: null,
   intervalo: null,
   destinoScroll: 0,
   padding: 0

}

let ms = {

   start: () => {
      
      ps.botones.forEach(producto => {

         producto.addEventListener(
            'click',
            ms.moveScroll
         );

      });

   },

   moveScroll: (producto) => {

      producto.preventDefault();

      ps.ruta = producto.target.getAttribute("href");

      ps.destinoScroll = document.querySelector(ps.ruta).offsetTop-ps.padding;

      ps.intervalo = setInterval( () => {

         if( ps.posicionScroll < ps.destinoScroll ) {
            
            ps.posicionScroll += 100;

            if( ps.posicionScroll >= ps.destinoScroll ) {

               ps.posicionScroll = ps.destinoScroll;

               clearInterval(ps.intervalo);

            }

         } else {

            ps.posicionScroll -= 100;

            if( ps.posicionScroll <= ps.destinoScroll ) {

               ps.posicionScroll = ps.destinoScroll;

               clearInterval(ps.intervalo);

            }

         }

         window.scrollTo(0, ps.posicionScroll);

      }, 50)
      
   }

}

ms.start();