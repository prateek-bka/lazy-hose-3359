import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Heading,
} from "@chakra-ui/react";
import { FiShoppingCart} from "react-icons/fi";
import { useAuth0 } from "@auth0/auth0-react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import axios from "axios";
import logo from "../assets/FurnitureTry.jpg";
import {
  FaCaretLeft,
  FaCaretSquareDown,
  FaCartPlus,
  FaPeopleCarry,
 
  FaUserAlt,
} from "react-icons/fa";
import { useSelector,useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { clearall } from "../Redux/CartReducer/action";


export const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box width={"100%"} margin={"auto"}>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
          <img width={"150px"} src={logo} alt="" paddingTop={"-55px"} />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          {/* <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color={useColorModeValue('gray.800', 'white')}>
              Logo
            </Text> */}

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        ></Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};

const DesktopNav = () => {
  const navigate = useNavigate();
  const linkColor = useColorModeValue("black.1000", "black.200");
  const linkHoverColor = useColorModeValue("black.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");
  const { isLoading, isError, cart_products } = useSelector(
    (store) => store.cartReducer
  );
  const number_of_item = cart_products.reduce(
    (acc, current) => acc + current.quantity,
    0
  );
  const [data, setData] = useState([]);

  const handleNavigation = () => {
    navigate("/cart");
  };
  const handleAdmin =()=>{
    navigate("/admin")
  }

  const handleNavigationToHomepage = () => {
    navigate("/");
  };
    const dispatch=useDispatch()
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
     const handlelogout=()=>{
      dispatch(clearall())
      logout({ returnTo: window.location.origin })
      
     }
  return (
    <Stack direction={"row"} spacing={4} margin={"auto"}>
      <img
        width={"150px"}
        src={logo}
        alt="FurnitureTry_logo"
        onClick={handleNavigationToHomepage}
      />
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label} margin={"auto"} paddingTop={"20px"}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                margin={"auto"}
                p={2}
                href={navItem.href ?? "/product"}
                fontSize={"sm"}
                fontWeight={1500}
                color={linkColor}
                _hover={{
                  color: linkHoverColor,
                }}
              >
                <Text fontSize="md" as="b">
                  {navItem.label}
                </Text>
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}

      <Box display={"flex"} alignItems="center" justifyItems="center" gap="3">
        <Box
          className="cart"
          paddingTop={"15px"}
          display={"flex"}
          onClick={handleNavigation}
          textAlign="center"
          m={"1"}
          p={"1"}
        >
          <FiShoppingCart size={"2em"} onClick={handleNavigation} />

          <Text color={"red"} as="b" m={"-15px"} paddingLeft={"15px"}>
            {number_of_item}
          </Text>
        </Box>

        <Box m={"1"} p={"1"}>
          {isAuthenticated && (
            <img
              src={user.picture}
              alt="logo"
              style={{
                backgroundColor: "white",
                borderRadius: "50%",
                width: "50%",
              }}
            />
          )}
        </Box>

        {/* {isAuthenticated && <img  width={"50px"} src={user.picture} alt="" />} */}
        {/* <Box className="user" paddingTop={"15px"} paddingLeft={"50px"}> */}
        <Box m={"1"} p={"1"}>
          {isAuthenticated ? (
            <Button
              colorScheme={"blackAlpha"}
              onClick={handlelogout}
            >
              Logout
            </Button>
          ) : (
            <Button
              colorScheme={"blackAlpha"}
              onClick={() => loginWithRedirect()}
            >
              Login
            </Button>
          )}
        </Box>
        {/* Admin Section */}
        <Box 
        // border="1px"
         className="cart"
         paddingTop={"15px"}
         
         
         onClick={handleAdmin}
         textAlign="center"
         m={"1"}
         p={"1"} >
        <FaUserAlt size={"2em"}  />
        <Heading size="xs" ml="-5px"onClick={handleAdmin} >Admin</Heading>
        </Box>
      </Box>
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"md"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "/product"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text color={useColorModeValue("gray.600", "gray.200")}>{label}</Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                <Text as="b"> {child.label}</Text>
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Furniture",
     href:"/product",
    children: [
      {
        label: "Office Furniture",
        subLabel: "Trending Design to inspire you",
        href: "/product",
      },
      {
        label: "Chairs",
        subLabel: "Up-and-coming Designers",
        href: "/product",
      },
    ],
  },

  {
    label: "Beds",
     href:"/product",
    children: [
      {
        label: "King Size Beds",
        subLabel: "Trending Design to inspire you",
        href: "/product",
      },
      {
        label: "Queen Size Beds",
        subLabel: "Up-and-coming Designers",
        href: "/product",
      },
    ],
  },

  {
    label: "Home Decor",
     href:"/product",
    children: [
      {
        label: "Wall Art",
        subLabel: "Trending Design to inspire you",
        href: "/product",
      },
      {
        label: "Vases",
        subLabel: "Up-and-coming Designers",
        href: "/product",
      },
    ],
  },
  {
    label: "Lamp & Lights",
     href:"/product",
    children: [
      {
        label: "Outdoor Lights",
        subLabel: "Trending Design to inspire you",
        href: "/product",
      },
      {
        label: "Wall Lights",
        subLabel: "Up-and-coming Designers",
        href: "/product",
      },
    ],
  },

  // {
  //   label: "Beds & Table",
  //   children: [
  //     {
  //       label: "Explore Design Work",
  //       subLabel: "Trending Design to inspire you",
  //       href: "/product",
  //     },
  //     {
  //       label: "Home Decor",
  //       subLabel: "Up-and-coming Designers",
  //       href: "/product",
  //     },
  //   ],
  // },

  {
    label: "Sofa",
     href:"/product",
    children: [
      {
        label: "3 Seater Sofas",
        subLabel: "Trending Design to inspire you",
        href: "/product",
      },
      {
        label: "2 Seater Sofas",
        subLabel: "Up-and-coming Designers",
        href: "/product",
      },
    ],
  },

  {
    label: "Wardrobe",
     href:"/product",
    children: [
      {
        label: "2 Door",
        subLabel: "Trending Design to inspire you",
        href: "/product",
      },
      {
        label: "Sliding",
        subLabel: "Up-and-coming Designers",
        href: "/product",
      },
    ],
  },

  {
    label: "Furnishing",
     href:"/product",
    children: [
      {
        label: "Essentials",
        subLabel: "Trending Design to inspire you",
        href: "/product",
      },
      {
        label: "Gift Sets",
        subLabel: "Up-and-coming Designers",
        href: "/product",
      },
    ],
  },
];
