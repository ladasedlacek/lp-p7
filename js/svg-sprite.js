$.get("https://cdn.alza.cz/Foto/or/lp/alzaexpres-complet/build/img/sprite.svg", function(data) {
    const svgSprite = document.createElement("div");
    const spriteTarget = document.querySelector('#landingpage');
    svgSprite.innerHTML = new XMLSerializer().serializeToString(data.documentElement);
    /* document.body.insertBefore(svgSprite, document.body.lastChild);
    document.body.lastElementChild.classList.add("svgsprite"); */
    spriteTarget.append(svgSprite);
    spriteTarget.lastElementChild.classList.add("svgsprite");
});
