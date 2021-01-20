export default function optionStyle(data) {
    var obj = {
        dan: [],
        shuang: [],
        three: []
    }
    data.filter((item, idx) => {
        item.idx = idx + 1
        if((idx + 1) % 3 == 0) {
            obj.three.push(item)
        } else if((idx + 1) % 3 == 2){
            obj.shuang.push(item)
        } else {
            obj.dan.push(item)
        }
    })
  
    return obj
}