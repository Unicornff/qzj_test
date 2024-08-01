import * as XLSX from 'xlsx'

function autoWidthFunc(ws: any, data: any) {
    // set worksheet max width per col
    const colWidth = data.map((row: any) => row.map((val: any) => {
        var reg = new RegExp("[\\u4E00-\\u9FFF]+", "g");//检测字符串是否包含汉字
        if (val == null) {
            return { wch: 10 }
        } else if (reg.test(val)) {
            return { wch: val.toString().length * 2 }
        } else {
            return { wch: val.toString().length }
        }
    }))
    // start in the first row
    const result = colWidth[0]
    for (let i = 1; i < colWidth.length; i++) {
        for (let j = 0; j < colWidth[i].length; j++) {
            if (result[j].wch < colWidth[i][j].wch) {
                result[j].wch = colWidth[i][j].wch
            }
        }
    }
    ws['!cols'] = result
}

function jsonToArray(key: any, jsonData: any) {
    return jsonData.map((v: any) => key.map((j: any) => { return v[j] }))
}

const exportArrayToExcel = ({ key, data, title, fileName, autoWidth }: any) => {
    const wb = XLSX.utils.book_new()
    const arr = jsonToArray(key, data)
    arr.unshift(title)
    const ws = XLSX.utils.aoa_to_sheet(arr)
    if (autoWidth) {
        autoWidthFunc(ws, arr)
    }
    XLSX.utils.book_append_sheet(wb, ws, fileName)
    XLSX.writeFile(wb, fileName + '.xlsx')
}

export default exportArrayToExcel


