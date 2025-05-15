import Button from './Button';

function Banner({title, content}) {
  return (
    <div>
        <h2>{title}</h2>
        <p>{content}</p>
        <Button click={true}/>
        <Button click={false}/>
    </div>
  )
}

export default Banner;
