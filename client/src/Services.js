import Card from './Card';
import logo1 from'./Assets/Vector (10).png';
import logo2 from './Assets/new_releases.png';
import logo3 from './Assets/chat.png'

const Services = () => {
    const dataItems = [
    { title: "Advanced Research", text: "Environmental legal issues might occur since the planned business activities are designed."  , Logo  : logo1},
    { title: "Verified Profiles", text: "Environmental legal issues might occur since the planned business activities are designed" , Logo  : logo2 },
    { title: "Seamless Experience", text: "Environmental legal issues might occur since the planned business activities are designed" , Logo  : logo3 },
  
    ]
    return ( <div className='bg-[#ECF3F8] p-16 w-full'>
        <div className='p-8 text-center'>
        <h1 className='text-[#0F3146] text-4xl font-medium'>Our Services</h1>
        <p className='p-4  text-[#496C80] text-md'>Environmental legal issues might occur since the planned business activities are designed</p>
        </div>
        <div className='grid grid-cols-1 gap-4 mx-16 md:grid md:grid-cols-2 lg:flex lg:justify-evenly '>
            {/* im gonna render card for each item  */}
        {dataItems.map((data, index) => (
        <Card key={index}  Logo={data.Logo} title={data.title} text={data.text} />
      ))}  
        </div>
    </div> );
}

export default Services;