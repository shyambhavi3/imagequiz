import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
const QuizEnd = () => {


    const { score, flower } = useParams();
    const navigate = useNavigate();

   function handleClick(flower){
       navigate('/quiz/'+flower)
   }

    return (
        <div>
            Your score is {score}!
            <br></br>
            <button onClick={() => handleClick(flower)}>Replay!</button>
           
        </div>
    );
 }
 
 export default QuizEnd;