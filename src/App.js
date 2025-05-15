import './style/index.css';
import Header from './conponents/Header';
import Gallery from './conponents/Gallery';
import Footer from './conponents/Footer';
import Banner from './conponents/Banner';


function App() {
  const photos = [
    {"id": "01", "img": "https://raw.githubusercontent.com/Zxy-0830/photos/refs/heads/main/photos/img-01.jpg"},
    {"id": "02", "img": "https://raw.githubusercontent.com/Zxy-0830/photos/refs/heads/main/photos/img-02.jpg"},
    {"id": "03", "img": "https://raw.githubusercontent.com/Zxy-0830/photos/refs/heads/main/photos/img-03.jpg"},
    {"id": "04", "img": "https://raw.githubusercontent.com/Zxy-0830/photos/refs/heads/main/photos/img-04.jpg"}
  ]
  const title = 'Joker Xue: From Setbacks to Stardom';
  const content = 'Joker Xue is a Chinese singer-songwriter who turned early setbacks into major success. After debuting in 2005, he was once sidelined by his label and faded from the spotlight. Refusing to give up, he focused on songwriting and made a strong comeback with hits like Actor, What Else Do You Want Me To Do, and The Crossing. Now recognized as one of Mainland China’s top male artists, Xue is known for his emotional lyrics and captivating performances. is third concert tour, Extraterrestrial Objects, broke attendance records across China, confirming his status as a true pop icon.';
  return (
    <main>
      <>
      <Header/>
      <Banner title={title} content={content}/>
      <Gallery photos={photos}/>
      <Footer/>

      </>
    </main>
  );
}

export default App;
