$((function(){"use strict";$("#checkAll").on("click",(function(){$(this).is(":checked")?($(".main-mail-list .ckbox input").each((function(){$(this).closest(".main-mail-item").addClass("selected"),$(this).attr("checked",!0)})),$(".main-mail-options .btn:not(:first-child)").removeClass("disabled")):($(".main-mail-list .ckbox input").each((function(){$(this).closest(".main-mail-item").removeClass("selected"),$(this).attr("checked",!1)})),$(".main-mail-options .btn:not(:first-child)").addClass("disabled"))})),$(".main-mail-item .main-mail-checkbox input").on("click",(function(){$(this).is(":checked")?($(this).attr("checked",!1),$(this).closest(".main-mail-item").addClass("selected"),$(".main-mail-options .btn:not(:first-child)").removeClass("disabled")):($(this).attr("checked",!0),$(this).closest(".main-mail-item").removeClass("selected"),$(".main-mail-list .selected").length||$(".main-mail-options .btn:not(:first-child)").addClass("disabled"))})),$(".main-mail-star").on("click",(function(i){$(this).toggleClass("active")})),$("#btnCompose").on("click",(function(i){i.preventDefault(),$(".main-mail-compose").show()})),$(".main-mail-compose-header a:first-child").on("click",(function(i){i.preventDefault(),$(".main-mail-compose").toggleClass("main-mail-compose-minimize")})),$(".main-mail-compose-header a:nth-child(2)").on("click",(function(i){i.preventDefault(),$(this).find(".fas").toggleClass("fa-compress"),$(this).find(".fas").toggleClass("fa-expand"),$(".main-mail-compose").toggleClass("main-mail-compose-compress"),$(".main-mail-compose").removeClass("main-mail-compose-minimize")})),$(".main-mail-compose-header a:last-child").on("click",(function(i){i.preventDefault(),$(".main-mail-compose").hide(100),$(".main-mail-compose").removeClass("main-mail-compose-minimize")}))}));