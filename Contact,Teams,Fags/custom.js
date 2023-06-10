var modalTeam = document.querySelector(".team-modal");
document.querySelectorAll('#team-participants .container .row .col-xl-4 img').forEach(element => {
    element.addEventListener('click', function () {
        var obj = {
            url: this.src,
            name: this.parentElement.children[2].innerHTML,
            job: this.parentElement.children[3].innerHTML,
        }
        modalTeam.classList.add('active');
        modalName.innerHTML = obj.name;
        modalJob.innerHTML = obj.job;
        modalImg.src = obj.url;
    })
});
modalRemove.addEventListener('click', function () {
    modalTeam.classList.remove('active');
})
