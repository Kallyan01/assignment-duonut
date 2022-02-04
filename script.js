// let prev = document.getElementById('prev')
function show(node) {
    let list_child = document.getElementsByClassName('card')
    console.log(typeof (list_child))
    Array.from(list_child).forEach((node) => {
        node.classList.remove('active')
    })
    console.log(node.innerHTML)
    var str = node.innerHTML;
    prev.innerHTML = str
    node.classList.add('active')
}