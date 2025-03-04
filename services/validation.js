export function validateForm(data) {
    const errors = [];

    if (!data.author || data.author.trim === "" || hasNumber(data.author)) {
        errors.push("Author is required and must have no numbers");
    }

    if (!data.title || data.title.trim === "") {
        errors.push("Title is required");
    }

    if (!data.content || data.content.length < 10) {
        errors.push("Message must have at least 10 characters")
    }

    return {
        isValid: errors.length === 0,
        errors
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