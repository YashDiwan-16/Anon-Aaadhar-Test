// import React, { useEffect, useState } from 'react';
// import NavBar from '../Home/NavBar/NavBar';
import img from "../MainPage/anonAadhar.png";
// import img2 from '../MainPage/Magnetic Card.png'
import "./mainpg.css";
// import { Link } from 'react-router-dom';
// import {
//   AnonAadhaarProof,
//   LogInWithAnonAadhaar,
//   useAnonAadhaar,
//   useProver,
// } from "@anon-aadhaar/react";
// import { AnonAadhaarCore, packGroth16Proof } from "@anon-aadhaar/core";
// import { useAccount } from "wagmi";
import NavBar2 from "./NavBar2";
// const mainpg = () => {
//   const [anonAadhaar] = useAnonAadhaar();
//   const [, latestProof] = useProver();
//   const { isConnected, address } = useAccount();
//   useEffect(() => {
//     if (anonAadhaar.status === "logged-in") {
//       console.log(anonAadhaar.status);
//     }
//   }, [anonAadhaar]);
//   let nullifierSeedString = "19566981402436238301701121519446139147227";
//   let nullifierBigInt = BigInt(nullifierSeedString);

//   const getIdentityParams = async () => {
//     let proofObj = JSON.parse(latestProof);
//     console.log(proofObj);
//     console.log(proofObj.proof.groth16Proof);
//     const PackedGroth16Proof = packGroth16Proof(proofObj.proof.groth16Proof);
//     console.log(PackedGroth16Proof);
//   };
//   return (
//     <>
//       <NavBar2 />

//       <div className="anonimg">
//         <img className="anon" src={img} alt="" />
//         <div className="login">
//           <div className="button-login">
//            {isConnected && (
//             <div>
//               <LogInWithAnonAadhaar
//               nullifierSeed={nullifierBigInt}
//               signer={address}
//             />
//             <p>{anonAadhaar?.status}</p>
//             {anonAadhaar.status === "logged-in" && (
//               <>
//               <p>✅ Proof is valid</p>
//               <p>Got your Aadhaar Identity Proof</p>
//               <button>Show proof</button>

//               </>
//             )}
//             </div>
//            )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default mainpg;

// @ts-nocheck comment
import React, { useEffect, useState } from "react";
import {
  AnonAadhaarProof,
  LogInWithAnonAadhaar,
  useAnonAadhaar,
  useProver,
} from "@anon-aadhaar/react";
import { packGroth16Proof } from "@anon-aadhaar/core";
import { useAccount } from "wagmi";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Image,
  Flex,
  Text,
  Box,
} from "@chakra-ui/react";

const AadharLogin = () => {
  const [anonAadhaar] = useAnonAadhaar();
  const [, latestProof] = useProver();
  const { isConnected, address } = useAccount();
  const [size, setSize] = useState("md");
  const {
    isOpen: isAddOpen,
    onOpen: onAddOpen,
    onClose: onAddClose,
  } = useDisclosure();

  const handleSizeClick = (newSize) => {
    setSize(newSize);
    onAddOpen();
  };

  useEffect(() => {
    if (anonAadhaar.status === "logged-in") {
      console.log(anonAadhaar.status);
      console.log(anonAadhaar.anonAadhaarProofs);
    }
  }, [anonAadhaar]);

  // let nullifierSeedString = "19566981402436238301701121519446139147227";
  // let nullifierBigInt = BigInt(nullifierSeedString);

  const getIdentityParams = async () => {
    let proofObj = JSON.parse(latestProof);
    console.log(proofObj);
    console.log(proofObj.proof.groth16Proof);
    const PackedGroth16Proof = packGroth16Proof(proofObj.proof.groth16Proof);
    console.log(PackedGroth16Proof);
  };

  return (
    <div className="aadharbody">
      <NavBar2 />
      <Box
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
        height="80vh"
        flexDir={{ base: "column", md: "row" }}
      >
        <Box textDecoration="none" _hover={{ textDecoration: "none" }}>
          <Image
            borderRadius="lg"
            src={img}
            alt="Anon Aadhaar Logo"
            objectFit="contain"
            width={{ base: 300, md: 375 }}
            // width={275}
          />
        </Box>
        <Box
          width={{ base: "100%", md: "50%" }}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDir={{ base: "column", md: "row" }}
          gap={4}
          overflow-y={"auto"}
        >
          {isConnected && (
            <Flex
              flexDir={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              {/* <LogInWithAnonAadhaar
              nullifierSeed={nullifierBigInt}
              signer={address}
            /> */}
              <LogInWithAnonAadhaar nullifierSeed={1234} />
              <Text color={"white"}>{anonAadhaar?.status}</Text>
              {anonAadhaar.status === "logged-in" && (
                <>
                  <Text mt={4} color={"white"}>
                    ✅ Proof is valid
                  </Text>
                  <Text color={"white"}>Got your Aadhaar Identity Proof</Text>

                  <Flex
                    mt={6}
                    justifyContent={"center"}
                    alignItems={"center"}
                    color={"white"}
                  >
                    <Button
                      mt="2%"
                      m={2}
                      onClick={() => handleSizeClick("xl")}
                      colorScheme="teal"
                    >
                      Show proof
                    </Button>
                    <Modal
                      isOpen={isAddOpen}
                      onClose={onAddClose}
                      width={"500px"}
                    >
                      <ModalOverlay backdropFilter="blur(4px)" />
                      <ModalContent maxW={"700px"} minW={"600px"}>
                        <ModalHeader>Anon Aadhaar Proof</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody className="proofcss">
                          {anonAadhaar?.status === "logged-in" && (
                            <AnonAadhaarProof
                              code={JSON.stringify(
                                anonAadhaar.anonAadhaarProofs,
                                null,
                                2
                              )}
                            />
                          )}
                        </ModalBody>
                      </ModalContent>
                    </Modal>

                    <Button
                      onClick={() => {
                        getIdentityParams();
                      }}
                      ml={4}
                    >
                      Get Identity Params
                    </Button>
                  </Flex>
                </>
              )}
            </Flex>
          )}
        </Box>
      </Box>
    </div>
  );
};

export default AadharLogin;
