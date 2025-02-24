function showTime() {
    document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}

showTime();
setInterval(showTime, 1000);

// Load saved notes from localStorage
function loadNotes() {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    const notesContainer = document.getElementById('notesContainer');
    notesContainer.innerHTML = ''; // Clear existing notes
    notes.forEach(noteText => {
        const noteElement = document.createElement('div');
        noteElement.className = 'note';
        noteElement.textContent = noteText;
        notesContainer.appendChild(noteElement);
    });
}

loadNotes();

document.getElementById('addNoteButton').addEventListener('click', function() {
    const noteInput = document.getElementById('noteInput');
    const noteText = noteInput.value;

    if (noteText) {
        const notesContainer = document.getElementById('notesContainer');
        const noteElement = document.createElement('div');
        noteElement.className = 'note';
        noteElement.textContent = noteText;
        notesContainer.appendChild(noteElement);
        
        // Save note to localStorage
        const notes = JSON.parse(localStorage.getItem('notes')) || [];
        notes.push(noteText);
        localStorage.setItem('notes', JSON.stringify(notes));

        noteInput.value = ''; // Clear the input
    }
});
