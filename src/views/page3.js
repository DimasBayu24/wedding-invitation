import React from 'react'
import background3 from '../assets/img/bg-img1.jpeg'
import Map from '../components/Map'
import mapPict from '../assets/img/map.png'
import Count from '../components/countdown/count'
import iconIG from '../assets/img/ig.png'
const Page3 = () => {
    const moveToMap = () => {
        window.open("https://goo.gl/maps/JbLbG54r5ANS9Sq69");
    }
    const moveToLola = () => {
        window.open("https://www.instagram.com/lolanadita/");
    }
    const moveToBilal = () => {
        window.open("https://www.instagram.com/rabilaltjg/");
    }
    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="flex flex-col w-screen h-screen Main-color Oregano" style={{ backgroundImage: `url(${background3})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPositionX: 'center', backgroundPositionY: 'center' }} >
                <div className="w-full sm:h-72 md:h-60 p-8 pb-0" >
                    <div className="w-full h-full background-transparent" >
                        <div className="text-center" style={{ position: 'center' }}>
                            <p className="text-8 sm:text-14">InsyaAllah dilaksanakan pada :</p>
                            <div className="p-1 sm:p-4" />
                            <div className=" flex flex-row">
                                <div className="flex w-1/2 flex-col items-center" >
                                    <p className="text-8 sm:text-14 w-1/2 ">Akad Nikah</p>
                                    <p className="text-8 sm:text-14 px-4">Jumat,12 Maret 2021 pukul 09:00 WIB s.d. Selesai Masjid Al-Hidayah Komp. Belanti permai I Kampung lapai-Padang</p>
                                </div>
                                <div className="flex w-1/2 flex-col items-center" >
                                    <p className="text-8 sm:text-14 w-1/2 ">Resepsi pernikahan</p>
                                    <p className="text-8 sm:text-14 px-4">Sabtu, 13 Maret 2021 Pukul 10.00 s.d 16:30 WIB Gedung Rohana Kudus Jl. Rimbo Kaluang No.52 A Komp. GOR. H. Agus Salim Padang</p>
                                </div>
                            </div>
                        </div>
                        <div className="" />
                    </div>
                </div>
                <div className="md:h-0 h-1" />
                <div className="w-full justify-center items-center flex flex-col md:flex-row text-center text-8 sm:text-14">
                    <div>
                        <p>Wedding Live</p>
                        <div className="flex flex-row items-center" >
                            <img src={iconIG} className="w-5 mr-1" />
                            <p className="mr-3" > lolanadita </p>
                            <button className=" p-0" onClick={moveToLola} style={{ backgroundColor: '#4D4242' }} >
                                <p className="p-0" style={{ lineHeight: 1 }} >Buka Instagram</p>
                            </button>
                        </div>
                        <div className="flex flex-row items-center" >
                            <img src={iconIG} className="w-5 mr-1" />
                            <p className="mr-3" > Rabilaltjg </p>
                            <button className=" p-0" onClick={moveToBilal} style={{ backgroundColor: '#4D4242' }} >
                                <p className="p-0" style={{ lineHeight: 1 }} >Buka Instagram</p>
                            </button>
                        </div>
                    </div>
                    <div className="md:px-10 px-0 md:py-0 py-2" />
                    <div className="sm:w-1/4 w-1/2" >
                        <p className="text-8 sm:text-14">Gedung Rohana Kudus Jl. Rimbo Kaluang No.52 A Komp. GOR. H. Agus Salim Padang</p>
                    </div>
                </div>
                <div className="md:py-5 py-0" />
                <div className="w-full px-10 flex flex-col md:flex-row justify-around items-center" >
                    <div className="md:h-0 sm:h-16 h-0" />
                    <button onClick={moveToMap} >
                        <div className="w-28 h-28 sm:w-52 sm:h-52" >
                            <img src={mapPict} />
                        </div>

                    </button>
                    <div className="md:h-0 sm:h-16 h-6" />
                    <Count />
                </div>
            </div>
        </div>
    );
}

export default Page3;