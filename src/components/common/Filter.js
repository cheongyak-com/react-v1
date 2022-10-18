import { Link } from 'react-router-dom';

export default function Filter() {
  return (
    <>
      <i className="btnFilter"></i>
      <div id="filter">
        <div className="inner">
          <ul>
            <li>
              <span>분양상태</span>
              <ul>
                <li><Link to='#' className='on'>분양예정</Link></li>
                <li><Link to='#'>분양중</Link></li>
                <li><Link to='#'>분양완료</Link></li>
              </ul>
            </li>
            <li>
              <span>지역</span>
              <ul>
                <li><Link to='#'>검단신도시</Link></li>
                <li><Link to='#' className='on'>운정신도시</Link></li>
                <li><Link to='#'>기타</Link></li>
              </ul>
            </li>
            <li>
              <span>분양방식</span>
              <ul>
                <li><Link to='#' className='on'>공공분양</Link></li>
                <li><Link to='#'>민간참여 공공분양</Link></li>
                <li><Link to='#'>민간분양</Link></li>
                <li><Link to='#'>임대</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}