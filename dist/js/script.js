(function (){
    const buttonSelector = '.hamburger';
    const asideSelector = '.aside';
    const asideOpenedClass = 'aside-open';
    const buttonOpenedClass = 'hamburger-active';
    
    const asideEl = document.querySelector(asideSelector);
    const buttonEl = document.querySelector(buttonSelector);
    
    if (!buttonEl || !asideEl) return;
    
    buttonEl.addEventListener('click', function(e){
        e.preventDefault();
        asideEl.classList.toggle(asideOpenedClass);
        buttonEl.classList.toggle(buttonOpenedClass);
    });
})();