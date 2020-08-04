import React from 'react';

import './App.css';
import './styles/index.scss';
import Button from './components/Button/Button';
import Alert from './components/Alert/Alert';

function App() {
  return (
    <div style={{ marginLeft: `10px` }}>
      <br />
      <br />
      <Button btnType='default' disabled onClick={() => console.log('default')}>
        默认样式 disabled
      </Button>
      <br />
      <br />
      <Button
        btnType='primary'
        size='lg'
        onClick={() => console.log('primary')}>
        primary lg
      </Button>
      <br />
      <br />
      <Button btnType='danger' size='sm'>
        danger sm
      </Button>
      <br />
      <br />
      <Button btnType='link' target='_blank' href='https://www.baidu.com/'>
        link按钮
      </Button>
      <br />
      <br />
      <Alert
        title='这里是标题'
        type='success'
        size='lg'
        content='here comes him'
      />
    </div>
  );
}

export default App;
