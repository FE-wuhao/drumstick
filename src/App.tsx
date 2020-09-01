import React from 'react';

import './App.css';
import './styles/index.scss';
import Button from './components/Button/Button';
import Alert from './components/Alert/Alert';
import Menu from './components/Menu/Menu';
import MenuItem from './components/Menu/MenuItem';

function App() {
  return (
    <div style={{ marginLeft: `20px`, marginRight: '20px' }}>
      <br />
      <br />
      <Button
        btnType='default'
        disabled
        onClick={() => console.log('default')}>
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
      <Button
        btnType='link'
        target='_blank'
        href='https://www.baidu.com/'>
        link按钮
      </Button>
      <br />
      <br />
      <Alert
        title='这里是标题'
        type='success'
        size='lg'
        content='success'
      />
      <br />
      <br />
      <Alert
        title='这里是标题'
        type='default'
        size='lg'
        content='default'
      />
      <br />
      <br />
      <Alert
        title='这里是标题'
        type='danger'
        size='lg'
        content='danger'
        closeable={false}
      />
      <br />
      <br />
      <Alert
        title='这里是标题'
        type='warning'
        size='lg'
        content='warning'
        closeable={false}
      />
      <br />
      <br />
      <Menu direction='vertical'>
        <MenuItem index={1}>11111</MenuItem>
        <MenuItem index={2}>22222</MenuItem>
        <MenuItem index={3}>33333</MenuItem>
        <MenuItem index={4}>44444</MenuItem>
      </Menu>
    </div>
  );
}

export default App;
