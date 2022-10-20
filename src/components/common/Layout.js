import Header from './Header';
import Footer from './Footer';
import Filter from "./Filter";

export default function Layout(props) {
  return (
    <>
      <Header></Header>
      <Filter></Filter>
      {props.children}
      <Footer></Footer>
    </>
  );
}