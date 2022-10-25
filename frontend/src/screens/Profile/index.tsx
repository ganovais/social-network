import { FiUserPlus } from "react-icons/fi";
import { useParams } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Posts } from "../../components/Posts";
import { Sidebar } from "../../components/Sidebar";
import { BodyContent, Container, Content, HeaderProfile } from "./styles";

export function Profile() {
   const { username } = useParams();
   console.log(username);

   return (
      <Container>
         <Header />

         <Content>
            <Sidebar />

            <BodyContent>
               <HeaderProfile>
                  <div>
                     <h1 className="name">Gabriel Novais</h1>
                     <b className="username">@ganovais</b>
                  </div>

                  <Button title="Adicionar amigo" icon={<FiUserPlus />} />
               </HeaderProfile>

               <Tabs style={{ marginTop: "30px" }}>
                  <TabList>
                     <Tab>Informações</Tab>
                     <Tab>Publicações</Tab>
                  </TabList>

                  <TabPanel style={{paddingTop: 10}}>
                     <h4 className="title-description">Descrição</h4>
                     <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Similique at asperiores itaque dicta! Molestiae commodi
                        id nostrum ipsa amet, aspernatur iusto, quidem illum
                        tempore recusandae atque porro. Ipsam, tenetur voluptas.
                     </p>
                  </TabPanel>
                  <TabPanel style={{paddingTop: 10}}>
                     <Posts posts={[]} />
                  </TabPanel>
               </Tabs>
            </BodyContent>
         </Content>
      </Container>
   );
}
