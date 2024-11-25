import { DOM_TYPES } from "./h";

export function mountDOM(vdom, parentEl){
    switch(vdom.type){
        case DOM_TYPES.TEXT:{
            createTextNode(vdom, parentEl);
            break;
        }
        case DOM_TYPES.ELEMENT:{
            createElementNode(vdom, parentEl);
            break;
        }
        case DOM_TYPES.FRAGMENT:{
            createFragmentNodes(vdom, parentEl);
            break;
        }
        default:{
            throw new Error(`Can't mount DOM of type ${vdom.type}`)
        }
    }
}

function createTextNode(vdom, parentEl) {
    const { value } = vdom
    const textNode = document.createTextNode(value)
    vdom.el = textNode
    parentEl.append(textNode)
   }
function createElementNode(vdom: any, parentEl: any) {
    throw new Error("Function not implemented.");
}

function createFragmentNodes(vdom: any, parentEl: any) {
    throw new Error("Function not implemented.");
}
