
export class CustomMap {
    // @ts-ignore
    protected gaodeMap:AMap.Map
    constructor() {
        // @ts-ignore
        this.gaodeMap=new AMap.Map('container', {
            zoom:11, //初始化地图层级
            center: [113.23581781982419, 23.138979102002175] //初始化地图中心点
        })
        }
    }