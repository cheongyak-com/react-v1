export default function Article(props) {
  return (
    <article>
      <div className="pic">
        {props.imgSrc}
      </div>
      <div className="txt">
        <h3>
          {props.title}
        </h3>
        <p>
          {props.children}
        </p>
      </div>
    </article>
  );
}