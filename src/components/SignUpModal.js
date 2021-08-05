import React, { useState } from 'react';
import styled from 'styled-components';
import SignUp from 'components/SignUp';
import AccountButton from 'components/AccountButton';

function SignUpModal() {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const onMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <>
      <AccountButton content='계정 생성' type='button' onClick={openModal} />
      <ModalOverlay visible={modalVisible} />
      <ModalWrapper onClick={onMaskClick} tabIndex='-1' visible={modalVisible}>
        <ModalInner tabIndex='0' className='modal-inner'>
          <ModalInputWrapper>
            <SignUp />
          </ModalInputWrapper>
        </ModalInner>
      </ModalWrapper>
    </>
  );
}

const ModalWrapper = styled.div`
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;

const ModalOverlay = styled.div`
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

const ModalInner = styled.div`
  position: relative;
  background-color: #fff;
  border-radius: 10px;
  min-width: 600px;
  width: 50%;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
`;
const ModalInputWrapper = styled.div`
  padding: 20px 0;
`;

export default SignUpModal;
