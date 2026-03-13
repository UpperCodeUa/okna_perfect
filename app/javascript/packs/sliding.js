document.addEventListener("DOMContentLoaded", function () {
	if (document.querySelector("#s160")) {

		var type160s = document.querySelector("#s160");
		var type160z = document.querySelector("#z160");
		var type200z = document.querySelector("#z200");
		var typePas = document.querySelector("#pas");

		var blocks160s = document.querySelectorAll(".s160");
		var blocks160z = document.querySelectorAll(".z160");
		var blocks200z = document.querySelectorAll(".z200");
		var blocksPas = document.querySelectorAll(".pas");

		function showBlock(blocks) {
			[...blocks160s, ...blocks160z, ...blocks200z, ...blocksPas].forEach(block => {
				block.style.display = "none";
			});

			blocks.forEach(block => {
				block.style.display = "block";
			});
		}

		function setSelectedType(typeElement) {
			type160s.classList.remove("active");
			type160z.classList.remove("active");
			type200z.classList.remove("active");
			typePas.classList.remove("active");

			typeElement.classList.add("active");
		}

		showBlock(blocks160s);
		setSelectedType(type160s);

		type160s.addEventListener("click", function () {
			showBlock(blocks160s);
			setSelectedType(type160s);
		});

		type160z.addEventListener("click", function () {
			showBlock(blocks160z);
			setSelectedType(type160z);
		});

		type200z.addEventListener("click", function () {
			showBlock(blocks200z);
			setSelectedType(type200z);
		});

		typePas.addEventListener("click", function () {
			showBlock(blocksPas);
			setSelectedType(typePas);
		});
	}
});


document.addEventListener("DOMContentLoaded", function () {
	if (document.querySelector("#standart")) {

		var typeStandart = document.querySelector("#standart");
		var typeMax = document.querySelector("#max");

		var blocksStandart = document.querySelectorAll(".standart");
		var blocksMax = document.querySelectorAll(".max");

		function showBlock(blocks) {
			[...blocksStandart, ...blocksMax].forEach(block => {
				block.style.display = "none";
			});

			blocks.forEach(block => {
				block.style.display = "block";
			});
		}

		function setSelectedType(typeElement) {
			typeStandart.classList.remove("active");
			typeMax.classList.remove("active");

			typeElement.classList.add("active");
		}

		showBlock(blocksStandart);
		setSelectedType(typeStandart);

		typeStandart.addEventListener("click", function () {
			showBlock(blocksStandart);
			setSelectedType(typeStandart);
		});

		typeMax.addEventListener("click", function () {
			showBlock(blocksMax);
			setSelectedType(typeMax);
		});
	}
});
