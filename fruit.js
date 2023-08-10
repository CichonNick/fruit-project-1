
const fruitList = [
    'Apple', 
    'Apricot', 
    'Avocado', 
    'Banana', 
    'Bilberry', 
    'Blackberry', 
    'Blackcurrant', 
    'Blueberry', 
    'Boysenberry', 
    'Currant', 
    'Cherry', 
    'Coconut', 
    'Cranberry', 
    'Cucumber', 
    'Custard apple', 
    'Damson', 
    'Date', 
    'Dragonfruit', 
    'Durian','Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu' 
];

const resultsBox = document.querySelector(".result-box");
const inputsBox = document.getElementById("input-box");

inputsBox.onkeyup = function(){
    let result = [];
    let input = inputsBox.value;
    if(input.length){
        result = fruitList.filter((keyword)=>{
              return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);

    if(!result.letngth){
        resultsBox.innerHTML = '';
    }
}
function display(result){
    const content = result.map((list)=>{
        return "<li onclick=selectInput(this)>" + list + "</li>";
    });

    resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";

}

function selectInput(list){
    inputsBox.value = list.innerHTML;
    resultsBox.innerHTML = '';
}