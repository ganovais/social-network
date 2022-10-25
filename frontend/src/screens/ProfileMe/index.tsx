import { FiArrowLeft, FiLock, FiMail, FiSave, FiUser } from "react-icons/fi";
import { useParams } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { CustomInput } from "../../components/Input";
import { Posts } from "../../components/Posts";
import { Sidebar } from "../../components/Sidebar";
import {
   BodyContent,
   Container,
   Content,
   Form,
   FooterForm,
   RegisterLink,
} from "./styles";

export function ProfileMe() {
   const { username } = useParams();

   return (
      <Container>
         <Header />

         <Content>
            <Sidebar />

            <BodyContent>
               <h1 className="name">Gabriel Novais</h1>
               <b className="username">@ganovais</b>

               <Tabs style={{ marginTop: "30px" }}>
                  <TabList>
                     <Tab>Informações</Tab>
                     <Tab>Publicações</Tab>
                  </TabList>

                  <TabPanel style={{ paddingTop: 10 }}>
                     <Form autoComplete="off">
                        <div className="inputs">
                           <div className="textarea">
                              <label>Sobre</label>
                              <textarea placeholder="Sobre mim"></textarea>
                           </div>

                           <div className="df">
                              <div className="row mr-30">
                                 <CustomInput label="Nome" leftIcon={<FiUser />} disabled/>
                                 <CustomInput label="E-mail" leftIcon={<FiMail />} disabled/>
                              </div>
                              <div className="row">
                                 <CustomInput label="Nova Senha" leftIcon={<FiLock />} isPassword/>
                                 <CustomInput label="Confirmar Senha" leftIcon={<FiLock />} isPassword/>
                              </div>
                           </div>
                        </div>

                        <FooterForm>
                           <RegisterLink to="/home">
                              <FiArrowLeft />
                              voltar
                           </RegisterLink>
                           <Button type="submit" title="Editar" icon={<FiSave />} />
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
