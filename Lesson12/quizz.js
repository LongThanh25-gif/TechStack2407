const $items = document.querySelectorAll('li.favorite-list-item');
for(let $item of $items){
    $item.innerText = 'I love this thing';
    $item.style.color = 'red';
}
const content = prompt('Nhập nội dung');
const $item = document.createElement('li');
$item.innerText = content;
document.getElementById('favorite-list').appendChild($item);
