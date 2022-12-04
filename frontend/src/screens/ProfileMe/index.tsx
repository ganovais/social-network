import { useState } from "react";
import { FiArrowLeft, FiLock, FiMail, FiSave, FiUser } from "react-icons/fi";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { toast } from "react-toastify";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { CustomInput } from "../../components/Input";
import { Posts } from "../../components/Posts";
import { Sidebar } from "../../components/Sidebar";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import {
   BodyContent,
   Container,
   Content,
   Form,
   FooterForm,
   RegisterLink,
} from "./styles";

export function ProfileMe() {
   const { user } = useAuth();
   const [description, setDescription] = useState(user.description);
   const [password, setPassword] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");

   async function handleSubmit(e: any) {
      e.preventDefault();
      if (password && password.length < 6) {
         toast.warn("Senha deve ter pelo menos 6 caracteres");
         return;
      }

      if (password !== confirmPassword) {
         toast.warn("As senha são diferentes");
         return;
      }
      const data = {
         description,
         password,
      };

      const response = await api.put("/users", data);
      console.log(response);
   }

   return (
      <Container>
         <Header />

         <Content>
            <Sidebar />

            <BodyContent>
               <h1 className="name">{user.name}</h1>
               <b className="username">@{user.username}</b>

               <Tabs style={{ marginTop: "30px" }}>
                  <TabList>
                     <Tab>Informações</Tab>
                     <Tab>Publicações</Tab>
                  </TabList>

                  <TabPanel style={{ paddingTop: 10 }}>
                     <Form autoComplete="off" onSubmit={handleSubmit}>
                        <div className="inputs">
                           <div className="textarea">
                              <label>Sobre</label>
                              <textarea
                                 defaultValue={user.description}
                                 placeholder="Sobre mim"
                                 onChange={(event) =>
                                    setDescription(event.target.value)
                                 }
                              ></textarea>
                           </div>

                           <div className="df">
                              <div className="row mr-30">
                                 <CustomInput
                                    defaultValue={user.name}
                                    label="Nome"
                                    leftIcon={<FiUser />}
                                    disabled
                                 />
                                 <CustomInput
                                    defaultValue={user.email}
                                    label="E-mail"
                                    leftIcon={<FiMail />}
                                    disabled
                                 />
                              </div>
                              <div className="row">
                                 <CustomInput
                                    type="password"
                                    label="Nova Senha"
                                    leftIcon={<FiLock />}
                                    isPassword
                                    onChange={(event) =>
                                       setPassword(event.target.value)
                                    }
                                 />
                                 <CustomInput
                                    type="password"
                                    label="Confirmar Senha"
                                    leftIcon={<FiLock />}
                                    isPassword
                                    onChange={(event) =>
                                       setConfirmPassword(event.target.value)
                                    }
                                 />
                              </div>
                           </div>
                        </div>

                        <FooterForm>
                           <RegisterLink to="/home">
                              <FiArrowLeft />
                              voltar
                           </RegisterLink>
                           <Button
                              type="submit"
                              title="Editar"
                              icon={<FiSave />}
                           />
                        </FooterForm>
                     </Form>
                  </TabPanel>
                  <TabPanel style={{ paddingTop: 10 }}>
                     <Posts posts={[]} />
                  </TabPanel>
               </Tabs>
            </BodyContent>
         </Content>
      </Container>
   );
}
