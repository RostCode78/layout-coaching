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
<h2>Estrategia Funcional.</h2>
`;
const titulo3 = `
<h2>Seminarios y Talleres.</h2>
`;

const modal0 = `
<div class="modal-img box-moda-img-0"></div>
   <div class="modal-opacity"></div>
   <div class="modal-information">
   <div class="m-information-txt">
      <p>Sesiones individuales, por lo tanto, personalizadas en lo que deseas conseguir. Es decir, cuentas con un coach exclusivo para ti que facilita el proceso de aprendizaje. El coachee tendrá el privilegio de elegir el tema que desea trabajar.</p>
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
      <p>Si lo que queremos es conocer la actual situación de una empresa y cuáles están siendo los principales obstáculos que le impiden seguir creciendo, el diagnóstico empresarial es una de las herramientas más recurridas y eficaces para poder realizar este tipo de estudios. Gracias a este diagnóstico podremos encontrar la raíz del problema, lo que nos permitirá poner todos los recursos necesarios para eliminarla y hacer que la corporación mantenga, o recupere, el buen rumbo.</p>
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
      <p>La estrategia empresarial, consistente en definir cada una de las estrategias funcionales u operativas en las que se desglosa la empresa. Se trata de definir una estrategia para cada una de las áreas funcionales o departamentos de la empresa. Aun siendo acciones a largo plazo, se trata de acciones que sirven para hacer efectiva o facilitar la ejecución de la estrategia global de la empresa.</p>
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
      <p>Nuestros seminarios en línea le brindan información valiosa para lograr un proposito y cubren un amplio espectro de temas, incluso métodos de enseñanza eficaces, consejos para mejorar la eficiencia en tu negocio y desarrollo profesional en línea para mejorar habilidades.</p>
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