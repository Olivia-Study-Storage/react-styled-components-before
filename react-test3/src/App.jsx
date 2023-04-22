import React from 'react';
import Button from './components/Button';
import Input from './components/Input';
import Modal from './components/Modal';
import Select from './components/Select';

function App() {
  return (
    <>
      <Button />
      <Input color={'#55efc4'}/>
      <Modal color={'#55efc4'}/>
      <Select />
    </>
  )
}

export default App