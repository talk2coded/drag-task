function init() {
    var iconsCount;
    Draggable.create(".icons", {
        bounds: "svg",
        throwProps: true,

        onDrag: function () {
            if (this.hitTest("#beforeMap")) {
                gsap.to(this.target, {
                    duration: 5,
                    opacity: 0,
                    scale: 2
                })
                iconsCount = document.getElementsByClassName('icons').length;
                if (iconsCount !== undefined || iconsCount !== 'null') {
                    if (iconsCount === 1) {
                        $('#beforeDrag').hide()
                        $('#afterDrag').fadeIn(2000);
                        return;
                    }
                }
            }
        },

        onDragEnd: function () {
            setTimeout(1000);
            this.target.parentNode.removeChild(this.target);
        }
    });

}

init()