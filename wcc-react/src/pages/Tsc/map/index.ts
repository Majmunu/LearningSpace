import {User} from "./User";
import {Company} from "./Company";
import {CustomMap} from "./CustomMap";
const user=new User();
console.log(user)
const company=new Company();
console.log(company)
// new AMap.Map(document.getElementById('container'), {
//     resizeEnable: true, //是否监控地图容器尺寸变化
//     zoom:11, //初始化地图层级
//     center: [113.23581781982419, 23.138979102002175] //初始化地图中心点
// });
// @ts-ignore

const customMap=new CustomMap();
console.log(11111,customMap)