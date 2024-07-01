const carousel = new bootstrap.Carousel('#myCarousel') //carousels images


const btn_SignIn = document.getElementById('btn_SignIn');
btn_SignIn.onclick = (i) =>{
    const signIn_container = document.createElement('div');
    signIn_container.classList.add('signIn-container');

    const imgElement = document.createElement('img');
    imgElement.classList.add('card-image');
    imgElement.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Z5uUE3frL0NVyy3SySL7oc1Msyk6gvV4pg&s";
    imgElement.id = i;
    imgElement.style.display = 'block';

}