import background1 from '../assets/img/bg-img0.jpeg'
import img1 from '../assets/img/img-square1.png'
import img3 from '../assets/img/img-square3.png'
import img4 from '../assets/img/img-square4.png'
import img5 from '../assets/img/img-square5.png'
import img6 from '../assets/img/img-square6.png'
import img7 from '../assets/img/img-square7.jpeg'
function Page4() {
    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="flex flex-col items-center justify-around w-screen h-screen Main-color Italiana" style={{ backgroundImage: `url(${background1})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPositionX: 'center', backgroundPositionY: 'center' }} >
                <div className="text-center" style={{ position: 'center' }}>
                    <p className="text-14 m-6">Moments</p>
                    <div className=" flex md:flex-row flex-col" >
                        <div className="w-48 h-40" style={{ backgroundImage: `url(${img1})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPositionX: 'center', backgroundPositionY: 'center' }} ></div>
                        <div className="w-48 h-40" style={{ backgroundImage: `url(${img7})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPositionX: 'center', backgroundPositionY: 'center' }} ></div>
                        <div className="w-48 h-40" style={{ backgroundImage: `url(${img3})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPositionX: 'center', backgroundPositionY: 'center' }} ></div>
                        <div className="w-48 h-40" style={{ backgroundImage: `url(${img4})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPositionX: 'center', backgroundPositionY: 'center' }} ></div>
                        <div className="w-48 h-40" style={{ backgroundImage: `url(${img5})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPositionX: 'center', backgroundPositionY: 'center' }} ></div>
                        <div className="w-48 h-40" style={{ backgroundImage: `url(${img6})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPositionX: 'center', backgroundPositionY: 'center' }} ></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page4;