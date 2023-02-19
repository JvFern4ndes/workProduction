import styled from 'styled-components/native';

export const OrderContainer = styled.TouchableOpacity`
flex-direction: row;
align-items: center;
`;

export const OrderImage = styled.Image`
  width: 120px;
  height: 96px;
  border-radius: 8px;
`;

export const OrderDetails = styled.View`
  margin-left: 16px;
  flex: 1;
`;

export const Separator = styled.View`
  width: 100%;
  height: 1px;
  background: rgba(204, 204, 204, 0.3);
  margin: 24px 0;
`;

export const OrderInfos = styled.View``;

export const StartProductionButton = styled.TouchableOpacity`
  position: absolute;
  right: 0;
`;
