function redirect()
    { 
      window.location.href= "indexInicio.html";
    }
const splash = () => {
window.setTimeout("redirect()",2000)}
window.onload= splash; 