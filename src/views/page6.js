import background5 from '../assets/img/bg-img5.jpeg'
import prof1 from '../assets/img/prof1.png'
import prof2 from '../assets/img/prof2.png'
function Page6() {
    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="flex flex-col items-center justify-around w-screen h-screen Main-color Oregano" style={{ backgroundImage: `url(${background5})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPositionX: 'center', backgroundPositionY: 'center' }} >
                <div className="w-full h-full p-4" >
                    <div className="w-full h-full background-transparent p-10 px-20 text-14" >
                        <div className="text-center" style={{ position: 'center' }}>
                            <p>“Dan diantara tanda-tanda kebesaran nya ialah menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tentram, Dan Dialah menjadikan diantara kamu rasa kasih dan sayang . Sungguh, pada yang demikian itu benar-benar terdapat  tanda-tanda (kebesaran Allah ) Bagi kaum yang berpikir “”(Q.S. Ar Rum :21)</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page6;