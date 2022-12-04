import { useState } from "react";
import { FiImage, FiSend } from "react-icons/fi";
import { toast } from "react-toastify";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import { CustomAvatar } from "../Avatar";
import { Container } from "./styles";

interface NewPostInputProps {
   reloadPosts: () => void;
}
export function NewPostInput({ reloadPosts }: NewPostInputProps) {
   const [newPublication, setNewPublication] = useState("");
   const { user } = useAuth();
   const placeholder = `No que está pensando @${user.username}?`;

   async function handleSubmit() {
      if (!newPublication) {
         toast.warn("Informa uma mensagem");
         return;
      }

      try {
         const { data } = await api.post("/publications", {
            description: newPublication,
         });

         if (data.publication.id) {
            toast.success("Publicação criada com sucesso");
            reloadPosts();
         }
      } catch (error: any) {
         toast.error(error.response.data.message);
      }

      setNewPublication("");
   }

   async function handleSubmitFile(file: any) {
      const formData = new FormData();
      formData.append("file", file);

      const config = {
         headers: {
            "content-type": "multipart/form-data",
         },
      };

      try {
         const { data } = await api.post("/publications", formData, config);
         if (data.id) {
            toast.success("Publication criada com sucesso");
            reloadPosts();
         }
      } catch (error: any) {
         toast.error(error.response.data.message);
      }
   }

   return (
      <Container>
         <CustomAvatar
            avatar={user.avatar}
            name={user.name}
            username={user.username}
         />

         <input
            placeholder={placeholder}
            onChange={(event) => setNewPublication(event.target.value)}
            value={newPublication}
         />

         <label htmlFor="file-input" className="button add-image">
            <FiImage />
         </label>

         <input
            onChange={(event) => handleSubmitFile(event.target.files![0])}
            type="file"
            id="file-input"
         />

         <div onClick={handleSubmit} className="button create-post">
            <FiSend />
         </div>
      </Container>
   );
}
