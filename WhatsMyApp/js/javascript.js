function openNav() {
	document.getElementById("side-two").style.width = "100%";
}
			
function closeNav() {
	document.getElementById("side-two").style.width = "0";
}
			
function openContact() {
	document.getElementById("list-contact").style.width = "100%";
}
			
function closeContact() {
	document.getElementById("list-contact").style.width = "0";
}
			
function openProfile() {
	document.getElementById("profile-wrap").style.width = "40%";
	document.getElementById("nav-tabContent").style.width = "62%";
}
			
function closeProfile() {
	document.getElementById("profile-wrap").style.width = "0";
	document.getElementById("nav-tabContent").style.width = "auto";
}
			
function mobFuction() {
	document.getElementById("side-one").classList.add("d-none", "d-md-block");
}
			
function closeFuction() {
	document.getElementById("side-one").classList.remove("d-none", "d-md-block");
}
$(document).ready(function(){
    $(".list-group-item").click(function(){
        $('.active .badge').remove();
    });
});