import { Link } from 'react-router-dom';

export default function ContentTable(props) {
  const data = props.data;

  return (
    <table id='contentTable'>
      <tbody>
        {data.state === '0' ? 
        <>
        <tr>
          <th>모집공고</th>
          <td>{data.dateGonggo.substring(0,7)} 예정</td>
        </tr>
        </> : <>
        <tr>
          <th>모집공고</th>
          <td>{data.dateGonggo}</td>
        </tr>
        <tr>
          <th>특별 공급 접수</th>
          <td>{data.dateSpecial}</td>
        </tr>
        <tr>
          <th>1순위 접수</th>
          <td>{data.dateNormal1}</td>
        </tr>
        <tr>
          <th>2순위 접수</th>
          <td>{data.dateNormal2}</td>
        </tr>
        <tr>
          <th>당첨자 발표</th>
          <td>{data.dateAnnouncement}</td>
        </tr>
        <tr>
          <th>계약 기간</th>
          <td>{data.dateContract}</td>
        </tr>
        <tr>
          <th>입주 예정</th>
          <td>{data.dateMoveIn}</td>
        </tr>
        </>}
        <tr>
          <th>공식 사이트</th>
          <td>
            <Link className='linkTargetBlank' 
            onClick={(e)=>{
              e.preventDefault();
              window.open(data.webSiteUrl);
            }}
            target='_blank'>
              {data.webSiteUrl}
              <i className='fa-solid fa-arrow-up-right-from-square'></i>
            </Link>
          </td>
        </tr>
      </tbody>
    </table>
  );
}