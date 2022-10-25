import { FiImage, FiSend } from 'react-icons/fi';
import { CustomAvatar } from '../Avatar';
import { Container } from './styles';

export function NewPostInput() {
  const username = 'ganovais';
  const placeholder = `No que está pensando @${username}?`;

  return (
    <Container>
      <CustomAvatar
        avatar="https://github.com/ganovais.png"
        name="Gabriel"
        username="ganovais"
      />

      <input placeholder={placeholder} />

      <label htmlFor="file-input" className="button add-image">
        <FiImage />
      </label>

      <input type="file" id="file-input" />

      <div className='button create-post'>
        <FiSend />
      </div>
    </Container>
  );
}
