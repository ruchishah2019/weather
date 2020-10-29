export const convertTemp = temp => Math.round(temp-273);

export const convertDate = date => {
    date = date*1000;
    const d = new Date(date);
    const day = d.getDate();
    const month = d.getMonth();
    const year = d.getFullYear();
    const hr = d.getHours();
    const min = d.getMinutes();
    const sec = d.getSeconds();
    
    return `${day}/${month}/${year}  ${hr}:${min}:${sec}`
}