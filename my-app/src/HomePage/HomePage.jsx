import { Box, Heading, Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const data = [
  {
    id: 1,
    src: "https://ii1.pepperfry.com/media/wysiwyg/banners/Web_Promo_2x_2002_ND.jpg",
  },
  {
    id: 2,
    src: "https://ii2.pepperfry.com/media/wysiwyg/banners/WEB_HB1_2x_2102.jpg",
  },
  {
    id: 3,
    src: "https://ii3.pepperfry.com/media/wysiwyg/banners/WEB_HB2_2x_2102.jpg",
  },
  {
    id: 4,
    src: "https://ii1.pepperfry.com/media/wysiwyg/banners/WEB_HB3_2x_2102.jpg",
  },
];

//shop by room

const room_data = [
  {
    id: 1,
    src: "https://ii2.pepperfry.com/media/wysiwyg/banners/Hp_section4_web_04012023_1.jpg",
    title: "Shop Living Room ",
  },
  {
    id: 2,
    src: "https://ii3.pepperfry.com/media/wysiwyg/banners/Hp_section4_web_04012023_2.jpg",
    title: " Shop BedRoom ",
  },
  {
    id: 3,
    src: "https://ii1.pepperfry.com/media/wysiwyg/banners/Hp_section4_web_04012023_3.jpg",
    title: " Shop Dinning Room ",
  },
  {
    id: 4,
    src: "https://ii2.pepperfry.com/media/wysiwyg/banners/Hp_section4_web_04012023_4.jpg",
    title: " Shop Study Room ",
  },
];

//The fry deals→

const fry_deals = [
  {
    id: 1,
    src: "https://ii3.pepperfry.com/media/wysiwyg/banners/Home_Web_21022023_6.jpg",
    head:"FOr ₹ 549 at 66% off ",
    title: " 2 x 7ft Floor Runner",
  },
  {
    id: 2,
    src: "https://ii1.pepperfry.com/media/wysiwyg/banners/Home_Web_21022023_13.jpg",
    head:"FOr ₹ 159 at 54% off ",
    title: " Set of 4 Side Plates",
  },
  {
    id: 3,
    src: "https://ii3.pepperfry.com/media/wysiwyg/banners/Home_Web_21022023_11.jpg",
    head:" FOr ₹ 129 at 90% off ",
    title: "3 Meter LED String Light",
  },
  {
    id: 4,
    src: "https://ii2.pepperfry.com/media/wysiwyg/banners/Hp_section4_web_04012023_4.jpg",
    head:" FOr ₹ 129 at 71% off ",
    title: " Broken Heart Natural Plant",
  },
];

export const HomePage = () => {
  return (
    <Box>
      <Box width={"90%"} m="auto" display={"flex"} gap={5} margin={"auto"}>
        <Box flex={2}>
          <Carousel
            showThumbs={false}
            showArrows={false}
            swipeable={true}
            autoPlay
            showStatus={false}
            autoFocus={true}
            infiniteLoop={true}
          >
            {data.map((ele) => {
              return (
                <div key={ele.id}>
                  <Image height={"32rem"} src={ele.src} alt="" />
                </div>
              );
            })}
          </Carousel>
        </Box>
        <Box flex={1} width={"20%"}>
          <Image
            width={"full"}
            height={"32rem"}
            src="https://ii2.pepperfry.com/media/wysiwyg/banners/web_rhs_02022023_1.jpg"
            alt=""
          />
        </Box>
      </Box>
      {/* --------------------------------------------------------- */}
      <Box
        className="shop_by"
        width={"90%"}
        margin={"auto"}
        textAlign={"center"}
      >
        <Heading mt={30} marginBottom={30}>
          Shop By Room
        </Heading>
        <Box display={"flex"} gap={10}>
          {room_data.map((ele) => {
            return (
              <div key={ele.id}>
                <Image height={"15rem"} src={ele.src} alt="" width={"100%"} />
                <p>{ele.title} {"→"}</p>
              </div>
            );
          })}
        </Box>
      </Box>

      {/* -------------------------------------- */}


      <Box
        className="shop_by"
        width={"90%"}
        margin={"auto"}
        textAlign={"center"}
      >
        <Heading mt={30} marginBottom={30} textAlign={"start"}>
        What The Fry Deals
        </Heading>
        <Box display={"flex"} gap={10}>
          {fry_deals.map((ele) => {
            return (
              <div key={ele.id}>
                <Image height={"25rem"} src={ele.src} alt=""  width={"100%"}/>
                <h4 Font-weight={"50"} >{ele.head}</h4>
                <p>{ele.title}</p>
              </div>
            );
          })}
        </Box>
      </Box>    </Box>
  );
};

export default HomePage;
