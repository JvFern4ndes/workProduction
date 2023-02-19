import { FlatList, Modal } from 'react-native';
import { Order } from '../../types/Order';
import { Button } from '../Button';
import { Close } from '../Icons/Close';

import { Text } from '../Text';
import {
  Image,
  CloseButton,
  Header,
  ModalBody,
  MeasuresContainer,
  Measures,
  MeasuresInfos,
  Footer,
  FooterContainer,
  QuantityContainer,
} from './styles';

interface OrderModalProps {
  visible: boolean;
  onClose: () => void;
  order: null | Order;
}

export function OrderModal({ visible, onClose, order }: OrderModalProps) {
  if (!order) {
    return null;
  }

  return(
    <Modal
      visible={visible}
      animationType='slide'
      presentationStyle='pageSheet'
      onRequestClose={onClose}
    >
      {order?.details.map((details) => (
        <Image key={details._id}
          source={{
            uri: `http://192.168.15.10:3001/uploads/${details.item.imagePath}`
          }}
        >
          <CloseButton onPress={onClose}>
            <Close />
          </CloseButton>
        </Image>
      ))}

      <ModalBody>
        <Header>
          {order.details.map((details) => (
            <Text size={24} weight='600' key={details._id}>
              {details.item.name}
            </Text>
          ))}
          <Text color='#666' style={{ marginTop: 8 }}>{order.client.name}</Text>
        </Header>

        <Measures>
          <Text weight='600' color='#666'>Medidas</Text>

          {order.details.map((details) => (
            <FlatList key={details._id}
              data={details.item.measures}
              keyExtractor={measures => measures.name}
              showsVerticalScrollIndicator={false}
              style={{ marginTop: 16 }}
              renderItem={({ item: measure }) => (
                <MeasuresInfos>
                  <Text>{measure.name}</Text>
                  <Text size={14} color="#666" style={{ marginLeft: 20 }}>
                    {measure.value}
                  </Text>
                </MeasuresInfos>
              )}
            />
          ))}
        </Measures>
      </ModalBody>

      <Footer>
        <FooterContainer>
          <QuantityContainer>
            <Text color='#666'>Quantidade</Text>
            {order.details.map((details) => (
              <Text size={20} weight="600" key={details._id}>
                {details.amount}
                {details.amount > 1 ? ' Itens' : ' Item'}
              </Text>
            ))}
          </QuantityContainer>

          <Button onPress={() => alert('Iniciar Etapa')}>Iniciar etapa</Button>
        </FooterContainer>
      </Footer>
    </Modal>
  );
}
