const buttonShowModal = document.querySelector(".show-modal");
const modalImages = document.querySelector(".modal-images");
const images = document.querySelectorAll(".modal-images-img");

if(images.length > 0){
    images[0].classList.add("active");
    const src = images[0].querySelector("img").src;
    document.body.style = "background-image: url(" + src + ")";
}

const handleShowModal = (e) => {
    e.target.classList.toggle("active");
    modalImages.classList.toggle("active");
}
const handleRemoveAllActive = () => {
    images.forEach(image => image.classList.remove("active"));
}
const handleChangeBackground = (e) => {
    const element = e.target.closest(".modal-images-img");
    const src = element.querySelector("img").src;
    handleRemoveAllActive();
    element.classList.add("active");
    document.body.style = "background-image: url(" + src + ")";
}
images.forEach(item => item.addEventListener("click", handleChangeBackground));
buttonShowModal.addEventListener("click", handleShowModal);
