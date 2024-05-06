const carouselSlide = document.querySelector('.carousel-slide');
        const carouselItems = document.querySelectorAll('.carousel-item');
        const totalItems = carouselItems.length;
        let currentIndex = 0;

        function prevSlide() {
            currentIndex = (currentIndex === 0) ? totalItems - 1 : currentIndex - 1;
            updateSlidePosition();
        }

        function nextSlide() {
            currentIndex = (currentIndex === totalItems - 1) ? 0 : currentIndex + 1;
            updateSlidePosition();
        }

        function updateSlidePosition() {
            const itemWidth = carouselItems[0].clientWidth;
            carouselSlide.style.transform = `translateX(${-itemWidth * currentIndex}px)`;
        }