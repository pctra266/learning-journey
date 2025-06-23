var nodes = document.getElementsByTagName('button');

for (let i = 0; i< nodes.length; i++){
    nodes[i].addEventListener('click', function(){
        console.log('You click element #' + i);
    })
}

// var i is function scope => By the time you click a button, the loop has already completed and i == nodes.length
// to fix we change var to let keyword