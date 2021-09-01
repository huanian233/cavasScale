function onWheelScale(ele){
    function onScale() {
        let scale = 1;
        let left = 0;
        let top = 0;
        return function (e) {
            const canvasparent =  ele.parentElement;
            const rect = canvasparent.getBoundingClientRect();
            if (e.deltaY < 0) {
                scale += 0.1;
                left = left - rect.width * 0.1 / 2
                top = top - rect.height * 0.1 / 2
            }
            if (e.deltaY > 0) {
                scale -= 0.1;
                left = left + rect.width * 0.1 / 2
                top = top + rect.height * 0.1 / 2
            }
            canvasparent.style.transform = `scale(${scale}, ${scale}) translate(${left}px, ${top}px)`;
            const centerx = rect.width * scale /2 + left ;
            const centery = top - rect.height * scale /2
            canvasparent.style.transformOrigin = `${centerx}px ${centery}px`;
        };
    };
    ele.parentElement.parentElement.onwheel = onScale();
}