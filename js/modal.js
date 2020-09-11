const modal0 = `

<div class="content-titulo">
<h2>Coaching Individual.</h2>
</div>
<div class="content-comentario">
<p>Sesiones individuales, por lo tanto, personalizadas en lo que deseas conseguir. Es decir, cuentas con un coach exclusivo para ti que facilita el proceso de aprendizaje. El coachee tendrá el privilegio de elegir el tema que desea trabajar.</p>
</div>
<div class="content-boton">
<div class="btn">
    <a href="#">¿Quieres saber mas?</a>
    <div class="btn-line"></div>
</div>
</div>

`;

const modal1 = `

<div class="content-titulo">
<h2>Diagnostico Empresarial.</h2>
</div>
<div class="content-comentario">
<p>Si lo que queremos es conocer la actual situación de una empresa y cuáles están siendo los principales obstáculos que le impiden seguir creciendo, el diagnóstico empresarial es una de las herramientas más recurridas y eficaces para poder
    realizar este tipo de estudios. Gracias a este diagnóstico podremos encontrar la raíz del problema, lo que nos permitirá poner todos los recursos necesarios para eliminarla y hacer que la corporación mantenga, o recupere, el buen rumbo.</p>
</div>
<div class="content-boton">
<div class="btn">
    <a href="#">¿Quieres saber mas?</a>
    <div class="btn-line"></div>
</div>
</div>

`;

const modal2 = `

<div class="content-titulo">
<h2>Estrategia Funcional.</h2>
</div>
<div class="content-comentario">
<p>La estrategia empresarial, consistente en definir cada una de las estrategias funcionales u operativas en las que se desglosa la empresa. Se trata de definir una estrategia para cada una de las áreas funcionales o departamentos de la empresa. Aun siendo acciones a largo plazo, se trata de acciones que sirven para hacer efectiva o facilitar la ejecución de la estrategia global de la empresa.</p>
</div>
<div class="content-boton">
<div class="btn">
    <a href="#">¿Quieres saber mas?</a>
    <div class="btn-line"></div>
</div>
</div>

`;

const modal3 = `

<div class="content-titulo">
<h2>Seminarios y Talleres.</h2>
</div>
<div class="content-comentario">
<p>Nuestros seminarios en línea le brindan información valiosa para lograr un proposito y cubren un amplio espectro de temas, incluso métodos de enseñanza eficaces, consejos para mejorar la eficiencia en tu negocio y desarrollo profesional en línea para mejorar habilidades.</p>
</div>
<div class="content-boton">
<div class="btn">
    <a href="#">¿Quieres saber mas?</a>
    <div class="btn-line"></div>
</div>
</div>

`;

const img0 = `
<div class="img-modal0"></div>
`;

const img1 = `
<div class="img-modal1"></div>
`;

const img2 = `
<div class="img-modal2"></div>
`;

const img3 = `
<div class="img-modal3"></div>
`;

let pm = {
   btns: $$('.gallery h2'),
   modal: $('#modal'),
   exit: $('.btn-exit'),
   boxModal: $('.der-modal'),
   img: $('.content-modal'),
   body: $('body')
}

let mm = {

   start: () => {

      pm.btns.forEach( e => {
        
         e.addEventListener(
            'click',
            mm.abrirModal
         )

      });

      pm.exit.addEventListener(
         'click',
         mm.cerrarModal
      )

   },

   abrirModal: (e) => {

      pm.modal.style.display = "flex";
      pm.body.style.overflowY = "hidden";

      if( e.target == pm.btns[0] ){

         pm.boxModal.innerHTML = modal0;
         pm.img.innerHTML = img0;

      } else if( e.target == pm.btns[1] ){

         pm.boxModal.innerHTML = modal1;
         pm.img.innerHTML = img1;

      } else if( e.target == pm.btns[2] ){

         pm.boxModal.innerHTML = modal2;
         pm.img.innerHTML = img2;

      } else {

         pm.boxModal.innerHTML = modal3;
         pm.img.innerHTML = img3;

      }

   },

   cerrarModal: () => {

      pm.modal.style.display = "none";
      pm.body.style.overflowY = "initial";

   }

}

mm.start();