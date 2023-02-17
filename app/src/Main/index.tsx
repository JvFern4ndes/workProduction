import {
  Container,
  StatusContainer,
  OrdersContainer,
  Footer,
  FooterContainer
} from './styles';

import { Header } from '../components/Header';
import { Orders } from '../components/Orders';
import { Status } from '../components/Status';

export function Main() {
  return (
    <>
      <Container>
        <Header />

        <StatusContainer>
          <Status />
        </StatusContainer>

        <OrdersContainer>
          <Orders />
        </OrdersContainer>
      </Container>

      <Footer>
        <FooterContainer></FooterContainer>
      </Footer>
    </>
  );
}
