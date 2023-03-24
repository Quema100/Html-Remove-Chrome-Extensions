document.documentElement.addEventListener('click', function(event) {
  event.preventDefault()
  const htmlCode =event.target.innerHTML;
  const elementsToRemove =document.querySelectorAll('*')
  elementsToRemove.forEach(function(element) {
    if (element.innerText == htmlCode) {
      element.remove();
    }
  });
  console.log(htmlCode);
});