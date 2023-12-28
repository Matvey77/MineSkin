let horizontScroll = document.querySelector('.catalog_card');
        let move_back = document.getElementById('back');
        let move_next = document.getElementById('next');

        move_next.addEventListener('click', ()=>{
            horizontScroll.style.scrollBehavior = "smooth";
            horizontScroll.scrollLeft +=1086;
        });
        move_back.addEventListener('click', ()=>{
            horizontScroll.style.scrollBehavior = "smooth";
            horizontScroll.scrollLeft -=1086;
        });