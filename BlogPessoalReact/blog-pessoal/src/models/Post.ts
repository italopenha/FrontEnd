import UserLogin from './UserLogin';
import Theme from './Theme';

interface Post {
    id: number;
    titulo?: string| null;
    descricao?: string| null;
    foto?: string| null;
    criador?: UserLogin| null;
    tema?: Theme| null;
}

export default Post;