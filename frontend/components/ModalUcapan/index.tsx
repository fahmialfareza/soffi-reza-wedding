import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Text,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  VStack,
} from "@chakra-ui/react";
import React from "react";

interface ModalUcapanProps {
  isOpen: boolean;
  onClose: () => void;
}

function ModalUcapan({ isOpen, onClose }: ModalUcapanProps) {
  return (
    <Modal
      blockScrollOnMount={false}
      isOpen={isOpen}
      onClose={onClose}
      size={"4xl"}
    >
      <ModalOverlay />
      <ModalContent padding={"1rem"} color={"grey"}>
        <ModalHeader>Kirim Ucapan dan Doa</ModalHeader>
        <ModalCloseButton />
        <ModalBody mb={"1rem"} >
          <VStack gap={"1rem"}>
            <FormControl>
              <FormLabel className="font-inter">Nama</FormLabel>
              <Input placeholder="Masukan Nama Kamu" />
            </FormControl>
            <FormControl>
              <FormLabel className="font-inter">Ucapan dan Doa</FormLabel>
              <Textarea
                className="font-inter"
                placeholder="Ucapan dan doa (Maksimal 200 Huruf Yaa )"
              />
            </FormControl>
            <FormControl className="font-inter">
              <FormLabel>Country</FormLabel>
              <Select placeholder="Pilih Kehadiran">
                <option>Hadir</option>
                <option>Tidak Hadir</option>
              </Select>
            </FormControl>
            <Button
              width={"100%"}
              size={"lg"}
              backgroundColor={"green"}
              color={"white"}
            >
              Kirim Ucapan
            </Button>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default ModalUcapan;
