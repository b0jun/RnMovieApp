import {StackNavigationProp} from '@react-navigation/stack';
import React, {useContext} from 'react';
import {Linking} from 'react-native';
import styled from 'styled-components/native';
import Button from '~/Components/Button';
import Input from '~/Components/Input';
import {UserContext} from '~/Context/User';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #141414;
  align-items: center;
  justify-content: center;
`;

const FormContainer = styled.View`
  width: 100%;
  padding: 40px;
`;

const PasswordReset = styled.Text`
  width: 100%;
  font-size: 12px;
  color: #ffffff;
  text-align: center;
`;

type NavigationProp = StackNavigationProp<LoginNaviParamList, 'Login'>;

interface Props {
  navigation: NavigationProp;
}

const Login = ({}: Props) => {
  const {login} = useContext<IUserContext>(UserContext);

  return (
    <Container>
      <FormContainer>
        <Input placeholder="이메일" />
        <Input placeholder="비밀번호" secureTextEntry={true} />
        <Button
          label="로그인"
          onPress={() => {
            login('dev.yakuza@gmail.com', 'password');
          }}
        />
        <PasswordReset
          onPress={() => {
            Linking.openURL('https://www.youtube.com/watch?v=pjqXFo73BzA');
          }}>
          비밀번호 재설정
        </PasswordReset>
      </FormContainer>
    </Container>
  );
};

export default Login;
