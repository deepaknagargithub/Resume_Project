{
    let skillBar = document.querySelectorAll('.skills-progress>div');

    let skillContainer = document.getElementById('skills');

    animationDone = false;

    function initialiseBars() {

        for(let bar of skillBar) {

            bar.style.width = 0 +'%';

        }

    }

    function fillBars() {

        for(let bar of skillBar) {

            let maxWidth = bar.getAttribute('data-bar-width');

            let currentWidth = 0;

            let interval = setInterval(function(){
                if(currentWidth>maxWidth) {
                    clearInterval(interval)
                    return
                }

                currentWidth++;
                bar.style.width = currentWidth +'%';
                console.log(currentWidth);

            },5);

        }


    }

    window.addEventListener('scroll',checkScroll);

    function checkScroll(){

        let coordinates = skillContainer.getBoundingClientRect();

        if( !animationDone && coordinates.top<window.innerHeight ){

            animationDone = true;

            console.log("skill section is visible");
            fillBars();

        } else if(coordinates.top>window.innerHeight) {
            animationDone = false;

            initialiseBars()


        }

    }


}





{
    let horizontalList = document.querySelectorAll(".javaScript a");

    for ( let i=0; i<=horizontalList.length; i++) {
        horizontalList[i].addEventListener('click',function (event){
            event.preventDefault();
            let targetSectionId = this.textContent.trim().toLowerCase();
            let targetSection = document.getElementById(targetSectionId)
            let interval = setInterval(function(){
                var targetSectionCoordinates=targetSection.getBoundingClientRect();

                console.log(targetSectionCoordinates)
                
                if( targetSectionCoordinates.top<=0){
                    clearInterval(interval);
                    return
                }
                window.scrollBy(0,50)
            },20)
            
        })

    }
}



