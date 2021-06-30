const inputValue = document.querySelector("#input")
const btnGet = document.querySelector(".btn")
const reopsContainer = document.querySelector(".reops-container")
const defaultItem = document.querySelector(".reops-container .default")
console.log(reopsContainer);

btnGet.addEventListener("click" , ()=>{
    getRepos()
})


function getRepos(){
    if (inputValue.value == ""){

        swal("you have to enter a username");


    }else{
        let userName= inputValue.value;
        fetch( `https://api.github.com/users/${userName}/repos`)
        .then(res=> res.json())
        .then(repos=>{
            defaultItem.remove()
            inputValue.value = ""

        repos.forEach(repo =>{
            let repoName = repo.name; 
            let counStars = repo.stargazers_count
            let url = repo.html_url
            appendReops(repoName ,counStars ,url)


    });



});

}
}


function appendReops(repoName ,counStars  , url){
    let repo = document.createElement("div")
    repo.classList.add("repos-item")
    let starSpan = document.createElement("span")
    starSpan.classList.add("stars")
    starSpan.innerText = "Stars : "
    let countSpan = document.createElement("span")
    countSpan.innerText = counStars
    let visitSpan = document.createElement("span")
    visitSpan.classList.add("visit")
    let visitLink = document.createElement("a")
    visitLink.setAttribute("href" , url)
    visitLink.setAttribute("target" , "blank")
    visitLink.innerHTML="Visit"
    visitSpan.append(visitLink)
    repo.append(repoName)
    repo.append(visitSpan)
    repo.append(starSpan)
    starSpan.append(countSpan)
    reopsContainer.append(repo)


    
}


