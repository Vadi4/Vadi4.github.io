var link = document.querySelector(".contacts-button");
var popup = document.querySelector(".feedback-form");
var overlay = document.querySelector(".overlay");
var close = popup.querySelector(".feedback-form-button-close");
var login = popup.querySelector(".feedback-form-input");
var email = popup.querySelector(".feedback-form-email");
var textarea = popup.querySelector(".feedback-form-textarea")
var submit = popup.querySelector(".feedback-form-submit");
var storageLogin = localStorage.getItem("login");
var storageEmail = localStorage.getItem("email");

	link.addEventListener("click", function(event) {
		event.preventDefault();
		popup.classList.add("feedback-form-show");
		overlay.classList.add("overlay-show");
		
		if (storageLogin) {
			login.value = storageLogin;
			if (storageEmail) {
				email.value = storageEmail;
				textarea.focus();
			} else {
				email.focus();
			}
		} else {
			login.focus();
		}
	});

	close.addEventListener("click", function(event) {
		event.preventDefault();
		popup.classList.remove("feedback-form-show");
		overlay.classList.remove("overlay-show");
	});
	
	popup.addEventListener("submit", function(event) {
		if (!login.value || !email.value || !textarea.value) {
			event.preventDefault();
			console.log("input login and email and your question");
		} else {
			localStorage.setItem("login", login.value);
			localStorage.setItem("email", email.value);
		}
	});
	
	submit.addEventListener("click", function(event) {
		if (login.value && email.value && textarea.value) {
			popup.classList.remove("feedback-form-show");
			overlay.classList.remove("overlay-show");
		};
	});
	
	window.addEventListener("keydown", function(event) {
		if (event.keyCode === 27) {
			if (popup.classList.contains("feedback-form-show")) {
				popup.classList.remove("feedback-form-show");
				overlay.classList.remove("overlay-show");				
			}
		}
	});