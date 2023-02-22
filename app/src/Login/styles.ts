import styled from 'styled-components/native';
import { Platform, StatusBar } from 'react-native';

const isAndroid = Platform.OS === 'android';

export const LoginHeader = styled.View`
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : '0'};
  align-items: center;
  background: #000;
`;

export const Container = styled.KeyboardAvoidingView`
  background: #000;
  flex: 1;
  align-items: stretch;
  justify-content: center;
  padding: 0 24px;
`;

export const FormContainer = styled.View`
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 134px;
`;

export const FormText = styled.View`
  align-items: center;
`;

export const Form = styled.View`
  margin-top: 32px;
`;

export const Input = styled.TextInput`
  color: #fff;
  border: 1px solid rgba(204, 204, 204, 0.5);
  border-radius: 8px;
  padding: 16px;
`;
