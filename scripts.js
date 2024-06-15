document.addEventListener('DOMContentLoaded', function () {
    // Executes when the DOM is fully loaded and parsed

    // Add click event listeners to all links inside .ctext ul li a
    document.querySelectorAll('.ctext ul li a').forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default link behavior (e.g., navigating to another page)
            
            // Remove 'active' class from all links
            document.querySelectorAll('.ctext ul li a').forEach(function (link) {
                link.classList.remove('active');
            });
            
            // Add 'active' class to the clicked link
            link.classList.add('active');

            showContent(event.target.textContent.toLowerCase()); // Call showContent with lowercase text content of clicked link
        });
    });

    // Function to show the selected content section
    function showContent(section) {
        // Hide all content sections (.skills, .experience, .education)
        document.querySelectorAll('.ctext .skills, .ctext .experience, .ctext .education').forEach(function (content) {
            content.classList.remove('content-visible'); // Remove 'content-visible' class from all sections
        });

        // Show the selected content section
        document.querySelector('.ctext .' + section).classList.add('content-visible'); // Add 'content-visible' class to selected section
    }

    // Optionally, show one section by default (e.g., 'skills')
    showContent('skills');
});



function downloadResume() {
    window.location.href = 'images/Resume-Sajid-Miya.pdf';
}