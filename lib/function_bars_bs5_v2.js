const COLLAPSE_WIDTH = 992;

// Tooltip triggers
let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
	let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
	return new bootstrap.Tooltip(tooltipTriggerEl)
})

/** _____________ Navbar IERSE exist
 * Check if IERSE Navbar exists determining how logos are positioned and
 * controlling the appearence of the collapse button for IERSE links
 */
function navbar_ierse_exists(){
	let element = document.getElementById('navbar_ierse');

	if (element !== null) {
		return true;
	} else {
		return false;
	}
}

$(document).ready(function(){
	// Resize or replace items on-load
	resize_replace_header_elm();

	// Resize or replace items on-resize
	$(window).resize(function(){
		resize_replace_header_elm();
	});
});


// Resize or replace header elements depending on set collapse width
function resize_replace_header_elm(){
	if ($(window).width() >= COLLAPSE_WIDTH){
		// UDA Services
		$("#services-uda").css("display", "block");
		// UAZUAY row
		$("#uazuay_row").removeClass("justify-content-center");

		// IERSE row
		$("#ierse_row").removeClass("justify-content-between");
		$("#ierse_row").addClass("justify-content-center");
		// Collapse Button
		$("#btn_coll_menus").css("display", "none");
		// IERSE sites
		$("#ul_sites_ierse").addClass("align-items-center");
		$("#navbar_ierse").removeClass("uda-ierse-clr");
		$("#cont_ierse").removeClass("ul-coll-ierse");
		$("#li_srvs_uda").css("display", "none");
		$(".ierse-li-text").removeClass("ierse-li-hr");
	} else{
		// UDA Services
		$("#services-uda").css("display", "none");
		// UAZUAY row
		$("#uazuay_row").addClass("justify-content-center");

		// IERSE row
		$("#ierse_row").removeClass("justify-content-center");
		$("#ierse_row").addClass("justify-content-between");
		// Collapse Button
		$("#btn_coll_menus").css("display", "block");
		// IERSE sites
		$("#ul_sites_ierse").removeClass("align-items-center");
		$("#navbar_ierse").addClass("uda-ierse-clr");
		$("#cont_ierse").addClass("ul-coll-ierse");
		$("#li_srvs_uda").css("display", "block");
		$(".ierse-li-text").addClass("ierse-li-hr");
	}
}