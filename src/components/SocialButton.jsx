import { CardLink, CardSubtitle } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import '../App.css'



const SocialButton = ({facebook,gitHub,Linkedin}) => {
    return (
        <>  
           <CardLink href="https://es-la.facebook.com/" target="_blank" className="icon">
                <Card.Img src={facebook} />
            </CardLink>
            <CardLink href="https://github.com/" target="_blank">
                <Card.Img src={gitHub} />
            </CardLink>
            <CardLink href="https://www.linkedin.com/feed/" target="_blank">
                <Card.Img src={Linkedin} />
            </CardLink>       
        </>
    );
};

export default SocialButton;