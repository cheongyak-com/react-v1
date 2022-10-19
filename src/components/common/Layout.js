import Header from './Header';
import Footer from './Footer';
// import ListVisual from "components/common/ListVisual"; 추후사용
import Filter from "./Filter";

export default function Layout(props) {
  return (
    <>
      <Header></Header>
      <Filter></Filter>
      {/* <ListVisual></ListVisual> 추후사용 */}
      {props.children}
      <Footer></Footer>
    </>
  );
}