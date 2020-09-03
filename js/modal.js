const query = document.querySelector.bind(document);
const all = document.querySelectorAll.bind(document);
const print = console.log;

const contentModal = `
<div class="content-modal">
   <div class="box-modal"></div>
</div>
`;

let pm = {
   btn: all('.gallery h2'),
   modal: query('.modal-g-content')
};

let mm = {

   start: () => {

      pm.btn.forEach( e => {

         e.addEventListener(
            'click',
            mm.mostrarModal
         );

      });

      print(pm.btn[1]);

   },

   mostrarModal: ( e ) => {

      pm.modal.style.display = "flex";
      pm.modal.style.marginRight = "0px";
      //pm.modal.innerHTML = contentModal;

      if( e.target == pm.btn[0]){

         pm.modal.style.backgroundColor = "yellow";

      } else if( e.target == pm.btn[1]){

         pm.modal.style.backgroundColor = "red";

      } else if( e.target == pm.btn[2]){

         pm.modal.style.backgroundColor = "blue";

      } else {

         pm.modal.style.backgroundColor = "green";

      }

   }

}

mm.start();