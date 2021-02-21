// variables
const courses = document.querySelector('#courses-list')
const shoppingCartContent = document.querySelector('#cart-content tbody')
const btnClearCart = document.querySelector('#clear-cart')
let coursesLS = []
// eventListeners
eventListeners()
function eventListeners() {
    courses.addEventListener('click', buyCourse)
    shoppingCartContent.addEventListener('click', removeCart)
    btnClearCart.addEventListener('click', clearCart)
    window.addEventListener('DOMContentLoaded',loadCart)
   
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
    coursesLS.push(courseInfo)
    saveToLS()
}
function addToCart(courseInfo) {
    const row = document.createElement('tr')
    row.innerHTML = `
<tr>
    <td>
        <img src="${courseInfo.image}" width="100px">
    </td>
    <td> ${courseInfo.title}</td>
    <td> ${courseInfo.price}</td>
    <td> 
        <a class="remove" href="#" data-id="${courseInfo.id}">X</a>
    </td>
</tr>
`
    shoppingCartContent.appendChild(row)

}
function removeCart(e) {
    const getIndex= coursesLS.findIndex((item,index)=>{
       return  item.id===e.target.getAttribute('data-id')
    })
    coursesLS.splice(getIndex,1)
    saveToLS()
    if (e.target.classList.contains('remove')) {
        e.target.parentElement.parentElement.remove()
    }
  
}
function clearCart() {
    while (shoppingCartContent.firstChild) {
        shoppingCartContent.firstChild.remove()
    }
    clearLS()
}
getDataFromLS()
function getDataFromLS() {
    if (localStorage.getItem('courses')) {
        coursesLS = JSON.parse(localStorage.getItem('courses'))
    }
}
function saveToLS() { 
    localStorage.setItem('courses', JSON.stringify(coursesLS))
}
function loadCart(){
    getDataFromLS()
    coursesLS.forEach((item,index)=>{
        addToCart(item)
    })
}
function clearLS(){
localStorage.clear()
coursesLS=[]
}