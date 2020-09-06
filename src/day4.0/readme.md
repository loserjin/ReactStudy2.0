redux是一个数据管理模型，跟react没有直接关系
    引入createStore方法，用其产生一个store：产生时需要用到reducer函数作为参数
    reducer函数用来提供初始的state和修改state的途径
react-redux:是把react和redux连接起来
    是把react和redux连接起来
    提供了一个Provider组件(根组件)和一个connect高阶函数
    那个组件想用redux中的组件，就使用connect处理
redux-thunk 就是让dispatch（默认只处理action）能够接收一个函数了
    
