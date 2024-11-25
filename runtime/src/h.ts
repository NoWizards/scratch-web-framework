import { filterNulls } from "./utils/arrays"

export const DOM_TYPES = {
    TEXT: 'text',
    ELEMENT: 'element',
    FRAGMENT: 'fragment'
}

export function h(tag, props = {}, children: any[] = []){
    return {
        tag,
        props,
        children: mapTextNodes(filterNulls(children)),
        type: DOM_TYPES.ELEMENT
    }
}

export function hString(str){
    return { type: DOM_TYPES.TEXT, value: str }
}

export function hFragment(vNodes){
    return {
        type: DOM_TYPES.FRAGMENT,
        children: mapTextNodes(filterNulls(vNodes))
    }
}

function mapTextNodes(children){
    return children.map(child => typeof child === 'string' ? hString(child) : child )
}

export function lipsum(n) {
    const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
      enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
      ut aliquip ex ea commodo consequat.`
  
    return hFragment(
      [...Array(n)].fill(h('p', {}, [text]))
    )
  }

  
export function MessageComponent({level, message}){
    return h('div', {class: `message message--${level}`}, [
        h('p',{},[message])
    ])
}

export function TodosList(todos: any[]) {
    return h('ul', {}, todos.map((todo) => h('li', {}, [todo])))
   }

const todos = ["walk the dog", "water the plants"];
console.log(TodosList(todos));

console.log(MessageComponent({level: 'warning', message: 'this is a test warn'}))