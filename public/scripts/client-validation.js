document.getElementById('blog-form').onsubmit = () => {

    // clearErrors();
    let isValid = true;

    // Validate Author - must be there and have no nums
    const author = document.getElementById('author').value.trim();
    if (!author) {
        document.getElementById('err-author').style.display = 'inline';
        isValid = false;
    }

    return isValid;

};

function clearErrors() {
    let errors = document.getElementsByClassName("err");
    for (let err of errors) {
        err.style.display = "none";
    }
}