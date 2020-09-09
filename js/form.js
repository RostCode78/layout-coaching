let pf = {
   inputForm: $$('.input-form2'),
   lblForm: $$('.lbl-form2'),
   lineForm: $$('.line-form'),
   textarea: $('.textarea-form2'),
   lblMensaje: $('.lbl-mensaje2')
}

let focusStyle = `
transition: .4s;
margin-top: -35px;
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

let lineFocus = `
left: 0px;
opacity: 1;
transition: .4s;
`;

let lineBlur = `
left: -450px;
opacity: 0;
transition: .4s;
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
      pf.lineForm[2].style += `; ${lineFocus}`;

   },

   textareaBlur: () => {

      if( pf.textarea.value == "" ){

         pf.lblMensaje.style += `; ${mensajeBlur}`;
         pf.lineForm[2].style += `; ${lineBlur}`;
         þ(pf.textarea.value);

      }

   },

   inputFocus: ( e ) => {

      if( e.target == pf.inputForm[0] ) {
         pf.lblForm[0].style += `; ${focusStyle}`;
         pf.lineForm[0].style += `; ${lineFocus}`;
      } else {
         pf.lblForm[1].style += `; ${focusStyle}`;
         pf.lineForm[1].style += `; ${lineFocus}`;
      }

   },

   inputblur: ( e ) => {

      if( e.target == pf.inputForm[0] ) {

         if(pf.inputForm[0].value == ""){
            pf.lblForm[0].style += `; ${blurStyle}`;
            pf.lineForm[0].style += `; ${lineBlur}`;
         };

      } else {

         if(pf.inputForm[1].value == ""){
            pf.lblForm[1].style += `; ${blurStyle}`;
            pf.lineForm[1].style += `; ${lineBlur}`;
         };

      }

   }

};

mf.focus();