document.addEventListener('DOMContentLoaded', function () {

    document.querySelectorAll('.ctext ul li a').forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault(); 
            document.querySelectorAll('.ctext ul li a').forEach(function (link) {
                link.classList.remove('active');
            });
            
            link.classList.add('active');

            showContent(event.target.textContent.toLowerCase()); 
        });
    });

    function showContent(section) {
      
        document.querySelectorAll('.ctext .skills, .ctext .experience, .ctext .education').forEach(function (content) {
            content.classList.remove('content-visible'); 
        });

        document.querySelector('.ctext .' + section).classList.add('content-visible'); 
    }

    showContent('skills');
});



function downloadResume() {
    window.location.href = 'images/Resume-Sajid-Miya.pdf';
}
