import RegisterForm from "../../../components/Forms/RegisterForm/RegisterForm";
import EbIntro from "../../../components/HomePageComponents/EbIntro/EbIntro";

export default function Register(){
    return<>
    <EbIntro />
    <section className="container">
        <div className="row">
            <div className="col-12 col-md-6 offset-md-3">
                <RegisterForm />
            </div>
         
        </div>
        
    </section>
    </>
}