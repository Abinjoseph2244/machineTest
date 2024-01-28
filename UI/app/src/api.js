const SERVER = "http://localhost:3001/api"
export const getTableData = () => {
    return new Promise((resolve, reject) => {
        fetch(SERVER + '/table')
            .then(res => {
                resolve(res.json())
            })
            .catch(err => {
                console.log(err)
                reject(err)
            })
    })
}
export const getPieChartData = () => {
    return new Promise((resolve, reject) => {
        fetch(SERVER + '/pie-chart')
            .then(res => {
                resolve(res.json())
            })
            .catch(err => {
                console.log(err)
                reject(err)
            })
    })
}
export const getLineData = () => {
    return new Promise((resolve, reject) => {
        fetch(SERVER + '/graph')
            .then(res => {
                resolve(res.json())
            })
            .catch(err => {
                console.log(err)
                reject(err)
            })
    })
}