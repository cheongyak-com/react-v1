import Logo from "components/common/Logo";

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
            <li><span>청약예정지</span></li>
            <li><span>청약완료지</span></li>
          </ul>
          <p>2022 cheongyak.com &copy; All Right Reserved.</p>
        </div>
      </div>
    </>
  );
}