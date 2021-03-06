import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Spinner from 'react-bootstrap/Spinner';
import apiAccess from '../communication/APIaccess';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const Quiz = (props) => {
    const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
    const [quiz, setQuiz] = useState(undefined);
    const { id } = useParams();
    const [quizScore, setScore] =useState(0);
    const navigate = useNavigate();
    
    useEffect(() => {
        if(!quiz) {
            apiAccess.getQuiz(id).then(x=>{
                console.log(x);
                console.log(x.questions[currentQuestionNumber].choices.split(','));
                x.questions[currentQuestionNumber].choices.split('\n').map(x =>
                    console.log(x))
                setQuiz(x);
            

            })

            
            
        }        
    });

    let handleClick= (answer,x)=>{
        console.log(answer+x)
        if(answer.trim()===x.trim()){
            setScore(quizScore+1);
        }
        
        console.log(quizScore);
        if(currentQuestionNumber<5){
            setCurrentQuestionNumber(currentQuestionNumber+1);

        }

        else{
            const customerEmail = props.customer
            const quizName = id;

            apiAccess.addScore(customerEmail,quizName,quizScore).then(x=>{
                navigate('/quizend/' + quizScore+'/'+id);

            })
            
        }
        

    }



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
                                {
                                    quiz.questions[currentQuestionNumber].choices.split(',').map(x =>
                                    <button onClick={() => handleClick(quiz.questions[currentQuestionNumber].answer,x)}>{x}</button>
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