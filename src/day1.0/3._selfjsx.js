class Element {
    constructor(type, props, children) {
        this.type = type;
        this.props = props || {};
        this.children = children;
    }

    fn(str) {
        return str.replace(/[A-Z]/g, function (a) {
            return '-' + a.toLowerCase()
        })
    }

    render() {
        //this.type:i p h1,....
        let ele = document.createElement(this.type);
        Object.keys(this.props).forEach(key => {
            //把props中的所有行内属性，逐个添加上
            //ele.setAttribute(key,this.props[key])
            switch (key) {
                case 'className':
                    ele.setAttribute('class', this.props[key])
                    break;
                case 'style':
                    let str = '';
                    Object.keys(this.props[key]).forEach(item => {
                        //itme color fontSize->font-size
                        str += `${this.fn(item)}:${this.props[key][item]};`
                    })
                    ele.setAttribute('style', str);
                    break;
                case 'htmlFor':
                    ele.setAttribute('for', this.props[key])
                    break;
                default:
                    break;
            }
        })
        this.children.forEach(item => {
            //item都是儿子，可能是字符串
            //item若是Element这个类的实例（对象），但是我们要的是真实DOM
            //实例可以通过render方法执行产生真实DOM
            //若是字符串，需要转成文本节点
            item instanceof Element ? ele.appendChild(item.render()) : ele.appendChild(document.createTextNode(item));
        })
        return ele;
    }
}

let React = {
    createElement(type, props, ...children) {
        return new Element(type, props, children)
    }
}
let ReactDom = {
    render(ele, container) {
        console.log(container);
        //ele是Element的一个实例：插入的需要是真实DOM
        container.appendChild(ele.render())
    }
}
let ele = React.createElement('div', {id: 'box'}, "xxx",
    React.createElement('i', null, 'hehe'),
    React.createElement('p', null, 'hje', React.createElement('b', null, 'ssed')))
ReactDom.render(ele, document.querySelector('#root'));