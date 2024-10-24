import profile from '../../assets/images/profile.png'
function Header() {
    return (
        <div className="flex justify-between items-center border-b-2 py-5 container mx-auto">
            <h1 className='text-3xl font-extrabold'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
}

export default Header;