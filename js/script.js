let aboutContent = document.getElementById("about-content");

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entrie)=>{
        if(entrie.isIntersecting){
            entrie.target.classList.add('show');
        }else{
            FileSystemEntry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el)=> observer.observe(el));