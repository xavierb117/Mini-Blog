export function validateForm(data) {
    const errors = [];

    if (!data.author || data.author.trim === "" || hasNumber(data.author)) {
        errors.push("Author is required and must have no numbers");
    }

    return {
        isValid: errors.length === 0,
        errors
    }
}

function hasNumber(author) {
    for (let i = 0; i < author.length; i++) {
        let char = author.charAt(i);
        if (isNaN(char)) {
            return true;
        }
    }
    return false
}