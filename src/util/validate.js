/**
 * 获取数组的和
 * @param  {Object} array 数字数组
 * @return {Number}       数字的和
 */
export function total(array) {
  let [n1, n2, n3] = array
  return n1 + n2 + n3
}

/**
 * 判断数组中是否有 2 个值等于 n
 * @param  {Object} array 数字数组
 * @param  {Number} n     用于判断的数字
 * @return {Boolean}
 */
export function twice(array, n) {
  let _array = array.sort((a, b) => a - b)
  return _array[0] === n && _array[1] === n
}

/**
 * 判断数组中是否所有值都等于 n
 * @param  {Object} array 数字数组
 * @param  {Number} n     用于判断的数字
 * @return {Boolean}
 */
export function third(array, n) {
  return array.every(item => item === n)
}

/**
 * 判断数组中是否有两个值，一个等于 m，一个等于 n。
 * @param  {Object} array 数字数组
 * @param  {Number} m     用于判断的数字
 * @param  {Number} n     用于判断的数字，可选
 * @return {Boolean}
 */
export function include(array, m, n) {
  if (n) {
    return array.indexOf(m) > -1 && array.indexOf(n) > -1
  }
  return array.indexOf(m) > -1
}

// =======line 1=========
export function t1(dices) {
  return total(dices) >= 4 && total(dices) <= 10
}

export function t15(dices) {
  return total(dices) >= 11 && total(dices) <= 17
}

// =======line 2=========
export function t2(dices) {
  return twice(dices, 1)
}

export function t3(dices) {
  return twice(dices, 2)
}

export function t4(dices) {
  return twice(dices, 3)
}

export function t9(dices) {
  return twice(dices, 4)
}

export function t10(dices) {
  return twice(dices, 5)
}

export function t11(dices) {
  return twice(dices, 6)
}


export function t5(dices) {
  return third(dices, 1)
}

export function t6(dices) {
  return third(dices, 2)
}

export function t7(dices) {
  return third(dices, 3)
}

export function t12(dices) {
  return third(dices, 4)
}

export function t13(dices) {
  return third(dices, 5)
}

export function t14(dices) {
  return third(dices, 6)
}

export function t8(dices) {
  return (
    third(dices, 1) ||
    third(dices, 2) ||
    third(dices, 3) ||
    third(dices, 4) ||
    third(dices, 5) ||
    third(dices, 6)
  )
}

// =======line 3=========
export function t16(dices) {
  return total(dices) === 4
}
export function t17(dices) {
  return total(dices) === 5
}
export function t18(dices) {
  return total(dices) === 6
}
export function t19(dices) {
  return total(dices) === 7
}
export function t20(dices) {
  return total(dices) === 8
}
export function t21(dices) {
  return total(dices) === 9
}
export function t22(dices) {
  return total(dices) === 10
}
export function t23(dices) {
  return total(dices) === 11
}
export function t24(dices) {
  return total(dices) === 12
}
export function t25(dices) {
  return total(dices) === 13
}
export function t26(dices) {
  return total(dices) === 14
}
export function t27(dices) {
  return total(dices) === 15
}
export function t28(dices) {
  return total(dices) === 16
}
export function t29(dices) {
  return total(dices) === 17
}


// =======line 4=========
export function t30(dices) {
  return include(dices, 1, 2)
}
export function t31(dices) {
  return include(dices, 1, 3)
}
export function t32(dices) {
  return include(dices, 1, 4)
}
export function t33(dices) {
  return include(dices, 1, 5)
}
export function t34(dices) {
  return include(dices, 1, 6)
}
export function t35(dices) {
  return include(dices, 2, 3)
}
export function t36(dices) {
  return include(dices, 2, 4)
}
export function t37(dices) {
  return include(dices, 2, 5)
}
export function t38(dices) {
  return include(dices, 2, 6)
}
export function t39(dices) {
  return include(dices, 3, 4)
}
export function t40(dices) {
  return include(dices, 3, 5)
}
export function t41(dices) {
  return include(dices, 3, 6)
}
export function t42(dices) {
  return include(dices, 4, 5)
}
export function t43(dices) {
  return include(dices, 4, 6)
}
export function t44(dices) {
  return include(dices, 5, 6)
}


// =======line 5=========
export function t45(dices) {
  return include(dices, 1)
}
export function t46(dices) {
  return include(dices, 2)
}
export function t47(dices) {
  return include(dices, 3)
}
export function t48(dices) {
  return include(dices, 4)
}
export function t49(dices) {
  return include(dices, 5)
}
export function t50(dices) {
  return include(dices, 6)
}
