"use strict";

document.addEventListener("DOMContentLoaded", function () {
	window.addEventListener("scroll", function (e) {
		if (pageYOffset === 0) {
			this.document.querySelector("body").classList.remove("flexible");
		} else {
			this.document.querySelector("body").classList.add("flexible");
		}
	});
	window.dispatchEvent(new Event("scroll"));
	const sliderCustomerDom = document.querySelector(
		"#section-customer .slide-items"
	);
	if (sliderCustomerDom) {
		if (typeof tns != "undefined") {
			const sliderCustomer = tns({
				container: sliderCustomerDom,
				items: 1,
				autoplay: true,
				autoplayButtonOutput: false,
				controls: false,
				nav: false,
				mouseDrag: true,
				responsive: {
					768: {
						items: 2,
					},
				},
			});
		}
	}
	if (typeof basicLightbox != "undefined") {
		[].forEach.call(document.querySelectorAll("[data-type='modal']"), function (
			button
		) {
			button.addEventListener("click", function (e) {
				e.preventDefault();
				e.stopPropagation();
				const type =
					typeof button.dataset.modalType != "undefined"
						? button.dataset.modalType
						: null;
				let html = "";
				switch (type) {
					case "iframe":
						if (typeof button.href != "undefined") {
							html = `<iframe width="560" height="315" src="${button.href}" frameborder="0" allowfullscreen></iframe>`;
						}

						break;
				}
				basicLightbox
					.create(
						`
						<div class="block-modal">
							<div class="modal-content">
								${html}
							</div>
						</div>
					`
					)
					.show();
			});
		});
	}
});
