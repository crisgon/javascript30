(function(win, doc){
  'use strict';

  const links = doc.querySelectorAll('a');
  const highlight = doc.createElement('span');
  highlight.classList.add('highlight');
  doc.body.appendChild(highlight);

  links.forEach(a => a.addEventListener('mouseenter', highlightLinks));

  function highlightLinks() {
    const linkCoords = this.getBoundingClientRect();
    const coords = {
      width: linkCoords.width,
      height: linkCoords.height,
      top: linkCoords.top + win.scrollY,
      left: linkCoords.left + win.scrollX
    };

    highlight.style.width = `${coords.width}px`;
    highlight.style.height = `${coords.height}px`;
    highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
    console.log(linkCoords);
  }
}(window, document));