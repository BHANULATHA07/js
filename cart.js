var addItemId=0;
function addToCart(item){
    addItemId +=1;
    var selectedItem=document.createElement('div');
    selectedItem.classList.add('cartImg');
    selectedItem.setAttribute('id',addItemId);
    var img=document.createElement('img')
    img.setAttribute('src',item.children[0].currentSrc);
    var title=document.createElement('div');
    title.innerText=item.Children[1].innerText;
    var price=document.createElement('div');
    price.innerText=item.Children[2].Children[0].innerText;
    var select=document.createElement('span');
    select.innerHTML=item.Children[2].Children[1].value;
    price.append(select);
    var delBtn=document.createElement('button');
    delBtn.innerText="Delete";
    delBtn.setAttribute('onclick','del('+addItemId+')')
    var CartItems=document.getElementById('card');
    selectedItem.append(img);
    selectedItem.append(title);
    selectedItem.append(price);
    selectedItem.append(delBtn);
    CartItems.append(selectedItem);

}
function del(item){
    document.getElementById(item).remove();
}