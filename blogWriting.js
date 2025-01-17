// localStorage.clear();

const optionBtns=document.querySelectorAll(".sub-option-btns");
const sizeList=document.querySelector(".sizeList");
const advOptions=document.querySelectorAll('.listType-options');
const blogTitle=document.getElementById('blog-title');
const blogContent=document.getElementById('blog-content');
const colorSelected=document.getElementById('colorSelect');
const highlighter=document.getElementById('highlighterColor');
const fontList=document.querySelector(".fontList");

// To store the user data when user comes back to blog page using LocalStorage
window.addEventListener('beforeunload',()=>{
  const TitleData=blogTitle.innerHTML;
  const blogData=blogContent.innerHTML;

  localStorage.setItem('titleData',TitleData);
  localStorage.setItem('blogData',blogData);
});

// To access and store data back in particular section
window.addEventListener('load',()=>{
  const TitleData=localStorage.getItem('titleData');
  const blogData=localStorage.getItem('blogData');

  blogTitle.innerHTML=TitleData;
  blogContent.innerHTML=blogData;
});


const FontFamilies = [
  'Arial Black',        // Bold
  'Comic Sans MS',      // Casual and Playful
  'Courier New',        // Monospace
  'Georgia',            // Serif, readable on screens
  'Impact',             // Bold and Condensed
  'Lucida Console',     // Monospace, typewriter style
  'Palatino Linotype',  // Elegant, longer characters
  'Trebuchet MS',       // Modern sans-serif
  'Verdana',            // Wide characters, good readability
  'Times New Roman Italic' // Italic Serif
];

// To dynamically add font
for(let i=0;i<FontFamilies.length;i++)
  {
    let option=document.createElement("option");
    option.value=FontFamilies[i];
    option.innerHTML=FontFamilies[i];
    fontList.appendChild(option);
  }

fontList.addEventListener('change',()=>{
  blogTitle.style.fontFamily=fontList.value;
  blogContent.style.fontFamily=fontList.value;
})

// Dynamically add the font size
for(let i=1;i<=7;i++)
  {
    let option=document.createElement("option");
    option.value=i;
    option.innerHTML=i;
    sizeList.appendChild(option);
  }



// To execute the format options
const modifyText=(command,defaultUi,value)=>{
  document.execCommand(command,defaultUi,value);
}

// To execute particular command when button is clicked
optionBtns.forEach((button)=>{
  button.addEventListener('click',()=>{
    modifyText(button.id,false,null);
  })
});

// To execute particular command when button is clicked
advOptions.forEach((select)=>{
  select.addEventListener('change',()=>{
    modifyText(select.id,false,select.value);
  })
});


// To change the font color
colorSelected.addEventListener('change',()=>{
  modifyText('foreColor',false,colorSelected.value);
});

// To add the highlighter to text
highlighter.addEventListener('change',()=>{
  modifyText('backColor',false,highlighter.value);
});

//to upload image
const imgBtn=document.getElementById('imgUpload');
imgBtn.addEventListener('change',(event)=>{
  const file=event.target.files[0];
  const reader=new FileReader(); //object created
  reader.readAsDataURL(file);

  reader.onload=()=>{
    const img=document.createElement('img');
    img.src=reader.result;
    img.width=200;
    img.height=200;
    blogContent.appendChild(img);
  };
});

// To upload Video
const videoBtn=document.getElementById('videoUpload');
videoBtn.addEventListener('change',(event)=>{
  const file=event.target.files[0];
  const reader=new FileReader(); //object created
  reader.readAsDataURL(file);

  reader.onload=()=>{
    const video=document.createElement('video');
    video.src=reader.result;
    video.width=200;
    video.height=200;
    video.controls=true;
    blogContent.appendChild(video);
  };
});

// to upload Audio
const audioBtn=document.getElementById('audioUpload');
audioBtn.addEventListener('change',(event)=>{
  const file=event.target.files[0];
  const reader=new FileReader(); //object created
  reader.readAsDataURL(file);

  reader.onload=()=>{
    const audio=document.createElement('audio');
    audio.src=reader.result;
    audio.controls=true;
    blogContent.appendChild(audio);
  };
});

// to delete img 
const delImgBtn=document.getElementById('delImage');
const Imgs=document.getElementsByTagName('img');

delImgBtn.addEventListener('click',()=>{
  if(Imgs.length>0)
  {
    Imgs[Imgs.length-1].remove();
  }
});

// To Delete the Video
const delVideoBtn=document.getElementById('delVideo');
const videos=document.getElementsByTagName('video');

delVideoBtn.addEventListener('click',()=>{
  if(videos.length>0)
  {
    videos[videos.length-1].remove();
  }
});

// To delet Audio
const delAudioBtn=document.getElementById('delAudio');
const audios=document.getElementsByTagName('audio');

delAudioBtn.addEventListener('click',()=>{
  if(audios.length>0)
  {
    audios[audios.length-1].remove();
  }
});

// To store the content of Blog in localStorage and move to the advanceFormat html page
const storeAndForward = document.getElementById('advBtn');
storeAndForward.addEventListener('click',()=>{

  blogContent.contentEditable="false";
  blogTitle.contentEditable="false";


  const Title=blogTitle.cloneNode(true);
  const Content=blogContent.cloneNode(true);

  blogContent.contentEditable="true";
  blogTitle.contentEditable="true";

  const TitleHtml=Title.outerHTML;
  const ContentHtml=Content.outerHTML;

  localStorage.setItem('div1',TitleHtml);
  localStorage.setItem('div2',ContentHtml);

  window.location.href="advFormatOption.html";
});