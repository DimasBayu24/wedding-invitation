import background2 from '../assets/img/bg-img2.jpeg'
import prof1 from '../assets/img/prof1.png'
import prof2 from '../assets/img/prof2.png'
function Page2() {
    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="flex flex-col items-center justify-around w-screen h-screen Main-color Oregano" style={{ backgroundImage: `url(${background2})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPositionX: 'center', backgroundPositionY: 'center' }} >
                <div className="w-full h-full p-4" >
                    <div className="w-full h-full background-transparent" >
                        <div className="text-center" style={{ position: 'center' }}>
                            <p className=" text-8 sm:text-14">Bismillahirahmanirrahiim</p>
                            <p className=" text-8 sm:text-14">Assalamu’alaikum warahmatullahi Wabarakatuh</p>
                            <div className="p-6" />
                            <p className=" text-8 sm:text-14">Dengan Memanjatkan Puji dan Syukur Serta Memohon Rahmat dan ridho Allah , kami bermaksud menyelenggarakan pernikahan putra putri kami ;</p>
                        </div>
                        <div className="sm:h-10 h-20" />
                        <div className="flex flex-row justify-around items-center text-center w-full sm:px-10 px-0" >
                            <div className="sm:w-40 w-20" >
                                <img src={prof1} />
                            </div>
                            <p className=" w-4/6  text-8 sm:text-14 px-2 md:px-10">Lola Astri Nadita , S,Kom Putri dari Bpk. Dr.Ir.H. Sunadi, MP & Ibu Dr.Ir.H. Nita Yessirita, MP</p>
                        </div>
                        <div className="h-10" />
                        <div className="flex flex-row justify-around items-center text-center w-full sm:px-10 px-0" >
                            <p className=" w-4/6  text-8 sm:text-14 px-2 md:px-10">Rabilal Adenan, S.Kom Putra dari Bpk. Ir.H. Gozali & Ibu Hj. Ita Hendriani Rambe, S.pd.,M.Pd</p>
                            <div className="sm:w-40 w-20" >
                                <img src={prof2} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page2;