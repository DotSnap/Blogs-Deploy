function setCookie(name, value, daysToExpire) {
    const date = new Date();
    date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
    const expires = "; expires=" + date.toUTCString();
    document.cookie =
        name + "=" + encodeURIComponent(value) + expires + "; path=/";
}

function getCookie(name) {
    const cookies = document.cookies.split(";").map((cookie) => cookie.trim());

    for (const cookie of cookies) {
        const [key, value] = cookie.split("=");
        if (key === name) {
            return decodeURIComponent(value);
        }
    }

    return null;
}
