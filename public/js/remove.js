AFRAME.registerComponent('remove', {
    schema: {},
    init : function() {
        const Context_AF = this;
        Context_AF.soundElem = document.querySelector('#deleteSound');
        Context_AF.el.addEventListener('click', function(event) {
            //object clicked
            Context_AF.deleteMyself();
            console.log("Deleted!");

            Context_AF.soundElem.components['sound'].stopSound(); //stop first so we aren't trying to play more than once at same time
            Context_AF.soundElem.components['sound'].playSound();
        });
    },

    deleteMyself : function() {
        const Context_AF = this;
        Context_AF.el.parentNode.removeChild(Context_AF.el); 

        let cowEl = document.createElement('a-entity');
        cowEl.setAttribute('id', 'cow');
        cowEl.setAttribute('obj-model',{obj: '/assets/models/Cow.obj'});
        cowEl.setAttribute('remove', {}); 
        cowEl.setAttribute('position', {x:0, y:0, z:-5});
        cowEl.setAttribute('rotation', {x:0, y:-90, z:0});
        
        console.log('Base Cow Created');
        let scene = document.querySelector('a-scene');
        scene.appendChild(cowEl);
    }
});