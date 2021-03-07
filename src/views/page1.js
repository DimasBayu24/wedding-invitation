import background1 from '../assets/img/bg-img0.jpeg'

function Page1() {
    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="flex flex-col items-center justify-around w-screen h-screen Main-color Oregano" style={{ backgroundImage: `url(${background1})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPositionX: 'center', backgroundPositionY: 'center' }} >
                <div className="text-center" style={{ position: 'center' }}>
                    <p className="text-14 m-6">The Wedding Of</p>
                    <p className="text-24 sm:text-36">LOLA & RABILAL</p>
                    <p className="text-14">Sabtu, 13 Maret 2021</p>
                </div>
                <div />
                <div />
                <div className="flex flex-col items-center hover" >
                    <p className="text-10 sm:text-14" >Swipe Untuk Membuka Undangan</p>
                    <div className="Triangle" style={{ width: 100, height: 50 }} />
                    <div className="Triangle" style={{ width: 100, height: 50, position: 'relative', bottom: 30 }} />
                </div>
            </div>
        </div>
    );
}

export default Page1;