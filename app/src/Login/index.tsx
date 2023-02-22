import { SvgUri } from 'react-native-svg';
import { Platform } from 'react-native';

import { Button } from '../components/Button';
import { Text } from '../components/Text';

import {
  Container,
  FormContainer,
  LoginHeader,
  FormText,
  Form,
  Input,
} from './styles';

export function Login() {
  return (
    <>
      <LoginHeader>
        <SvgUri
          width="250px"
          height="250px"
          uri="https://delian.s3.sa-east-1.amazonaws.com/logo.svg"
        />
      </LoginHeader>

      <Container behavior={Platform.OS === 'android' ? 'height' : 'padding'}>
        <FormContainer>
          <FormText>
            <Text size={18} weight='600' color='#6d797e'>
            Faça o login:
            </Text>
          </FormText>

          <Form>
            <>
              <Input
                placeholder='Usuário'
                placeholderTextColor='#6d797e'
                style={{ marginTop: 40 }}
              />
              <Input
                placeholder='Senha'
                placeholderTextColor='#6d797e'
                style={{ marginTop: 16, marginBottom: 56 }}
              />
            </>

            <Button onPress={() => alert('logou')}>
              Entrar
            </Button>
          </Form>
        </FormContainer>
      </Container>
    </>
  );
}
