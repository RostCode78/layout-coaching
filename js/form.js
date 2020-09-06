let pf = {
   inputForm: $$('.input-form'),
   lblForm: $$('.lbl-form'),
   textarea: $('#mensaje'),
   lblMensaje: $('.lbl-mensaje')
}

let focusStyle = `
transition: .4s;
margin-top: -70px;
color: #303030;
cursor: default;
`;

let blurStyle = `
transition: .4s;
margin-top: 0px;
color: #9b9b9b;
cursor: text;
`;

let mensajeFocus = `
display: none;
color: #ffffff00;
transition: .4s;
`;

let mensajeBlur = `
color: #9b9b9b;
transition: .4s;
display: initial;
`;

let mf = {

   focus: () => {

      pf.inputForm.forEach( e => {
        
         e.addEventListener(
            'focus',
            mf.inputFocus
         );

         e.addEventListener(
            'blur',
            mf.inputblur
         )

      });

      pf.textarea.addEventListener(
         'focus',
         mf.textareaFocus
      );

      pf.textarea.addEventListener(
         'blur',
         mf.textareaBlur
      );

   },

   textareaFocus: () => {
      
      pf.lblMensaje.style += `; ${mensajeFocus}`;

   },

   textareaBlur: () => {

      if( pf.textarea.value == "" ){

         pf.lblMensaje.style += `; ${mensajeBlur}`;
         þ(pf.textarea.value);

      }

   },

   inputFocus: ( e ) => {

      if( e.target == pf.inputForm[0] ) {
         pf.lblForm[0].style += `; ${focusStyle}`;
      } else {
         pf.lblForm[1].style += `; ${focusStyle}`;
      }

   },

   inputblur: ( e ) => {

      if( e.target == pf.inputForm[0] ) {

         if(pf.inputForm[0].value == ""){
            pf.lblForm[0].style += `; ${blurStyle}`;
         };

      } else {

         if(pf.inputForm[1].value == ""){
            pf.lblForm[1].style += `; ${blurStyle}`;
         };

      }

   }

};

mf.focus();