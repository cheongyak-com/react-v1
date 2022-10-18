export default function ListVisual(props) {
  return (
    <figure className={props.name}>
      <div className="inner">
        <h1>{props.title}</h1>
        <p>{props.children}</p>
      </div>
    </figure>
  );
}