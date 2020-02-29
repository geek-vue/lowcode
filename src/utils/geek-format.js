import { isString, isArray, isObject } from '@/utils/types'

export default vm => {
  if (isString(vm)) return { type: 'geek-html', text: vm }
  // else if 
}