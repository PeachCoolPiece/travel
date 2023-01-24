import './App.css';
import {Container,Navbar, Nav,Carousel} from 'react-bootstrap';
import {useState} from "react";
import travelData from './data'
import {Routes,Route,Link} from 'react-router-dom'


function App() {
    let [travel] = useState(travelData)
    let [im] = useState(["https://img.modetour.com/eagle/photoimg/52991/sfile/636083259753584968.jpg","https://img.modetour.com/eagle/photoimg/63597/sfile/637176329011623820.jpg","https://img.modetour.com/eagle/photoimg/54773/sfile/636241341227087442.jpg"])
    let [im1]= useState(["https://image.hanatour.com/usr/manual/md/2022/03/PL00113019/pc/img_01.jpg","https://image.hanatour.com/usr/manual/md/2022/11/PL00113523/pc_003.jpg","https://image.hanatour.com/usr/manual/md/2022/12/PL00113097/pc_001.jpg"])


  return (

    <div className="App">

        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home">DDIT 여행사</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">국내여행</Nav.Link>
                    <Nav.Link href="#features">해외여행</Nav.Link>
                    <Nav.Link href="#pricing">게시판</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

        <Routes>
            <Route path="/" element={
                <>
                <Carousel fade className={"carousel slide w-75 m-auto carousel-dark"}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 "
                            src="https://image.hanatour.com/usr/manual/md/2022/03/PL00113019/pc/img_01.jpg"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 "
                            src="https://image.hanatour.com/usr/manual/md/2022/11/PL00113523/pc_003.jpg"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 "
                            src="https://image.hanatour.com/usr/manual/md/2022/12/PL00113097/pc_001.jpg"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
                <br>
                </br>

            {
                <div className="container">
                <div className="row">
            {
                travel.map( (a,i) => {
                return (
                <Card travel={travel[i]} im={im[i]}></Card>
                )
            })
            }
                </div>
                </div>
            }
                </>

            }/>








        </Routes>


    </div>
  );
}
function Card(props) {
    return(
        <div className="col-md-4">
            <img src={props.im} width="80%"/>
            <h3 style={ {fontSize : '20px'}}>{props.travel.title}</h3>
            <p >{props.travel.price}</p>
        </div>

    )
}




export default App;
