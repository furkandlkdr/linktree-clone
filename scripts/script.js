const shareButtonDOM = document.querySelectorAll('.tile-share-button');

async function copyText(e) {
    e.preventDefault();
    const link = this.getAttribute('link');
    try{
        await navigator.clipboard.writeText(link);
        alert('Link copied to clipboard \n' + link);
    }catch(err){
        console.log(err);
    }
}

shareButtonDOM.forEach((button) => {
    button.addEventListener('click', copyText)
});