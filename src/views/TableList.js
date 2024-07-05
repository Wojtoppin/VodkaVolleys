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
import "../assets/scss/black-dashboard-react/custom/loader.scss";


const Tables = () =>  {
  const [players, setPlayers] = useState([])
  
  useEffect(() => {
    fetch('https://vodka-volleys-api.onrender.com/scrape/Scorers')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setPlayers(data);
      })
      .catch(error => {
        console.log(error);
      });

    }, []);


    useEffect(() => {
      const handleScroll = (event) => {
        event.preventDefault();
  
        const scrollSpeed = 10; // Adjust this value as needed
        const delta = Math.sign(event.deltaY);
  
        window.scrollBy({
          top: delta * scrollSpeed,
          left: 0,
          behavior: 'smooth'
        });
      };
  
      window.addEventListener('wheel', handleScroll, { passive: false });
  
      return () => {
        window.removeEventListener('wheel', handleScroll);
      };
    }, []);
    


  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card className="card-plain">
              <CardHeader>
                <CardTitle tag="h3">Wszyscy zawodnicy</CardTitle>
                <p className="category">Nazwiska zawodników z innych drużyn jest zamazana przez RODO</p>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Imię</th>
                      <th>Nazwisko</th>
                      <th>Drużyna</th>
                      <th className="text-center">ilość goli</th>
                    </tr>
                  </thead>
                  <tbody>
                    {players.length!== 0 ? players.map((player)=>
                      {return <tr>
                        <td>{player.playerName}</td>
                        <td style={{userSelect:player.clubName !== "Vodka Volleys" && "none", filter:player.clubName !== "Vodka Volleys" && "blur(5px)" }}>
                          {player.clubName==="Vodka Volleys"?player.playerSurName: player.playerSurName.split('').map(()=> 'X').join('')}
                          </td>
                        <td>{player.clubName}</td>
                        <td className="text-center">{player.goals}
                          </td>
                      </tr>}):<tr><td className="tdLoader" colSpan={4}><div className="loader"></div></td></tr>
                      }
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

export default Tables;
