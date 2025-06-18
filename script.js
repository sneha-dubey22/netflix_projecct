
const carousel = document.querySelector('.carousel');
  const leftBtn = document.querySelector('.arrow.left');
  const rightBtn = document.querySelector('.arrow.right');

  leftBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: -300, behavior: 'smooth' });
  });

  rightBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: 300, behavior: 'smooth' });
  });


const button = document.querySelectorAll('.faq-btn');
button.forEach(btn => {
      btn.addEventListener("click" , () => {
          const targetId = btn.getAttribute('data-target')
          const targetAns = document.getElementById (targetId);
          const icon = btn.querySelector(".icon");

          document.querySelectorAll('.faq-answer').forEach(ans => {
            if (ans !==targetAns) ans.style.display = 'none'
          });

          document.querySelectorAll('.faq-btn  .icon').forEach(ic =>{
            if (ic !== icon) ic.textContent = '+'
          });


          if (targetAns.style.display === 'block'){
            targetAns.style.display = 'none'
            icon.textContent = '+'
          }
          else {
            targetAns.style.display = 'block'
            icon.textContent = '-'
          }
      })
});



