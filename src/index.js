import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
  document.getElementById('root')
);
 //위의 형태가 component를 사용하고자 할때 component상태이다. 
 // 위와같은 JS와 HTML의 조합을 JSX라고 부른다. 
 // JSX는 인접요소 X 위 component에서는 App이기 때문에 newComponent를 App에 import해야함.
 // 현재는 2개의 컴포넌트도 rendering이 된다.
