import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Header(props) {
  const param = props.type;

  return (
    <header>
      <div className='inner'>
        <h1>
          <Link to={param === 'list' ? '/' : '/list'}>
            <Logo></Logo>
            <span>청약닷컴</span>
          </Link>
        </h1>
      </div>
    </header>
  );
}