!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},e.parcelRequired7c6=t);var i=t("h6c0i"),r={form:document.querySelector(".form")};function a(e,n){return new Promise((function(o,t){setTimeout((function(){Math.random()>.5?o({position:e,delay:n}):t({position:e,delay:n})}),n)}))}r.form.addEventListener("submit",(function(e){e.preventDefault();for(var n=r.form.elements,o=Number(n.delay.value),t=Number(n.step.value),u=Number(n.amount.value),l=1;l<=u;l+=1)a(l,o).then((function(e){var n=e.position,o=e.delay;i.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(e){var n=e.position,o=e.delay;i.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))})),o+=t}))}();
//# sourceMappingURL=03-promises.24927bdb.js.map
