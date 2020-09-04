const query = document.querySelector.bind(document);
const all = document.querySelectorAll.bind(document);
const print = console.log;

const titulo0 = `
<h2>Coaching Individual.</h2>
`;
const titulo1 = `
<h2>Diagnostico Empresarial.</h2>
`;
const titulo2 = `
<h2>Negocio Funcional.</h2>
`;
const titulo3 = `
<h2>Seminarios y Talleres.</h2>
`;

const modal0 = `
<div class="modal-img box-moda-img-0"></div>
   <div class="modal-opacity"></div>
   <div class="modal-information">
   <div class="m-information-txt">
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa sed aliquid nostrum quibusdam, dignissimos repellendus eum nulla voluptate. Dignissimos, voluptatem ipsum doloremque eius possimus placeat nulla ratione officia error, ut excepturi sit, voluptatibus tempora non ipsam? Aperiam est eveniet quod consequatur, adipisci eius voluptatibus animi fugiat saepe autem repellat pariatur necessitatibus! Tempora dolorum ducimus quos corporis ea repellat, aliquid qui cupiditate ab. Eius adipisci nihil veniam sit saepe recusandae quam nostrum, iste facilis nobis doloremque reiciendis, iusto et eos enim.</p>
   </div>
   <div class="m-information-btn">
      <div class="at-btn">
         <a href="#">¿Quieres saber mas?</a>
         <div class="at-btn-line"></div>
      </div>
   </div>
</div>
`;

const modal1 = `
<div class="modal-img box-moda-img-1"></div>
   <div class="modal-opacity"></div>
   <div class="modal-information">
   <div class="m-information-txt">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat natus iusto laudantium commodi velit nisi aliquid error, dolorum labore exercitationem qui reiciendis consequuntur eveniet? Accusamus, perferendis aut laboriosam id dicta hic eos nihil, veritatis reiciendis, adipisci tempore? Beatae eligendi et fugiat minus, commodi, iste aliquam officiis incidunt accusantium velit dolorum necessitatibus quia rem similique atque doloribus odit distinctio id officia.</p>
   </div>
   <div class="m-information-btn">
      <div class="at-btn">
         <a href="#">¿Quieres saber mas?</a>
         <div class="at-btn-line"></div>
      </div>
   </div>
</div>
`;

const modal2 = `
<div class="modal-img box-moda-img-2"></div>
   <div class="modal-opacity"></div>
   <div class="modal-information">
   <div class="m-information-txt">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nam nesciunt iusto illum, rerum quidem voluptatem esse cumque cum, similique natus odio blanditiis officiis excepturi eligendi. Ex soluta animi accusamus magni expedita esse praesentium, repellat dicta rem fugit, dolores asperiores, hic nisi non molestiae ea quidem ut. Facilis hic mollitia necessitatibus impedit voluptas. Et ut neque quaerat officiis ipsam aliquid amet repellendus, libero expedita tenetur nam esse, repellat impedit accusantium!</p>
   </div>
   <div class="m-information-btn">
      <div class="at-btn">
         <a href="#">¿Quieres saber mas?</a>
         <div class="at-btn-line"></div>
      </div>
   </div>
</div>
`;

const modal3 = `
<div class="modal-img box-moda-img-3"></div>
   <div class="modal-opacity"></div>
   <div class="modal-information">
   <div class="m-information-txt">
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea maiores fuga, cum ducimus rem, aut, corrupti itaque veritatis accusantium ratione provident aliquid deserunt harum et. Officiis eius, voluptatibus minima beatae obcaecati quam ab quasi rem iste, sequi consequatur recusandae facere earum molestias laudantium quibusdam aperiam sint est numquam. Quo, nobis?</p>
   </div>
   <div class="m-information-btn">
      <div class="at-btn">
         <a href="#">¿Quieres saber mas?</a>
         <div class="at-btn-line"></div>
      </div>
   </div>
</div>
`;

let pm = {
   btn: all('.gallery h2'),
   modal: query('.modal-g-content'),
   titulo: query('.titulo-modal'),
   boxModal: query('.box-modal'),
   exit: query('.circle-exit')
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

   exit: () => {
      pm.exit.addEventListener(
         'click',
         mm.quitarModal
      )
   },

   mostrarModal: ( e ) => {

      pm.modal.style.animation = "into .2s";
      pm.modal.style.display = "flex";
      pm.modal.style.marginRight = "0px";

      if( e.target == pm.btn[0]){

         pm.titulo.innerHTML = titulo0;
         pm.boxModal.innerHTML = modal0;

      } else if( e.target == pm.btn[1]){

         pm.titulo.innerHTML = titulo1;
         pm.boxModal.innerHTML = modal1;

      } else if( e.target == pm.btn[2]){

         pm.titulo.innerHTML = titulo2;
         pm.boxModal.innerHTML = modal2;

      } else {

         pm.titulo.innerHTML = titulo3;
         pm.boxModal.innerHTML = modal3;

      }

   },

   quitarModal: () => {

      pm.modal.style.display = "none";
      pm.modal.style.marginRight = "-1600px";

   }

}

mm.start();
mm.exit();