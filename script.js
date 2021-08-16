const activate = function (element) {
    // gets the element's id
    const id = element.getAttribute('id');
    const anchor = document.querySelector(`a[href="#${id}"]`);
    if (anchor === null) {
        return null
    }

    anchor.parentElement.querySelectorAll('.active').forEach(node => node.classList.remove('active'));

    anchor.classList.add('active');
}


// The Intersection Observer API allows you to set up a callback function that is called when an element, called the target, intersects the viewport (the display area). This function will be executed when a threshold is crossed in one direction or another.

const callback = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > 0) { //if the element is visible
            activate(entry.target);
        }
    });

}

// Select all the elements that have a data-spy attribute
const spies = document.querySelectorAll('[data-spy]');

if (spies.length > 0) {
    const observer = new IntersectionObserver(callback, {});
    spies.forEach(function (spy) {
        observer.observe(spy);
    });

}