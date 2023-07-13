import LoginForm from "../../../components/Forms/LoginForm/LoginForm";
import Header from "../../../components/Header/Header";
import LoginAside from "../../../components/LoginAside/LoginAside";

export default function Login(){
    return<>
    <Header />
    <section className="container">
        <div className="row">

            <div className="col-12 col-md-6">
                <LoginForm />
            </div>

            <div className="col-12 col-md-5 offset-md-1">
                <LoginAside />
            </div>

        </div>
    </section>
   
    </>
}