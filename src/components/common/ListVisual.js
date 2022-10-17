export default function ListVisual(props) {
  return (
    <figure className={props.name}>
      <h1>{props.title}</h1>
      <p>{props.children}</p>
    </figure>
  );
}