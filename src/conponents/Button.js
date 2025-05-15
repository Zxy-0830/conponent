

function Button(props) {
  return (
    <button className={props.click ? 'primary': 'secondary'}>
      {props.click ? 'Primary': 'Secondary'}
    </button>
  );
}

export default Button;