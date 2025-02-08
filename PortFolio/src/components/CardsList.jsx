import React from 'react'
import Card from '../components/Cards'
import '../styles/CardsList.css'

const CardList = () => {
  return (
     <div className='cardList2'>
         
          <div className='cardList'>
            <Card name="CSS" logo="css.png" />
            <Card name="HTML" logo="html5.png" />
            <Card name="Bootstrap"  logo="bootstrap.png" />
            <Card name="Java" logo="java.png" />
            <Card name="Javascript" logo="javascript.png" />
            <Card name="Angular"  logo="angular.png" />              
        </div>
        <div>
          <div className='cardList'>
          <Card name="Python" logo="python.png" />
            <Card name="React" logo="react.png" />
            <Card name="NodeJs"  logo="nodejs.png" />
            <Card name="Postman"  logo="posman.jpg" />
            <Card name="Git"  logo="git.png" />
            <Card name="GitHub"  logo="gitHub.png" />
            
        </div>
        
        </div>
        <div>
          <div className='cardList'>
          <Card name=".Net"  logo=".net.png" />
            <Card name="Genexus"  logo="genexus.jpg" />
            <Card name="MongoDB"  logo="mongo.png" />
            <Card name="Postgres" logo="postgred.png" />
            <Card name="MySQL"  logo="mysql.png" />
            <Card name="SQL" logo="sql.png" />
        </div>
        
        </div>
     </div>
  )
}

export default CardList