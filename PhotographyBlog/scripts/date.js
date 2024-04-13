function formatDate(date) {
    const monthMapper = {
        "01": "January",
        "02": "February",
        "03": "March",
        "04": "April",
        "05": "May",
        "06": "June",
        "07": "July",
        "08": "August",
        "09": "September",
        "10": "October",
        "11": "November",
        "12": "December",
    }

    let year, month, day;

    // let dateInfo = date.split("-");
    // year = dateInfo[0];
    // month = dateInfo[1];
    // day = dateInfo[2];

    [year, month, day] = date.split("-");

    return `${monthMapper[month]} ${day}, ${year}`
}