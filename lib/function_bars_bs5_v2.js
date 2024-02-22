// Tooltip triggers
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
	var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
	return new bootstrap.Tooltip(tooltipTriggerEl)
})

$(document).ready(function(){
	// Resize or replace items on-load
	if ($(window).width() >= 992){
		$("#services-uda").css("display", "block");
		// IERSE row
		$("#ierse_row").removeClass("justify-content-between");
		$("#ierse_row").addClass("justify-content-center");
		// UAZUAY row
		$("#uazuay_row").removeClass("justify-content-center");
		// Collapse Button
		$("#btn_coll_menus").css("display", "none");
		// IERSE sites
		$("#ul_sites_ierse").addClass("align-items-center");
		$("#navbar_ierse").removeClass("uda-ierse-clr");
		$("#cont_ierse").removeClass("ul-coll-ierse");
		$("#li_srvs_uda").css("display", "none");
		$(".ierse-li-text").removeClass("ierse-li-hr");
	} else{
		$("#services-uda").css("display", "none");
		// IERSE row
		$("#ierse_row").removeClass("justify-content-center");
		$("#ierse_row").addClass("justify-content-between");
		// UAZUAY row
		$("#uazuay_row").addClass("justify-content-center");
		// Collapse Button
		$("#btn_coll_menus").css("display", "block");
		// IERSE sites
		$("#ul_sites_ierse").removeClass("align-items-center");
		$("#navbar_ierse").addClass("uda-ierse-clr");
		$("#cont_ierse").addClass("ul-coll-ierse");
		$("#li_srvs_uda").css("display", "block");
		$(".ierse-li-text").addClass("ierse-li-hr");
	}

	// Resize or replace items on-resize
	$(window).resize(function(){
		if ($(window).width() >= 992){
			$("#services-uda").css("display", "block");
			// IERSE row
			$("#ierse_row").removeClass("justify-content-between");
			$("#ierse_row").addClass("justify-content-center");
			// UAZUAY row
			$("#uazuay_row").removeClass("justify-content-center");
			// Collapse Button
			$("#btn_coll_menus").css("display", "none");
			// IERSE sites
			$("#ul_sites_ierse").addClass("align-items-center");
			$("#navbar_ierse").removeClass("uda-ierse-clr");
			$("#cont_ierse").removeClass("ul-coll-ierse");
			$("#li_srvs_uda").css("display", "none");
			$(".ierse-li-text").removeClass("ierse-li-hr");
		} else{
			$("#services-uda").css("display", "none");
			// IERSE row
			$("#ierse_row").removeClass("justify-content-center");
			$("#ierse_row").addClass("justify-content-between");
			// UAZUAY row
			$("#uazuay_row").addClass("justify-content-center");
			// Collapse Button
			$("#btn_coll_menus").css("display", "block");
			// IERSE sites
			$("#ul_sites_ierse").removeClass("align-items-center");
			$("#navbar_ierse").addClass("uda-ierse-clr");
			$("#cont_ierse").addClass("ul-coll-ierse");
			$("#li_srvs_uda").css("display", "block");
			$(".ierse-li-text").addClass("ierse-li-hr");
		}
	});
});
