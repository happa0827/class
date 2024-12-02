(() => {
class Accordion {
    constructor(obj){
        const $elm = document.querySelector(`#${obj.hookName}`);
        const $trigger = $elm.getElementsByTagName(obj.tagName);
        const triggerLen = $trigger.length;
        
        let index = 0;
        while(index < triggerLen){
            $trigger[index].addEventListener('click',(e) => this.clickHandler(e));
            index++;
        }
        this.actionunko();
    }
    clickHandler = (e) => {
        e.preventDefault();
        const $target = e.currentTarget;
       
        const $content = $target.nextElementSibling;
        if($content.style.display === 'block'){
            $content.style.display = 'none';
        }else{
                $content.style.display ='block'
                        
        }
    }

    actionunko(){
        console.log('Hello World!');
    }
}


const fuckinAccordion = new Accordion({
    hookName: 'js-FAQ',
    tagName: 'p'

});

})();
