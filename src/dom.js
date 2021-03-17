var form = document.getElementById('addForm');
var itemList = document.getElementById('items')
var filter = document.getElementById('filter')
    //ADD NEW LI TO UL 
form.addEventListener('submit', addItem);
//REMOVE LI FROM UL WHEN 'X' IS CLICKED
itemList.addEventListener('click', removeItem)
    //FILTER
filter.addEventListener('keyup', filterItems)

function addItem(event) {
    event.preventDefault()

    //GET INPUT VALUE
    //THE STRING THAT IS FORMED FROM THE ADD ITEMS INPUT SECTION
    var newItem = document.getElementById('item').value;
    //CREATE NEW LI TAG
    //TO ADD A NEW ITEM IN UL
    var li = document.createElement('li');
    //ADD CLASSNAME
    //TO POSITION THE LI RELATIVE TO THE OTHERS WITH BOOTSTRAP
    li.className = "list-group-item";
    //ADD TEXT NODE IN INPUT VALUE* VAR NEWITEM*
    //TAKES THE STRING FROM NEW ITEM AND PUTS IT INTO THE LI THAT WAS CREATED
    //PASS VAR NEW ITEM AS PARAMETER
    li.appendChild(document.createTextNode(newItem));
    //CREATE DELETE BUTTON ON NEWITEM
    var deleteBtn = document.createElement('button');
    //CREATE OG SO STYLE MATCHES 
    var ogDeleteBtn = document.getElementById('close-btn');
    //ADD CLASS FOR BOOTSTRAP STYLING ON BUTTON
    deleteBtn.className = ogDeleteBtn.className;
    //APPEND TEXT NODE
    deleteBtn.appendChild(document.createTextNode('X'));
    //APPEND LI TO LIST
    li.appendChild(deleteBtn);

    itemList.appendChild(li);
}

function removeItem(event) {
    if (event.target.classList.contains('delete')) {
        if (confirm('Are You Sure?')) {
            var li = event.target.parentElement;
            itemList.removeChild(li)
        }
    }
}

function filterItems(event) {
    // convert input value to lowercase
    var text = event.target.value.toLowerCase();
    console.log(text)
        //GET ALL LIS IN UL
    var items = itemList.getElementsByTagName('li');
    console.log(items)
        //CONVERT TO AN ARRAY
    Array.from(items).forEach(function(item) {
        var itemName = item.firstChild.textContent;
        console.log(itemName)
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}