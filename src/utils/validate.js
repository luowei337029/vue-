/*
    过滤特殊字符
*/
export function stripscript (str) {
  var pattern = new RegExp(
    "[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）&;—|{ }【】‘；：”“'。，、？]"
  )
  var rs = ''
  for (var i = 0; i < str.length; i++) {
    rs = rs + str.substr(i, 1).replace(pattern, '')
  }
  return rs
}
/*
    验证邮箱
*/
export function validateEmail (data) {
  var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
  if (!reg.test(data)) {
    return true
  } else {
    return false
  }
}

/*
    验证密码
*/

export function validatePassword (data) {
  let reg = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/
  if (!reg.test(data)) {
    return true
  } else {
    return false
  }
}
