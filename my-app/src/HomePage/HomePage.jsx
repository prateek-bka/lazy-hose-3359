import { Box, Heading, Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { data, fry_deals, room_data } from "./HomeData";

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
                <p>
                  {ele.title} {"→"}
                </p>
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
                <Image height={"25rem"} src={ele.src} alt="" width={"100%"} />
                <h4 Font-weight={"50"}>{ele.head}</h4>
                <p>{ele.title}</p>
              </div>
            );
          })}
        </Box>
      </Box>{" "}
    </Box>
  );
};

export default HomePage;
