/*!

=========================================================
* Black Dashboard React v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, {useState, useEffect} from "react";
import Adam from "assets/img/adam.jpg";
import Antek from "assets/img/antek.jpg";
import Wiktor from "assets/img/witek.jpg";
import Bartek from "assets/img/gonera.jpg";
import Hubert from "assets/img/hubert.jpg";
import Marek from "assets/img/maro.jpg";
import Jakub from "assets/img/pawlak.jpg";
import VVLogo from "assets/img/VVlogo.png";
import ProgressCircle from './ProgressCircle';

import "../assets/css/Players.css";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";


const Players = () =>  {
  const [players, setPlayers] = useState([])
  const [mostGoals, setMostGoals] = useState(0)
  const [currentlyClickedProfile, setCurrentlyClickedProfile] = useState(0);
  
  useEffect(() => {
    fetch('http://localhost:3001/scrape/Scorers/VV')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setMostGoals(data[0].goals)
        console.log(data[0].goals)
        const sortedPlayers = data.sort((playerA, playerB) => {
          return playerA.playerSurName.toLowerCase() 
                 .localeCompare(playerB.playerSurName.toLowerCase());
        });
        
        
        setPlayers(sortedPlayers);
      })
      .catch(error => {
        console.log(error);
      });

    }, []);

    const handleRowClick = (value) =>{
        if (currentlyClickedProfile !== value){
            setCurrentlyClickedProfile(value);
        }else{
            setCurrentlyClickedProfile(0);
        }
        
    }

    
    
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h3">Zawodnicy Vodka Volleys</CardTitle>
                <p className="category" style={{fontSize:"80%"}}>DOWIEDZ SIĘ WIĘCEJ O ZAWODNIKU KLIKAJĄC W NIEGO</p>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                  {currentlyClickedProfile===0 && <tr>
                      <th>Imię</th>
                      <th>Nazwisko</th>
                      <th className="text-center">ilość goli</th>
                    </tr>}
                  </thead>
                  <tbody>
                  {players.length !== 0 && players.map((player, index)=>
                      {return currentlyClickedProfile===0?<tr onClick={() => handleRowClick(index+1)}>
                        <td>{player.playerName}</td>
                        <td>{player.playerSurName}</td>
                        <td className="text-center">{player.goals}</td>
                      </tr>:currentlyClickedProfile===index+1 &&
                        
                        <tr style={{height:"60vh"}} onClick={() => handleRowClick(index+1) }>
                          <div id="imageDiv"><img src={Wiktor}/></div>
                          <div id="NameSurnameDiv">
                            <h2>{player.playerName + " " + player.playerSurName}</h2>
                            <h5>{"Strzelone bramki: " + player.goals}</h5>
                          </div>
                          <ProgressCircle progress={Math.round((player.goals/mostGoals)*100)} />
                          <div id="socialMediaDiv">
                            <h4>Social media</h4>
                            <h5>Instagram: </h5>
                          </div>
                        </tr>
                    }
                      )}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Players;
                    