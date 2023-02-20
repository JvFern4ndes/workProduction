import styled from 'styled-components/native';
import { Platform, StatusBar } from 'react-native';

const isAndroid = Platform.OS === 'android';

export const Container = styled.SafeAreaView`
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : '0'};
  flex: 1;
`;

export const StatusContainer = styled.View`
  height: 105px;
  margin-top: -50px;
`;

export const OrdersContainer = styled.View`
  flex: 1;
`;

export const Footer = styled.View`
  min-height: 55px;
  background: #fff;
  padding: 16px 24px;
  border: 1px solid rgba(204, 204, 204, 0.3);
`;

export const FooterContainer = styled.SafeAreaView``;
