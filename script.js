function isInViewport(element){
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        )
}

function toggleSkillsBar() {
    let skills = {
        "html": "w-max",
        "css": "w-80",
        "js": "w-60",
        "python": "w-80",
        "sql": "w-60",
    }
    for (let skill of Object.entries(skills)) {
        let sql = document.getElementById("sql")
        if (isInViewport(sql)) {
            document.getElementById(skill[0]).classList.remove("w-0")
            document.getElementById(skill[0]).classList.add(skill[1])
        }
        else{
            if (document.getElementById(skill[0]).classList.contains(skill[1])) {
                document.getElementById(skill[0]).classList.remove(skill[1])
                document.getElementById(skill[0]).classList.add("w-0")
            }
        }
    }
}

function toggleDownloadAmbush(){
    let body = document.querySelector("#body")
    body.classList.toggle("blur")
    let ambushPopup = document.querySelector("#ambushPopup")
    ambushPopup.classList.toggle("hidden")
}

document.addEventListener("scroll", toggleSkillsBar)