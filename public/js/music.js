AFRAME.registerComponent('music', {
    schema: {},
    init : function() {
        const Context_AF = this;
        Context_AF.soundElem = document.querySelector('#startMusic');
        Context_AF.el.addEventListener('click', function(event){
            console.log('Music!');
            Context_AF.soundElem.components['sound'].playSound();
        });
    }
});