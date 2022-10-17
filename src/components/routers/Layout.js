import Header from 'components/common/Header';
import Footer from 'components/common/Footer';

export default function Layout(props) {
  return (
    <>
      <Header></Header>
        {props.children}
      <Footer></Footer>
    </>
  );
}