const t={btnStart:document.querySelector("button[data-start]"),btnStop:document.querySelector("button[data-stop]")},n=document.body.style;let e=null;function r(){return`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}t.btnStart.addEventListener("click",(function(){n.background=r(),e=setInterval((()=>{n.background=r()}),1e3),t.btnStart.setAttribute("disabled","")})),t.btnStop.addEventListener("click",(function(){clearInterval(e),n.background="none",t.btnStart.removeAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.a136e715.js.map