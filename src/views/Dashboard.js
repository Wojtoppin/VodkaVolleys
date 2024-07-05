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
import React, { useState, useEffect } from 'react';
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

// core components
import {
  chartExample1,
  chartExample3,
} from "variables/charts.js";
import { element } from 'prop-types';

function Dashboard(props) {
  const [bigChartData, setbigChartData] = React.useState("Wszystkie");

  const setBgChartData = (name) => {
    setbigChartData(name);
  };


  //chart 1
  const [enemyTeams, setEnemyTeams] = useState([]);
  const [VVGoals, setVVGoals] = useState([]);
  const [enemyGoals, setEnemyGoals] = useState([]);
  const [balance, setBalance] = useState([]);

  //chart 2
  const [teams, setTeams] = useState([])
  const [playerGoals, setPlayerGoals] = useState([])
  const [playerName, setPlayerName] = useState([])
  const [topPlayerName, setTopPlayerName] = useState([])

  useEffect(() => {
    fetch('https://vodka-volleys-api.onrender.com/scrape/Matches')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data)
        const newData = data.map((element)=>{
          if (element.team1 !== "VODKA VOLLEYS"){
            element.team2 = element.team1;
            element.team1 = "VODKA VOLLEYS";
            const tempVar = element.team1Scored;
            element.team1Scored = element.team2Scored;
            element.team2Scored = tempVar;
          }
          return ({"enemyTeam":element.team2, "VVScore":element.team1Scored, "enemyTeamScore":element.team2Scored})
        })
        setEnemyTeams(newData.map((element)=>{return element.enemyTeam}));
        setVVGoals(newData.map((element)=>{return element.VVScore}));
        setEnemyGoals(newData.map((element)=>{return element.enemyTeamScore}));
        setBalance(newData.map((element)=>{return (parseInt(element.VVScore) - parseInt(element.enemyTeamScore))}));
        // setEnemyTeams(newData.map((element)=>{if(element.enemyTeam !== "NLNA"){return element.enemyTeam}else{return "NLNA"}}));
        // setVVGoals(newData.map((element)=>{if(element.enemyTeam !== "NLNA"){return element.VVScore}else{return 4}}));
        // setEnemyGoals(newData.map((element)=>{return element.enemyTeamScore}));
        // setBalance(newData.map((element)=>{if(element.enemyTeam !== "NLNA"){return (parseInt(element.VVScore) - parseInt(element.enemyTeamScore))}else{return 1}}));
      })
      .catch(error => {
        console.log(error);
      });

    fetch('https://vodka-volleys-api.onrender.com/scrape/Scorers/VV')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setTopPlayerName(data[0])
        setPlayerName(data.filter((player, i) => i < 5).map(player => player.playerName));
        setPlayerGoals(data.filter((player, i) => i < 5).map(player => player.goals));
      })
      .catch(error => {
        console.log(error)
      });



      fetch('https://vodka-volleys-api.onrender.com/scrape/Table')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setTeams(data)
      })
      .catch(error => {
        console.log(error)
      });


  }, []);


  useEffect(() => {
    const handleScroll = (event) => {
      event.preventDefault();

      const scrollSpeed = 1; // Adjust this value as needed
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
      <div className="content" >
        <Row>
          <Col xs="12" lg="8">
            <Card className="card-chart">
              <CardHeader>
                <Row>
                  <Col className="text-left" sm="6">
                    <h5 className="card-category">Bramki</h5>
                    <CardTitle tag="h2">{bigChartData}</CardTitle>
                  </Col>
                  <Col sm="6">
                    <ButtonGroup
                      className="btn-group-toggle float-right"
                      data-toggle="buttons"
                    >
                      <Button
                        tag="label"
                        className={classNames("btn-simple", {
                          active: bigChartData === "data1",
                        })}
                        color="info"
                        id="0"
                        size="sm"
                        onClick={() => setBgChartData("Wszystkie")}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          Wszystkie wykresy
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-chart-bar-32" />
                        </span>
                      </Button>
                      <Button
                        tag="label"
                        className={classNames("btn-simple", {
                          active: bigChartData === "data1",
                        })}
                        color="info"
                        id="0"
                        size="sm"
                        onClick={() => setBgChartData("Strzelone")}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          Strzelone
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-minimal-up" />
                        </span>
                      </Button>
                      <Button
                        color="info"
                        id="1"
                        size="sm"
                        tag="label"
                        className={classNames("btn-simple", {
                          active: bigChartData === "data2",
                        })}
                        onClick={() => setBgChartData("Stracone")}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          Stracone
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-minimal-down" />
                        </span>
                      </Button>
                      <Button
                        color="info"
                        id="2"
                        size="sm"
                        tag="label"
                        className={classNames("btn-simple", {
                          active: bigChartData === "data3",
                        })}
                        onClick={() => setBgChartData("Bilans")}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          Bilans
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-simple-delete" />
                        </span>
                      </Button>
                    </ButtonGroup>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartExample1(enemyTeams,VVGoals,enemyGoals, balance)[bigChartData]}
                    options={chartExample1(enemyTeams,VVGoals,enemyGoals, balance).options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Najlepsi Strzelcy</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-single-02 text-primary" />{" "}
                  {topPlayerName.length !== 0 && topPlayerName.playerSurName.toUpperCase() + " " + topPlayerName.playerName.toUpperCase()}
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Bar
                    data={chartExample3(playerName,playerGoals).data}
                    options={chartExample3(playerName,playerGoals).options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          
          
          <Col lg="12" md="12">
            <Card >
              <CardHeader>
                <CardTitle tag="h4">Tabela ligowa</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter">
                  <thead className="text-primary">
                    <tr>
                      <th>Nazwa Drużyny</th>
                      <th>pkt</th>
                      <th>W</th>
                      <th>R</th>
                      <th>P</th>
                      <th>BR +</th>
                      <th>BR -</th>
                      <th>bilans</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.isArray(teams) && teams.length !== 0 && teams.map((team, i)=>{
                        return(
                          <tr style={{background:((i+1)<=2)?"rgba(0,148,0,1)":((i+1)<=8)?"#27293d":"rgba(148,0,0,1)"}}>
                            <td>{team.playerName}</td>
                            <td>{team.points}</td>
                            <td>{team.matchesWon}</td>
                            <td>{team.matchesDrawn}</td>
                            <td>{team.matchesLost}</td>
                            <td>{team.goalScored}</td>
                            <td>{team.goalLost}</td>
                            <td>{team.bilans}</td>
                          </tr>
                        )
                    })}
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

export default Dashboard;
