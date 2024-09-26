function changeImg(objImg, newSrc) {
  const originalSrc = objImg.getAttribute('src');
  let originalSrcBase = objImg.getAttribute('data-original-src');
  
  if (!originalSrcBase) {
    objImg.setAttribute('data-original-src', originalSrc);
    originalSrcBase = originalSrc; // Update the originalSrcBase variable
  }
  
  if (originalSrc === originalSrcBase) {
    objImg.setAttribute('src', newSrc);
    
    setTimeout(() => {
      objImg.setAttribute('src', originalSrcBase);
    }, 575);
  }
}
