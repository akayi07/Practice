import Vue from 'vue'
console.log(Vue);


document.getElementById('aBtn').onclick = function() {
    //异步加载a.js
    require.ensure(['./b.js'], function(){
        var A = require('./a.js');
        alert(A.data);
    })
};

document.getElementById('bBtn').onclick = function() {
    //异步加载b.js
    require.ensure([], function(){
        var B = require('./b.js');
        alert(B.data);
    })
};
