const heart = document.querySelector(".heart");
const animatioHeart = document.querySelector(".animation-heart");

heart.addEventListener('click', () => {
    animatioHeart.classList.add('animation');
    heart.classList.add('fill-color');
});

animatioHeart.addEventListener('click', () =>
{
    animatioHeart.classList.remove('animation');
    heart.classList.remove('fill-color');
});