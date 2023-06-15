export default (params) => {
    let flag = false;
    try {
        if (!Array.isArray(params)) flag = params.trim() === ''
        else {
            params.forEach(item => {
                if (item.trim() === '') flag = true
            });
        }
        return flag
    } catch (error) {
        return null
    }
}