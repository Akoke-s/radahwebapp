export const truncate = (str, n, text='...') => {
    return (str.length > n) ? str.substr(0, n - 1) + text : str;
}