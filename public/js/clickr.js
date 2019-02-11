AFRAME.registerComponent('clickr', {
    schema: {},
    init : function() {
        const Context_AF = this;
        Context_AF.soundElem = document.querySelector('#createSound');
        //Context_AF.oldCow = document.querySelector('#cow');
        Context_AF.el.addEventListener('click', function(event){
            //object clicked
            Context_AF.cowMaker();
            console.log('Success!');

            Context_AF.soundElem.components['sound'].stopSound(); 
            Context_AF.soundElem.components['sound'].playSound();
        });
    },

    cowMaker : function() {
        const Context_AF = this;

        //Context_AF.oldCow.parentNode.removeChild(Context_AF.oldCow);

        let cowEl = document.createElement('a-entity');
        cowEl.setAttribute('id', 'cow');
        cowEl.setAttribute('obj-model',{obj: '/assets/models/Cow.obj'});
        cowEl.setAttribute('material', {src: '/assets/textures/Cow_r.png'});
        cowEl.setAttribute('remove', {}); 
        cowEl.setAttribute('position', {x:0, y:0, z:-5});
        cowEl.setAttribute('rotation', {x:0, y:-90, z:0});
        
        console.log('Success');
        let scene = document.querySelector('a-scene');
        scene.appendChild(cowEl);
    }
});