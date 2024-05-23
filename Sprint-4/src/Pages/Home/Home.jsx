import Carrossel_Home from "../../Components/Carrossel_Home/Carrossel_Home"
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import NavBar from "../../Components/NavBar/NavBar"

import Icr_img from "../../img/show_image.jpeg"
import { FaCommentMedical } from "react-icons/fa6";
import { FaLaptopMedical } from "react-icons/fa6";
import { FaSuitcaseMedical } from "react-icons/fa6";



function Home() {
    return (
        <>
        <Header />
        <NavBar />

        <section className="bg-gray-200">
        <h1 className="text-8xl p-5 m-0 flex justify-center font-sans pt-10"> Nosso Hospital</h1>
        <div className="border-t-4 border-blue-400 w-28 mx-auto"></div>
        
        <Carrossel_Home />
        
        <div>
            <h1 className="text-8xl p-5 m-0 flex justify-center font-sans">Sobre Nós</h1>
            <div className="border-t-4 border-blue-400 w-28 mx-auto"></div>
            <div className="flex p-5">
                <p className=" text-xl justify-center items-center pt-20">
                    O Instituto da Criança do Hospital das Clínicas da Faculdade de Medicina da Universidade de São Paulo - ICr/HCFMUSP é uma das sete unidades hospitalares que integram e, juntas, formam o Hospital das Clínicas da FMUSP. 
                </p>
                <img src={Icr_img} alt="" />
            </div>
        </div>

        <div>
            <h1 className="text-8xl p-5 m-0 flex justify-center font-sans">Nossas Especialidades</h1>
            <div className="border-t-4 border-blue-400 w-28 mx-auto"></div>


        </div>

        <div className=" xl:px-36 grid grid-cols-3 gap-10 pt-10"> 
        
                <div>
                    <div className="text-indigo-950 text-7xl flex justify-center ">
                         <FaCommentMedical /> 
                    </div>
                    <h1 className="text-indigo-950 text-xl text-center pt-3"> Atendimento Humanizado </h1>
                    <p className="text-justify pt-10">
                        No Hospital ICR, o atendimento humanizado é uma prioridade, onde cada paciente é tratado com empatia, respeito e dedicação, garantindo um cuidado integral e acolhedor em todos os momentos de sua jornada de saúde.
                    </p>
                </div>

                <div>
                    <div className="text-indigo-950 text-7xl flex justify-center ">
                        <FaSuitcaseMedical />
                    </div>
                    <h1 className="text-indigo-950 text-xl text-center pt-3"> Especializado em atendimento Infantil </h1>
                    <p className="text-justify pt-4">
                        No Hospital ICR, somos especializados em atendimento infantil, proporcionando um cuidado carinhoso e altamente qualificado para garantir a saúde e o bem-estar das crianças.
                    </p>
                </div>

                <div>
                    <div className="text-indigo-950 text-7xl flex justify-center ">
                        <FaLaptopMedical />
                    </div>
                    <h1 className="text-indigo-950 text-xl text-center pt-3"> Inovação </h1>
                    <p className="text-justify pt-10">
                        No Hospital ICR, a inovação é um pilar essencial, impulsionando avanços  e práticas médicas modernas para oferecer tratamentos de ponta e melhorar continuamente a qualidade do atendimento aos pacientes.
                    </p>
                </div>
        </div>

        <div className=" p-5">

        </div>


        </section>

        
        <Footer />
        
        </>
    )
}

export default Home