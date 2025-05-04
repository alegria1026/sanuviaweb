import Footer from "@/app/components/Footer";
import Menu from "@/app/components/Menu";
import Carousel from "@/app/components/Carousel";

export default function products() {
  const kit = [
    {
      id: 1,
      image: '/kit1.png',
      link: '/infographic/kitsobrepeso'
    },
    {
      id: 2,
      image: '/kit2.png',
      link: '/infographic/balancebox'
    },
    {
      id: 3,
      image: '/kit3.png',
      link: '/infographic/kitdenutricion'
    }
  ];

  return (
    <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Menu />
        <Carousel 
            title="PRODUCTOS" 
            products={kit} 
        />       
    </div>
  );
}