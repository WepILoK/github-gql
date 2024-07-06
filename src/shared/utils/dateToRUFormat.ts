export const dateToRUFormat = (date: string) => {
    if(!date) return "А нету даты)"
    const result = new Date(date)
    return new Intl.DateTimeFormat('ru-RU').format(result)
}