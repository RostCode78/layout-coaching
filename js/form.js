let pf = {
   inputNombre: $("#nombre"),
   labelNombre: $(".nombre-form label")
}

let mf = {

   focus: () => {

      pf.inputNombre.addEventListener(
         'focus',
         mf.addStyle
      )

   },

   addStyle: () => {
      pf.labelNombre.style.transition = ".4s";
      pf.labelNombre.style.marginTop = "-60px";
   },

   blur: () => {

      pf.inputNombre.addEventListener(
         'blur',
         mf.removeStyle
      )

   },

   removeStyle: () => {

      if(pf.inputNombre.value == ""){
         pf.labelNombre.style.transition = ".4s";
         pf.labelNombre.style.marginTop = "0px";
      }
   }

};

mf.focus();
mf.blur();