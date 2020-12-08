import service from '../utils/request'

// 获取城市列表
export function GetCity(data = {}) {
  return service.request({
    method: "post",
    url: "/cityPicker/",
    data
  });
}

// 获取省份
// type："province"*

// 获取城市
// type："city"*
// province_code：省份编码*

// 获取区县
// type："area"*
// city_code：城市编码*

// 获取街道
// type："street"*
// area_code：区县编码*
