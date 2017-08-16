/**
 * Created by frehaiku on 2017/6/22.
 */
import {fetchAPI} from '../libs/fetch'
export default function ({vm, ...data}, callback) {
  const req = {
    ...data
  }
  fetchAPI(vm, vm.$config.interfaceV1 + 'modifyOrder',
    'POST',
    JSON.stringify(req)
  ).then(response => callback(response))
}