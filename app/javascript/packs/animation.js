// document.addEventListener('DOMContentLoaded', function() {
//   const slider = document.getElementById('slider');
//   const photos = document.querySelectorAll('.photo');

//   slider.addEventListener('input', function() {
//     const value = parseInt(this.value);

//     photos.forEach((photo, index) => {
//       if (index + 1 === value) {
//         photo.style.display = 'block';
//       } else {
//         photo.style.display = 'none';
//       }
//     });
//   });
// });

function initializeSlider(sliderId, photoSelector) {
  const slider = document.getElementById(sliderId);
  const photos = document.querySelectorAll(photoSelector);
  if (document.getElementById(sliderId)) {
    slider.addEventListener('input', function () {
      const value = parseInt(this.value);

      photos.forEach((photo, index) => {
        photo.style.display = index + 1 === value ? 'block' : 'none';
      });
    });
  }
  else {}
}

document.addEventListener('DOMContentLoaded', function () {
  initializeSlider('slider', '.photo');
  initializeSlider('sliderb', '.photob');
  initializeSlider('slider2', '.photo2');
  initializeSlider('slider2b', '.photo2b');
  initializeSlider('slider3', '.photo3');
  initializeSlider('slider3b', '.photo3b');
  initializeSlider('slider4', '.photo4');
  initializeSlider('slider4b', '.photo4b');
  initializeSlider('slider5', '.photo5');
  initializeSlider('slider5b', '.photo5b');
});

//==========================Switch types====================

document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector("#type-alustule")) {

    var alustuleType = document.querySelector("#type-alustule");
    var aluglassType = document.querySelector("#type-aluglass");
    var glassType = document.querySelector("#type-glass");

    var alustuleBlock = document.querySelector(".alustule");
    var aluglassBlock = document.querySelector(".aluglass");
    var glassBlock = document.querySelector(".glass");

    function showBlock(selectedBlock) {
      alustuleBlock.style.display = "none";
      aluglassBlock.style.display = "none";
      glassBlock.style.display = "none";

      selectedBlock.style.display = "block";
    }

    function setSelectedType(typeElement) {
      alustuleType.classList.remove("selected");
      aluglassType.classList.remove("selected");
      glassType.classList.remove("selected");

      typeElement.classList.add("selected");
    }

    showBlock(alustuleBlock);
    setSelectedType(alustuleType);

    alustuleType.addEventListener("click", function () {
      showBlock(alustuleBlock);
      setSelectedType(alustuleType);
    });

    aluglassType.addEventListener("click", function () {
      showBlock(aluglassBlock);
      setSelectedType(aluglassType);
    });

    glassType.addEventListener("click", function () {
      showBlock(glassBlock);
      setSelectedType(glassType);
    });
  }
else {}
});


document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector("#type-p8-passive")) {

    var p8passiveType = document.querySelector("#type-p8-passive");
    var p8Type = document.querySelector("#type-p8");
    var p7Type = document.querySelector("#type-p7");
    var p7energyType = document.querySelector("#type-p7-energy");
    var p6Type = document.querySelector("#type-p6");

    var p8passiveBlock = document.querySelector(".p8-passive");
    var p8Block = document.querySelector(".p8");
    var p7Blocks = document.querySelectorAll(".p7");
    var p7energyBlock = document.querySelector(".p7-energy");
    var p6Block = document.querySelector(".p6");

    function hideAllBlocks() {
      p8passiveBlock.style.display = "none";
      p8Block.style.display = "none";
      p7Blocks.forEach(function (block) {
        block.style.display = "none";
      });
      p7energyBlock.style.display = "none";
      p6Block.style.display = "none";
    }

    function showBlock(selectedBlock) {
      hideAllBlocks();
      if (selectedBlock instanceof NodeList) {
        selectedBlock.forEach(function (block) {
          block.style.display = "block";
        });
      } else {
        selectedBlock.style.display = "block";
      }
    }

    function setSelectedType(typeElement) {
      p8passiveType.classList.remove("selected");
      p8Type.classList.remove("selected");
      p7Type.classList.remove("selected");
      p7energyType.classList.remove("selected");
      p6Type.classList.remove("selected");

      typeElement.classList.add("selected");
    }

    function activateBlockFromHash(hash) {
      switch (hash) {
        case "#balance":
          showBlock(p8Block);
          setSelectedType(p8Type);
          break;
        case "#elegance":
          showBlock(p7Blocks);
          setSelectedType(p7Type);
          break;
        case "#energy":
          showBlock(p7energyBlock);
          setSelectedType(p7energyType);
          break;
        case "#exellent":
          showBlock(p6Block);
          setSelectedType(p6Type);
          break;
        default:
          showBlock(p8passiveBlock);
          setSelectedType(p8passiveType);
          break;
      }
    }

    activateBlockFromHash(window.location.hash);

    window.addEventListener("hashchange", function () {
      activateBlockFromHash(window.location.hash);
    });

    p8passiveType.addEventListener("click", function () {
      showBlock(p8passiveBlock);
      setSelectedType(p8passiveType);
    });

    p8Type.addEventListener("click", function () {
      showBlock(p8Block);
      setSelectedType(p8Type);
    });

    p7Type.addEventListener("click", function () {
      showBlock(p7Blocks);
      setSelectedType(p7Type);
    });

    p7energyType.addEventListener("click", function () {
      showBlock(p7energyBlock);
      setSelectedType(p7energyType);
    });

    p6Type.addEventListener("click", function () {
      showBlock(p6Block);
      setSelectedType(p6Type);
    });

  }
});
