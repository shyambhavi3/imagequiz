import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import apiAccess from '../communication/APIaccess';
import { useEffect, useState } from "react";



const Home = () => {
    const [flowers, setFlowers] = useState([]);
    const navigate = useNavigate();

    let takeTheQuiz = (flowerName) => {
        navigate('/quiz/' + flowerName);
    }

    useEffect(() => {
        apiAccess.getFlowers()
            .then(x => setFlowers(x))
            .catch(e => {
                console.log(e);
                alert('Something went wrong.')
            })
    }, []);


    return (
        <Container>
            <Row xs={1} md={3} className="g-4 text-center">
                {flowers.map((x, index) => (
                    <Col key={index}>
                        <Card className="h-100" onClick={() => takeTheQuiz(x.name)}>
                            <Card.Img variant="top" src={x.picture} />
                            <Card.Body>
                                <Card.Title>{x.name}</Card.Title>
                                <Card.Text>
                                   
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

        </Container>


    );

}

export default Home;
