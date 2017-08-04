let getSec = () => {
    let today = new Date();
    let milliseconds = Date.UTC(today.getFullYear(), today.getMonth() + 1, today.getUTCDate());
    return milliseconds / 1000
}

console.log(getSec());