// localStorage.clear();


const optionBtns=document.querySelectorAll('.options');
const saveBtn=document.getElementById('saveBtn');
const Newnote=document.getElementById('note');


function modifyText(command,defaultUi,value)
{
    document.execCommand(command,defaultUi,value);
}
optionBtns.forEach((button)=>{
    button.addEventListener('click',()=>{
        modifyText(button.id,false,null);
    })
});

saveBtn.addEventListener('click',()=>{
    // Access all previous notes as well
    let notes=JSON.parse(localStorage.getItem('AllNotes')) || [];
    // Append the new Note
    Newnote.contentEditable=false;
    const noteHTML=Newnote.outerHTML;
    notes.push(noteHTML);
    Newnote.contentEditable=true;
    // Store back the notes under same localStorage
    localStorage.setItem('AllNotes',JSON.stringify(notes));
    window.location.href="notes.html";
});


