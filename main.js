window.addEventListener('scroll', () => {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 25) {
    document.querySelector(".an").style.display = "flex";
  }
})