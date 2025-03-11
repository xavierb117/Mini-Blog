document.getElementById('blog-form').onsubmit = () => {

    clearErrors();
    let isValid = true;

    // Validate Author - must have input and have no nums
    const author = document.getElementById('author').value.trim();
    if (!author) {
        document.getElementById('err-author').style.display = 'inline';
        isValid = false;
    }
    if (hasNumber(author)) {
        document.getElementById('err-author').style.display = 'inline';
        isValid = false;
    }

    // Validate Title - must have input
    const title = document.getElementById('title').value.trim();
    if (!title) {
        document.getElementById('err-title').style.display = 'inline';
        isValid = false;
    }

    // Validate content - must have atleast 10 characters
    const content = document.getElementById('content').value.trim();
    if (content.length < 10) {
        document.getElementById('err-content').style.display = 'inline';
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

function hasNumber(author) {
    for (let i = 0; i < author.length; i++) {
        let char = author.charAt(i);
        if (!isNaN(char)) {
            return true;
        }
    }
    return false
}