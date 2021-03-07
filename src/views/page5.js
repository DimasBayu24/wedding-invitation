import React, { useState } from 'react'
import background3 from '../assets/img/bg-img3.jpeg'
const Page5 = () => {
    const [data, setData] = useState([])
    const [nama, setNama] = useState("")
    const [ucapan, setUcapan] = useState("")
    const obj = { "nama": nama, "ucapan": ucapan }
    const submitUcapan = () => {
        setData([...data, obj])
        console.log(obj);
        console.log(data);
        setNama("")
        setUcapan("")
    }
    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="flex flex-col items-center justify-around w-screen h-screen Main-color Oregano" style={{ backgroundImage: `url(${background3})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPositionX: 'center', backgroundPositionY: 'center' }} >
                <div className="w-full h-full p-4" >
                    <div className="w-full h-full background-transparent" >
                        <div className="flex flex-row text-center" >
                            <div className="w-1/3" style={{ borderBottomWidth: 10, borderColor: '#000000' }} />
                            <p className="w-1/3 md:text-36 text-14">Dear Lola&Bilal</p>
                            <div className="w-1/3" style={{ borderBottomWidth: 10, borderColor: '#000000' }} />
                        </div>
                        <div className="md:h-2/4 sm:h-3/4 h-3/6 Italianno px-10" style={{ overflow: 'auto', fontWeight: '500' }} >
                            {data.map((item) => (
                                <div className="flex flex-row Italianno text-14" >
                                    <p>{item.nama} :</p>
                                    <p>{item.ucapan}</p>
                                </div>
                            ))}

                        </div>
                        <div className="md:h-1/3 sm:h-1/5 h-1/4 px-10 sm:mt-0 mt-20" >
                            <div className="bg-white h-full w-full px-10 text-14 Italianno Black-color" >
                                <p className="Italianno Black-color" >From : <span><input className=" w-20 sm:w-52" type="text" placeholder={nama === "" ? "..." : nama} value={nama} onChange={(e) => setNama(e.target.value)} /></span></p>
                                <textarea name="textarea" placeholder={ucapan === "" ? "Tuliskan ucapan & doa untuk Lola & Rabilal" : ucapan} value={ucapan} onChange={(e) => setUcapan(e.target.value)} className="w-full md:h-24 h-14 m-0 p-0 " style={{ backgroundColor: '#C4C4C4', }} />
                                <button onClick={() => submitUcapan()} className="w-full m-0 p-0" style={{ backgroundColor: '#B5C1FF' }} >Kirim</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page5;