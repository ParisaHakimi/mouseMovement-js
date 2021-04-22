const wrapper = document.querySelector('.wrapper');
const child = document.querySelector('.child');

wrapper.addEventListener('mousemove', function(e) {
    const mouseX = e.offsetX;
    const mouseY = e.offsetY;
    child.style.left = `${mouseX}px`;
    child.style.top = `${mouseY}px`;
    // console.log('mouse moved');
    console.log(e.offsetY);
    child.style.backgroundColor = `rgb(${mouseX},${mouseY},${mouseY})`;
    child.style.transform = `translate(-50%,-50%) rotate(${mouseX}deg)`;
})