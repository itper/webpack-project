import Hello from './component/hello.jsx';
import World from './component/world.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
ReactDOM.render(<Hello/>,document.getElementById('hello'));
ReactDOM.render(<World/>,document.getElementById('world'));


(function(){

var img = document.createElement('img');
img.src = require('./p1.png');
document.body.appendChild(img);

img = document.createElement('img');
img.src = require('./apple.png');
document.body.appendChild(img);

})();

(function(){
    var app = require('./app.css');
    ReactDOM.render(
        <div>
            <h1 className={app.h1}>123</h1>
            <h2 className="h2">123</h2>
            e
        </div>
    ,document.getElementById('css'))
})();

(function(){
    require.ensure(['./a'],function(require){
        var content = require('./a');
        alert(content.world);
    })
})();