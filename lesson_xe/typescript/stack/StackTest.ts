import Stack from './lib/stack'
const stack = new Stack()

stack.push('第一条数据')
stack.push('第二条数据')
stack.push('第三条数据')

stack.pop()
console.log(stack.peek())
console.log(stack.size())
console.log(stack.toString())
console.log(stack.isEmpty())
stack.clear()
console.log(stack.isEmpty())