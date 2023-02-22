import styled from 'styled-components/native';

export const Overlay = styled.KeyboardAvoidingView`
  background: rgba(0, 0, 0, 0.6);
  flex: 1;
  align-items: stretch;
  justify-content: center;
  padding: 24px;
`;

export const ModalBody = styled.View`
  background: #FAFAFA;
  border-radius: 8px;
  padding: 24px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Form = styled.View`
  margin-top: 32px;
`;

export const MachineInput = styled.View`
  margin: 0 0 16px 0;
`;

export const OperationInput = styled.View`
  margin: 0 0 32px 0;
`;
