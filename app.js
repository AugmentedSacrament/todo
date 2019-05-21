(()=>{
    const btn = document.getElementById('btn-add');

    btn.addEventListener('click', (e)=>{
        e.preventDefault();
        const newItem = document.createElement('li');
        newItem.className = 'item';
        newItem.innerText = document.getElementById('input').value;
        document.getElementById('input').value = '';
        document.getElementById('item-list').appendChild(newItem);
    });

})();

const Clear = ()=>{
    document.getElementById('item-list').innerHTML = '';
};

const GetList = async ()=>{
    await fetch('https://jsonplaceholder.typicode.com/todos')
    .then(data=>{
        return data.json();
    })
    .then(resp=>{
        for(i = 0; i < 5; i++){
            const deleteItem = document.createElement('i');
            const newItem = document.createElement('li');
            newItem.appendChild(deleteItem);
            newItem.className = 'item';
            newItem.innerText = resp[i].title;

            if(resp[i].completed){
                newItem.classList = 'item complete';
            }else{
                newItem.classList = 'item incomplete';
            }
            document.getElementById('item-list').appendChild(newItem);
        }
    })
}

const DarkMode = ()=>{
    alert('Feature still in development.');
}