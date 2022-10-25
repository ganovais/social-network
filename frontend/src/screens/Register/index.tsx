import {
  Container,
  DivLeft,
  DivRight,
  FooterForm,
  Form,
  RegisterLink,
  Title,
} from './styles';
import logoSoftgraf from '../../assets/logo-softgraf.svg';
import logo from '../../assets/logo.svg';
import undraw from '../../assets/undraw.svg';
import { CustomInput } from '../../components/Input';
import {
  FiArrowLeft,
  FiLock,
  FiMail,
  FiSave,
  FiSend,
  FiUser,
} from 'react-icons/fi';
import { Button } from '../../components/Button';
import { object, string } from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';

interface RegisterFormData {
  name: string;
  email: string;
  password: string;
}

const loginSchema = object({
  name: string().required('Nome é obrigatório'),
  email: string().required('E-mail obrigatório').email('E-mail inválido'),
  password: string()
    .required('Senha obrigatória')
    .min(6, 'No mínimo 6 caracteres'),
}).required();

export function Register() {
  const [isShowingPassword, setIsShowingPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(loginSchema),
  });

  function showPassword() {
    setIsShowingPassword(!isShowingPassword);
  }

  function onSubmit(dataForm: RegisterFormData) {
    console.log(dataForm);
  }

  return (
    <Container>
      <DivLeft>
        <img className="logo" src={logoSoftgraf} alt="Logo Escola Softgraf" />

        <img src={undraw} alt="Imagem com uma mulher e seu notebook" />
      </DivLeft>

      <DivRight>
        <img src={logo} alt="Logo da rede social @softmedia" className="logo" />

        <Title>Cadastrar</Title>

        <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <CustomInput
            label="Name"
            leftIcon={<FiUser />}
            {...register('name')}
            error={errors.name}
          />

          <CustomInput
            label="E-mail"
            leftIcon={<FiMail />}
            {...register('email')}
            error={errors.email}
          />
          <CustomInput
            type={isShowingPassword ? 'text' : 'password'}
            label="Senha"
            leftIcon={<FiLock />}
            {...register('password')}
            error={errors.password}
            isPassword={true}
            showPassword={showPassword}
            isShowingPassword={isShowingPassword}
          />

          <FooterForm>
            <RegisterLink to="/">
              <FiArrowLeft />
              voltar
            </RegisterLink>
            <Button type="submit" title="Cadastrar" icon={<FiSave />} />
          </FooterForm>
        </Form>
      </DivRight>
    </Container>
  );
}
