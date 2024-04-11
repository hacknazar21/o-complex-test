export function ObjectToParams(obj: object) {
    let params = []
    for (const objKey in obj) {
        params.push(`${objKey}=${obj[objKey]}`)
    }
    return params.join('&')
}
