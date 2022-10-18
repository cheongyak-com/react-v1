import Logo from "./Logo";

export default function Header() {
  return (
    <header>
      <div className="inner">
        <h1>
          <Logo></Logo>
          <span>청약닷컴</span>
        </h1>
      </div>
    </header>
  );
}