export function trim(str) {
  return str.replace(/(^\s*)|(\s*$)/g, "");
}

export function phoneCheck(phone) {
  const mobile = /^[1][3,4,5,7,8][0-9]{9}$/
  return mobile.test(phone)
}
