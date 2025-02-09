import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';

function Index() {

  return (
    <>
   <div>
   <Card className="bg-dark text-white">
      <Card.Img src={`http://localhost:5173/src/assets/Images/Banner.jfif`} alt="Card image" />
    
      <Card.ImgOverlay>
        <Card.Title></Card.Title>
       <div  className='conteinerBanner'>
       <Card.Text>
                <h2> Hola mi nombre es Liliana, </h2>
                <h2> te invito a conocer mi portfolio ... </h2>
        </Card.Text>
       </div>
       </Card.ImgOverlay>
      
    </Card>
   </div>

      
    </>
  )
}

export default Index