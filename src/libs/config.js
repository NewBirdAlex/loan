let install = (vue, options) => {
  vue.prototype.$config = {
    httpPrefix: 'http://loan.lcfex.com/',
//     httpPrefix: 'http://192.168.20.96:8080/',
//     httpPrefix: 'http://192.168.40.144:8080/Loan/',
    interfaceV1: 'http://loan.lcfex.com/inf/product/'
//     interfaceV1: 'http://192.168.20.96:8080/inf/product/'
    // interfaceV1: 'http://192.168.40.144:8080/Loan/inf/product/'
  }
}

export const config = install