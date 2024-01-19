let horizontScroll = document.querySelector('.catalog_card');
let move_back = document.getElementById('back');
let move_next = document.getElementById('next');
let catalog_card_page = document.querySelector('.catalog_card_page').
                                        getBoundingClientRect().width


    function updateCatalogCardPage() {
        catalog_card_page = document.
        querySelector('.catalog_card_page').getBoundingClientRect().width;
    }

    window.addEventListener('resize', updateCatalogCardPage);

    move_next.addEventListener('click', ()=>{
        horizontScroll.style.scrollBehavior = "smooth";
        horizontScroll.scrollLeft +=catalog_card_page;
    });
    move_back.addEventListener('click', ()=>{
        horizontScroll.style.scrollBehavior = "smooth";
        horizontScroll.scrollLeft -=catalog_card_page;
    });
