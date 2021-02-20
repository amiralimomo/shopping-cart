// variables
const courses = document.querySelector('#courses-list')

// eventListeners
eventListeners()
function eventListeners() {
    courses.addEventListener('click', buyCourse)
}

// functions
function buyCourse(e) {
    e.preventDefault()
    if (e.target.classList.contains('add-to-cart')) {
        const course = e.target.parentElement.parentElement
        getCourseInfo(course)

    }
}
function getCourseInfo(course) {
    const courseInfo = {
        image: course.querySelector('img').src,
        title: course.querySelector('h4').textContent,
        price: course.querySelector('span').textContent,
        id: course.querySelectorAll('a')[1].getAttribute('data-id')
    }
    addToCart(courseInfo)
}
function addToCart(courseInfo){

}