import React from "react";
import './dialog.less';

class Dialog extends React.Component {
    constructor() {
        super();
    }

    close = (e) => {
        console.dir(e.target.getAttribute('_self'))
        //这样可以防止冒泡使得没点击关闭就关闭了弹窗 ->参数传递，加个属性
        //或者把蒙层和关闭按钮进行分离，这样也可以避免冒泡带来的影响
        if (e.target.getAttribute('_self')) {
            this.props.onClose && this.props.onClose(false)
        }

    }
    sure = () => {
        this.props.onSure && this.props.onSure()
    }
    cancel = () => {
        this.props.onCancel && this.props.onCancel()
    }

    render() {
        //children 字符串，数组，对象（虚拟DOM(节点)）
        let {children} = this.props;
        let header = <header>header <button onClick={this.close}>X</button></header>;
        let main = '身体';
        let footer = <footer>
            <button onClick={this.sure}>确定</button>
            <button onClick={this.cancel}>取消</button>
        </footer>;
        if(typeof children=='string'){
            main = children
        }else if(Array.isArray(children)){
            //数组
            let h = [];
            let m = [];
            let f = [];
            children.forEach(item=>{
                //item->节点/文本
                if(typeof item=="string"){
                    m.push(item)
                }else{
                    if(item.props.slot=="header"){
                        h.push(item)
                    }else if(item.props.slot=="footer"){
                        f.push(item)
                    }else{
                        m.push(item)
                    }
                }
            })
            header = h.length?h:header;
            main = m.length?m:main;
            footer=f.length?f:footer;

        }else if(typeof children!=='undefined'){
            //节点
            switch (children){
                case 'header':
                    header = children;
                    break;
                case 'footer':
                    footer = children;
                    break;
                default:
                    main = children;
                    break;
            }
        }
        return <div className='dialog_box' onClick={this.close} _self='true'>
            <div className="box">
                {header}
                <main>{main}</main>
                {footer}
            </div>
            <button>展示弹框</button>

        </div>;
    }
}

export default Dialog;
