import React from 'react'
import background3 from '../assets/img/bg-img1.jpeg'
import Map from '../components/Map'
import mapPict from '../assets/img/map.png'
import Count from '../components/countdown/count'
const Page3 = () => {
    const moveToMap = () => {
        window.open("https://goo.gl/maps/JbLbG54r5ANS9Sq69");
    }
    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="flex flex-col w-screen h-screen Main-color Oregano" style={{ backgroundImage: `url(${background3})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPositionX: 'center', backgroundPositionY: 'center' }} >
                <div className="w-full h-80 md:h-60 p-8 pb-0" >
                    <div className="w-full h-full background-transparent" >
                        <div className="text-center" style={{ position: 'center' }}>
                            <p className="text-14">InsyaAllah dilaksanakan pada :</p>
                            <div className="p-4" />
                            <div className=" flex flex-row">
                                <div className="flex w-1/2 flex-col items-center" >
                                    <p className="text-14 w-1/2 ">Akad Nikah</p>
                                    <p className="text-14 px-4">Jumat,12 Maret 2021 pukul 09:00 WIB s.d. Selesai Masjid Al-Hidayah Komp. Belanti permai I Kampung lapai-Padang</p>
                                </div>
                                <div className="flex w-1/2 flex-col items-center" >
                                    <p className="text-14 w-1/2 ">Resepsi pernikahan</p>
                                    <p className="text-14 px-4">Sabtu, 13 Maret 2021 Pukul 10.00 s.d 16:30 WIB Gedung Rohana Kudus Jl. Rimbo Kaluang No.52 A Komp. GOR. H. Agus Salim Padang</p>
                                </div>
                            </div>
                        </div>
                        <div className="" />
                    </div>
                </div>
                <div className="md:h-0 h-10" />
                <div className="w-full justify-center flex flex-row text-center ">
                    <div className="w-1/4" >
                        <p className="text-14">Gedung Rohana Kudus Jl. Rimbo Kaluang No.52 A Komp. GOR. H. Agus Salim Padang</p>
                    </div>
                </div>
                <div className="w-full px-10 flex flex-col md:flex-row justify-around items-center" >
                    <div className="md:h-0 h-16" />
                    <button onClick={moveToMap} >
                        <div className="w-52 h-52" >
                            <img src={mapPict} />
                        </div>

                    </button>
                    <div className="md:h-0 h-16" />
                    <Count />
                </div>
            </div>
        </div>
    );
}

export default Page3;