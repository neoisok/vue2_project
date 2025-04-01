
// 公共的请求的方法
import base from "./base";  // 引入接口地址
import axios from "@/utils/request"; // 引入封装的axios
const api  = {
    // 这里面方法给组件调用 一般组件生命周期创建的时候 create 直接调用完成后渲染数据到页面
    // 首页统计数据 
    totalInfo(){
        return axios.get(base.totalInfo) 
    },
    /**
     * 首页订单数据
     * @returns 
     */
    orderInfo(){
        return axios.get(base.orderInfo) 
    },

     /**
     * 图表数据
     * @returns 
     */
     format(){
        return axios.get(base.format) 
    },

}
export default api;