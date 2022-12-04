import {
   Container,
   DivLeft,
   DivRight,
   FooterForm,
   Form,
   RegisterLink,
   Title,
} from "./styles";
import logoSoftgraf from "../../assets/logo-softgraf.svg";
import logo from "../../assets/logo.svg";
import undraw from "../../assets/undraw.svg";
import { CustomInput } from "../../components/Input";
import { FiLock, FiMail, FiSend } from "react-icons/fi";
import { Button } from "../../components/Button";
import { object, string } from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";

interface LoginFormData {
   email: string;
   password: string;
}

const loginSchema = object({
   email: string().required("E-mail obrigatório").email("E-mail inválido"),
   password: string()
      .required("Senha obrigatória")
      .min(6, "No mínimo 6 caracteres"),
}).required();

export function Login() {
   const { signIn } = useAuth();
   const [isShowingPassword, setIsShowingPassword] = useState(false);
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<LoginFormData>({
      resolver: yupResolver(loginSchema),
   });

   function showPassword() {
      setIsShowingPassword(!isShowingPassword);
   }

   function onSubmit(dataForm: LoginFormData) {
      signIn(dataForm);
   }

   return (
      <Container>
         <DivLeft>
            <img
               className="logo"
               src={logoSoftgraf}
               alt="Logo Escola Softgraf"
            />

            <img src={undraw} alt="Imagem com uma mulher e seu notebook" />
         </DivLeft>

         <DivRight>
            <img
               src={logo}
               alt="Logo da rede social @softmedia"
               className="logo"
            />

            <Title>Login</Title>

            <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
               <CustomInput
                  label="E-mail"
                  leftIcon={<FiMail />}
                  {...register("email")}
                  error={errors.email}
               />
               <CustomInput
                  type={isShowingPassword ? "text" : "password"}
                  label="Senha"
                  leftIcon={<FiLock />}
                  {...register("password")}
                  error={errors.password}
                  isPassword={true}
                  showPassword={showPassword}
                  isShowingPassword={isShowingPassword}
               />

               <FooterForm>
                  <RegisterLink to="/register">Criar uma conta</RegisterLink>
                  <Button type="submit" title="Entrar" icon={<FiSend />} />
               </FooterForm>
            </Form>
         </DivRight>
      </Container>
   );
}
