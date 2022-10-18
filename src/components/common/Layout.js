import Header from './Header';
import Footer from './Footer';
import ListVisual from "components/common/ListVisual";
import Filter from "./Filter";

export default function Layout(props) {
  return (
    <>
      <Header></Header>
      <Filter></Filter>
      <ListVisual name="gundam" title="검단신도시">
        검단신도시 소개글 주르륵소개하빈다. 검단신도시가 여러분을 사랑합니다.
        대단히 반갑습니다.
      </ListVisual>
        {props.children}
      <Footer></Footer>
    </>
  );
}