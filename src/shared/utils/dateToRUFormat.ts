export const dateToRUFormat = (date: string) => {
    const result = new Date(date)
    if(result == "Invalid Date") return "А нету даты)"
    return new Intl.DateTimeFormat('ru-RU').format(new Date(date))
}