document.addEventListener('DOMContentLoaded', function () {
    const nav = document.getElementById('mainNav');
    const links = nav.getElementsByClassName('nav-link');
    const contents = document.getElementsByClassName('content');

    // Show initial content
    document.getElementById('home').classList.add('active');
    links[0].classList.add('selected');

    Array.from(links).forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            
            // Remove active class from all contents
            Array.from(contents).forEach(content => {
                content.classList.remove('active');
            });
            
            // Remove selected class from all links
            Array.from(links).forEach(l => {
                l.classList.remove('selected');
            });
            
            // Add selected class to clicked link
            this.classList.add('selected');
            
            // Show corresponding content
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).classList.add('active');
        });
    });
});
