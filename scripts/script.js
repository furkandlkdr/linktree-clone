const shareButtonDOM = document.querySelectorAll('.tile-share-button');
const shareLinkDOM = document.querySelector('.share-button');

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

shareLinkDOM.addEventListener('click', copyText);

shareButtonDOM.forEach((button) => {
    button.addEventListener('click', copyText)
});