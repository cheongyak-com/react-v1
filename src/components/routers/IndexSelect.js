import Logo from "components/common/Logo";
import { Link } from 'react-router-dom';

export default function IndexSelect() {
  return (
    <>
      <div id="index">
        <div className="inner">
          <h1>
            <Logo></Logo>
            <span>청약닷컴</span>
          </h1>
          <ul>
            <li>
              <Link to='/list?state=0'>
                <span>청약예정지</span>
              </Link>
            </li>
            <li>
              <Link to='/list?state=2'>
                <span>청약완료지</span>
              </Link>
            </li>
          </ul>
          <p>2022 cheongyak.com &copy; All Right Reserved.</p>
        </div>
      </div>
    </>
  );
}