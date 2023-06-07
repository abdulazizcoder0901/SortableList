const items = document.querySelectorAll('.item')
const sortableList = document.querySelector('.sortable-list')

items.forEach((item) =>{
    item.addEventListener('dragstart', () =>{
        setTimeout(() => item.classList.add('dragging'), 0)
    })

    item.addEventListener('dragend', () =>{
        item.classList.remove('dragging')
    })
})

sortableList.addEventListener('dragover', initSortableList)
sortableList.addEventListener('dragenter',  e => e.preventDefault())
function initSortableList(e){
    e.preventDefault()
    const draggingItem = sortableList.querySelector('.dragging')
    const siblings = [...sortableList.querySelectorAll('.item:not(.dragging)')]
    let nextSiblings = siblings.find((sibling) =>{
        return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
    })
    sortableList.insertBefore(draggingItem, nextSiblings)
}