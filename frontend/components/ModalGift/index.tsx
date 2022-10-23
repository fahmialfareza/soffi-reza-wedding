import {
  Center, Image, Modal, ModalBody, ModalCloseButton, ModalContent,
  ModalHeader, ModalOverlay, Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs, Text, VStack
} from "@chakra-ui/react";
import BsiModalContent from "../BsiContent";
import GopayContent from "../GopayContent";
import { GiftBox } from "../icons/GiftBox";
import ShoopepayContent from "../ShoopepayContent";

interface ModalGiftProps {
  isOpen: boolean;
  onClose: () => void;
}

function ModalGift({ isOpen, onClose }: ModalGiftProps) {
  return (
    <Modal
      blockScrollOnMount={false}
      isOpen={isOpen}
      onClose={onClose}
      size={"3xl"}
    >
      <ModalOverlay />
      <ModalContent padding={"1rem"} color={"grey"} className={"font-inter"}>
        <ModalHeader>
          <Center>
            <VStack>
              <GiftBox boxSize={"5rem"} />
              <Text>Kirim Hadiah Terbaikmu</Text>
            </VStack>
          </Center>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody mb={"1rem"}>
          <Center>
            <Tabs variant="unstyled" size="lg">
              <TabList>
                <Tab
                  _selected={{ border: "2px solid #99A1AA" }}
                  width={{
                    base: "100px",
                    md: "126px",
                  }}
                  border={"1px solid #DFE1E8"}
                  mx={{
                    base: "0.5rem",
                    md:"1rem"
                  }}
                  borderRadius={"8px"}
                >
                  <Image src={"/assets/bsi-icon.png"} alt={"bsi"} />
                </Tab>
                <Tab
                  _selected={{ border: "2px solid #99A1AA" }}
                  width={{
                    base: "100px",
                    md: "126px",
                  }}
                  border={"1px solid #DFE1E8"}
                    mx={{
                    base: "0.5rem",
                    md:"1rem"
                  }}
                  borderRadius={"8px"}
                >
                  {" "}
                  <Image src={"/assets/gopay-icon.png"} alt={"bsi"} />
                </Tab>
                <Tab
                  _selected={{ border: "2px solid #99A1AA" }}
                  width={{
                    base: "100px",
                    md: "126px",
                  }}
                  border={"1px solid #DFE1E8"}
                    mx={{
                    base: "0.5rem",
                    md:"1rem"
                  }}
                  borderRadius={"8px"}
                >
                  {" "}
                  <Image src={"/assets/shoopepay-icon.png"} alt={"bsi"} />
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <BsiModalContent />
                </TabPanel>
                <TabPanel>
                  <GopayContent />
                </TabPanel>
                <TabPanel>
                  <ShoopepayContent />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Center>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default ModalGift;
