let name = document.getElementById('name')
let price = document.getElementById('price')
let mark = document.getElementById("mark")
let date = document.getElementById("date")
let category = document.getElementById("category")
let sale = document.getElementById("sale")
let nameRe = /^[a-z]{1,30}$/i;
let priceRe = /^\d+$/;
let toedit;


document.getElementById('add').addEventListener("click",function(){
    let valide = true
if(nameRe.test(document.getElementById("name").value)){
    document.getElementById('nameerror').classList.remove('show');
    document.getElementById('name').classList.add('valide');
    document.getElementById('name').classList.remove('invalide');


}else{
    valide= false;
    document.getElementById('nameerror').classList.add('show');
    document.getElementById('name').classList.add('invalide');
    document.getElementById('name').classList.remove('valide');
}
if (document.getElementById('mark').value=="Mark"){
    valide = false
    document.getElementById('markerror').classList.add('show');
    mark.classList.add('invalide');
    mark.classList.remove('valide')
}else{
    mark.classList.add('valide');
    mark.classList.remove('invalide');
}
if(priceRe.test(document.getElementById('price').value)){
    document.getElementById('price').classList.add('valide');
    document.getElementById('price').classList.remove('invalide');
}else{
    valide= false
    document.getElementById('priceerror').classList.add('show');
    document.getElementById('price').classList.add('invalide');
    document.getElementById('price').classList.remove('valide');
}
if(document.getElementById('date').value==''){
    document.getElementById('dateerror').classList.add('show');
    date.classList.add('invalide');
    date.classList.remove('valide');
    valide= false
}else{
    date.classList.add('valide')
    date.classList.remove('invalide')
}
if(document.getElementById('category').value=="Category"){
    valide=false
    document.getElementById('categoryerror').classList.add('show');
    category.classList.add('invalide')
    category.classList.remove('valide')
}else{
    category.classList.add('valide')
    category.classList.remove('invalide')

}
if(document.querySelector('[name=sale]:checked')==null){
    valide=false
    document.getElementById('saleerror').classList.add('show');
    sale.classList.add('invalide')
    sale.classList.remove('valide')
}
if (valide === true){
    let nameValue = document.getElementById('name').value
    let priceValue = document.getElementById('price').value
    let markValue =document.getElementById("mark").value
    let dateValue = document.getElementById("date").value
    let categoryValue = document.getElementById("category").value
    let saleValue = document.querySelector('[name=sale]:checked').value
    let tr = document.createElement("tr"); 
    let MyArray = [nameValue , markValue ,priceValue, dateValue , categoryValue , saleValue]
    for (let index = 0; index < 6; index++) {
        let td = document.createElement("td");
        td.innerHTML = MyArray[index]
        tr.appendChild(td)
    }
        
    let remove = document.createElement("button");
    let edit = document.createElement("button");
    let removeS = document.createTextNode("remove")
    let editS = document.createTextNode("Edit")
    let lasttd = document.createElement("td")
    
    remove.classList.add('remove')
    edit.classList.add('edit')
    
    lasttd.appendChild(remove)
    lasttd.appendChild(edit)
    tr.appendChild(lasttd)
    edit.appendChild(editS)
    remove.appendChild(removeS)
      document.getElementById("table").appendChild(tr)
    document.querySelector("form").reset()
        for (let index = 0; index < document.querySelectorAll('.remove').length; index++) {
            document.querySelectorAll(".remove")[index].addEventListener("click",function(e){
                e.target.parentElement.parentElement.remove()
            })
        for (let index = 0; index <document.querySelectorAll('.edit').length; index++) {
            document.querySelectorAll(".edit")[index].addEventListener("click",function(e){
                 toedit = e.target.parentElement.parentElement;
                document.getElementById("name").value = e.target.parentElement.parentElement.children[0].innerHTML;
                document.getElementById("mark").value = e.target.parentElement.parentElement.children[1].innerHTML ;
                document.getElementById("price").value = e.target.parentElement.parentElement.children[2].innerHTML ;
                document.getElementById("date").value = e.target.parentElement.parentElement.children[3].innerHTML ;
                document.getElementById("category").value = e.target.parentElement.parentElement.children[4].innerHTML ;
                if (e.target.parentElement.parentElement.children[5].innerHTML== "Yes" ){
                    document.getElementById("Yas").setAttribute("checked","");
                }else{

                }
            })
        }
           
        }
        
       
    
}}

)

document.getElementById("editer").addEventListener("click",function(){
    toedit.children[0].innerHTML = document.getElementById("name").value;
    toedit.children[1].innerHTML = document.getElementById("mark").value;
    toedit.children[2].innerHTML = document.getElementById("price").value;
    toedit.children[3].innerHTML = document.getElementById("date").value;
    toedit.children[4].innerHTML = document.getElementById("category").value;
    toedit.children[5].innerHTML = document.querySelector("[type=radio]:checked").value;

})

 

