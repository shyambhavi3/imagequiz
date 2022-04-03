import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Spinner from 'react-bootstrap/Spinner';
import dataService from "../data_access_layer/local_temporarily_storage";
import { useEffect, useState } from "react";

const Quiz = () => {
    const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
    const [quiz, setQuiz] = useState(undefined);
    const { id } = useParams();
    

    useEffect(() => {
        if(!quiz) {
            let x = dataService.getQuiz(id);
            setQuiz(x);
            console.log(x);
        }        
    });

    return (

        <Container>
            <Row xs={1} md={3} className="g-4 text-center">
                <Col>
                    {quiz ?
                        <Card className="h-100" >
                            <Card.Img variant="top" src={quiz.questions[currentQuestionNumber].picture} />
                            <Card.Body>
                                <Card.Title>{quiz.name}</Card.Title>
                                <Card.Text>
                                    Let's take the quiz now!
                                </Card.Text>
                            </Card.Body>
                            <ListGroup>
                                {quiz.questions[currentQuestionNumber].choices.map(x =>
                                    <ListGroup.Item>{x}</ListGroup.Item>
                                )}
                            </ListGroup>
                        </Card>
                        :
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    }
                </Col>
            </Row>
        </Container>


    );
}

export default Quiz;