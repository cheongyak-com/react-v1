import Header from './Header';
import Footer from './Footer';
import Filter from './Filter';

export default function Layout(props) {
  return (
    <>
      <Header type={props.type}></Header>
      <Filter type={props.type}></Filter>
      {props.children}
      <Footer></Footer>
    </>
  );
}