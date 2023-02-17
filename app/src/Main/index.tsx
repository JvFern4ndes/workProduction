import {
  Container,
  StatusContainer,
  OrdersContainer,
  Footer,
  FooterContainer,
} from './styles';

import { Header } from '../components/Header';
import { Orders } from '../components/Orders';
import { Status } from '../components/Status';
import { Button } from '../components/Button';

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
        <FooterContainer>
          <Button onPress={() => alert('Novo pedido')} disabled>
            Iniciar Produção
          </Button>
        </FooterContainer>
      </Footer>
    </>
  );
}
