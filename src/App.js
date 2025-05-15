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
  const title = 'title';
  const content = 'contant';
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
