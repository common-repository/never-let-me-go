/*! License information can be found in resign-button-helper.js.LICENSE.txt */
!function(){var n=jQuery,e=wp.apiFetch;n(document).ready((function(){n(".wp-block-nlmg-resign-button").each((function(a,t){var i=n(t).find(".wp-block-button__link");i.addClass("disabled"),n("#nlmg-acceptance").on("click",(function(){this.checked?i.removeClass("disabled"):i.addClass("disabled")})),i.on("click",(function(a){var t=n(this);if(a.preventDefault(),t.hasClass("disabled"))return!1;t.addClass("disabled");var i=t.attr("href")||NlmgRedirect.url;e({path:"nlmg/v1/resign",method:"POST"}).then((function(){window.location.href=i})).catch((function(n){alert(n.message)})).finally((function(){t.removeClass("disabled")}))}))}))}))}();