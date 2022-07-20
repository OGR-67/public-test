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
        "js": "w-90",
        "python": "w-90",
        "sql": "w-80",
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

function blurBody(){
    let body = document.querySelector("#body")
    body.classList.toggle("blur")
    document.querySelector("body").classList.toggle("no-scroll")
}

function toggleDownloadAmbush(){
    blurBody()
    let ambushPopup = document.querySelector("#ambushPopup")
    ambushPopup.classList.toggle("hidden")
}

function toggleContact(){
    blurBody()
    let contactPopup = document.querySelector("#contactPopup")
    contactPopup.classList.toggle("hidden")
}

function toggleSkills(){
    blurBody()
    let skillsPopup = document.querySelector("#skillsPopup")
    skillsPopup.classList.toggle("hidden")
}

function dateDiffInYears(dateold, datenew) {
    var ynew = datenew.getFullYear();
    var yold = dateold.getFullYear();
    var diff = ynew - yold;
    return diff;
}

function putAge(){
    let now = new Date();
    let birthday = new Date("1986-10-11")
    let age = dateDiffInYears(birthday, now);
    document.querySelector("#age").innerText = age
}

function loadPreviews(){
    document.querySelector("#randomecipePreview").src = "images/randomecipe_preview.gif"
    document.querySelector("#ambushPreview").src = "images/ambush_preview.gif"
    document.querySelector("#weddingPreview").src = "images/wedding_preview.gif"
}


document.addEventListener("scroll", toggleSkillsBar)
putAge()
// document.addEventListener("load", loadPreviews)


