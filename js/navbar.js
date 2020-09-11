const bigMenu = `
   transition: .6s;
   transform: scale(40);
`;

const smallMenu = `
   transition: .6s;
   transform: scale(1);
`;

let pn = {
   btn: $('.circulo-btn'),
   navbar: $('#navbar'),
   listMenu: $('.list-menu'),
   body: $('body'),
   btnMenu: $$('.m-list-content ul li a'),
   open: true
}

let mn = {

   start: () => {

      pn.btn.addEventListener(
         'click',
         mn.abrirMenu
      );

      pn.btnMenu.forEach( e => {
         e.addEventListener(
            'click',
            mn.btnCerrar
         )
      });

   },

   abrirMenu: () => {

      if ( pn.open ) {

         pn.btn.style += `; ${bigMenu}`;
         pn.body.style.overflowY = "hidden";
         pn.navbar.style.height = "100vh";
         pn.btn.innerHTML = "";

         setTimeout(() => {

            pn.btn.style += `; ${smallMenu}`;

            setTimeout(() => {
               pn.btn.innerHTML = `<i class="fas fa-times"></i>`;
            }, 700);

            setTimeout( () => {

               pn.listMenu.style.display = "flex";
               pn.navbar.style.backgroundColor = "#292929f2";

            }, 100);
            
         }, 800);

         pn.open = false;

      } else if ( !pn.open ) {

         pn.btn.style += `; ${bigMenu}`;
         pm.body.style.overflowY = "initial";
         pn.btn.innerHTML = "";

         setTimeout(() => {

            pn.btn.style += `; ${smallMenu}`;

            setTimeout(() => {
               pn.btn.innerHTML = `<i class="fas fa-bars"></i>`;
            }, 700);
            
            pn.listMenu.style.display = "none";
            pn.navbar.style.height = "10vh";
            pn.navbar.style.backgroundColor = "#00000000";
            
         }, 800);

         pn.open = true;

      }

   },

   btnCerrar: ( e ) => {

      pm.body.style.overflowY = "initial";
      pn.btn.style += `; ${smallMenu}`;
      pn.btn.innerHTML = `<i class="fas fa-bars"></i>`;    
      pn.listMenu.style.display = "none";
      pn.navbar.style.height = "10vh";
      pn.navbar.style.backgroundColor = "#00000000";

      pn.open = true;

   }

}

mn.start();