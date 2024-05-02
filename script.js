function loadPage(page) {
    var frame = document.getElementById('content-frame');
    frame.src = page;
}


function resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
}

window.addEventListener('load', function() {
    var images = document.querySelectorAll('.skill-image');
    images.forEach(function(image) {
        var containerHeight = image.parentElement.clientHeight;
        image.style.height = containerHeight + 'px';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Get all the navigation links
    var links = document.querySelectorAll('#second-nav li a');

    // Add click event listeners to each link
    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior

            // Get the page URL from the data-page attribute
            var page = link.getAttribute('data-page');
            
            // Call the setActiveLink function
            setActiveLink(page);
            
            // Call the loadPage function
            loadPage(page);
        });
    });
});

function setActiveLink(page) {
    var links = document.querySelectorAll('#second-nav li');
    links.forEach(function(link) {
        if (link.querySelector('a').getAttribute('data-page') === page) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}