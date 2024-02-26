document.getElementById('add').addEventListener('click', function() {
    createNote();
});

function createNote() {
    var noteContainer = document.createElement('div');
    var noteHeader = document.createElement('div');
    var noteInput = document.createElement('textarea'); 

    noteContainer.classList.add('nota-container');
    noteHeader.innerHTML = `
    <div class="botoes">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>`;
    noteInput.classList.add('nota');
    noteInput.setAttribute('readonly', 'true'); 

    noteContainer.appendChild(noteHeader);
    noteContainer.appendChild(noteInput);

    document.getElementById('notesContainer').appendChild(noteContainer);

    var editButton = noteHeader.querySelector('.edit');
    editButton.addEventListener('click', function() {
        noteInput.removeAttribute('readonly'); 
        noteInput.focus(); 
    });
    
    noteInput.addEventListener('blur', function() {
        noteInput.setAttribute('readonly', 'true'); 
    });

    var deleteButton = noteHeader.querySelector('.delete');
    deleteButton.addEventListener('click', function() {
        noteContainer.remove();
    });
}
