export const debounce = (callback, timeout=500) => {
    let timer
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            callback(...args)
        }, timeout)
    }
} 