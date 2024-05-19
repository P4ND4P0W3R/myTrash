import './css/Contact.css';
import NavBar from '../components/NavBar';

export default function ContactUs(){
    return(
        <>
        <NavBar />
        <section id="contact">    
            <section id="contacttitle">
                <h1>CONTACT US!</h1>
            </section>

            <section id="contactp1">
                <p> For any question related to the website, please feel free to write to us at <a href="mailto:">mytrash@service.com</a>. </p>
                <p> We keep ourselves available for any help we can provide you.</p>
            </section>

            <section id="contactp2">
                <p> If you wish to invest in our project, do not hesitate to make some donations at <a href="href:">https://donatetomytrash.com</a>. </p>
            </section>   
        </section>
        </>
    )
}   