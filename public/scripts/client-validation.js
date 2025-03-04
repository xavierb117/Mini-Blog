document.getElementById('blog-form').onsubmit = () => {

    // clearErrors();

    

};

function clearErrors() {
    let errors = document.getElementsByClassName("err");
    for (let err of errors) {
        err.style.display = "none";
    }
}