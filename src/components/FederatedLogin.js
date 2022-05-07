import { useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { useNavigate, useParams } from 'react-router-dom';
import apiAccess from '../communication/APIaccess';


let FederatedLogin = (props) => {
    const { username, name } = useParams();
    const navigate = useNavigate();
    console.log(username,name);

    useEffect(() => {
      apiAccess.isLoggedIn()
      .then(x => {
          console.log(x);
          if(x) {
             props.customerLoggedIn(username);
             navigate('/');
          } else {
              // change the alert to a nice bootstrap modal!
             alert('Something went wrong!');
             navigate('/');
          }
      })
    }, []);

    return (
        <>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>

        </>
    );
}

export default FederatedLogin;