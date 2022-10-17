import Layout from "./Layout";
import ListVisual from "components/common/ListVisual";
import Article from "components/common/Article";

export default function Schedule() {
  return (
    <Layout>
      <ListVisual name="gundam" title="검단신도시">
        검단신도시 소개글 주르륵소개하빈다. 검단신도시가 여러분을 사랑합니다.
        대단히 반갑습니다.
      </ListVisual>
      <Article></Article>
    </Layout>
  );
}