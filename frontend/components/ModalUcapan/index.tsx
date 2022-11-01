import {
  Button,
  FormControl, FormErrorMessage, FormHelperText, FormLabel,
  Input, Modal, ModalBody, ModalCloseButton, ModalContent,
  ModalHeader, ModalOverlay, Select, Textarea, VStack
} from "@chakra-ui/react";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";
import isNullEmptyBlank from "../../helpers/isEmpty";

interface ModalUcapanProps {
  isOpen: boolean;
  onClose: () => void;
  to: string;
  onConvetti: () => void
}

function ModalUcapan({ isOpen, onClose, to, onConvetti }: ModalUcapanProps) {
  

  const [name, setName] = useState(to);
  const [message, setMessage] = useState("");
  const [attending, setAttending] = useState("");

  const isNameError = isNullEmptyBlank(name);
  const isMessageError = isNullEmptyBlank(message);
  const isAttendingError = isNullEmptyBlank(attending);

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      if (isNameError || isMessageError || isAttendingError) {
        return;
      }

      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        name: name,
        message: message,
        attending: attending === "hadir" ? true : false,
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
      };

      await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API}/api/v1/messages`,
        requestOptions
      );

      setName(to);
      setAttending("");
      setMessage("");
      onConvetti()
      toast.success("Berhasil memberikan ucapan dan doa!");
      onClose();
    } catch (error) {
      toast.error("Gagal memberikan ucapan dan doa!");
    }
  };

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
        <ModalBody mb={"1rem"}>
          <form onSubmit={onSubmit}>
            <VStack gap={"1rem"}>
              <FormControl isInvalid={isNameError} isRequired>
                <FormLabel className="font-inter">Nama</FormLabel>
                <Input
                  placeholder="Masukan Nama Kamu"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {!isNameError ? (
                  <FormHelperText>Masukan nama kamu.</FormHelperText>
                ) : (
                  <FormErrorMessage>Nama wajib diisi.</FormErrorMessage>
                )}
              </FormControl>
              <FormControl isInvalid={isMessageError} isRequired>
                <FormLabel className="font-inter">Ucapan dan Doa</FormLabel>
                <Textarea
                  className="font-inter"
                  placeholder="Ucapan dan doa (Maksimal 200 Huruf Ya ...  )"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                {!isMessageError ? (
                  <FormHelperText>Masukkan ucapan dan doa kamu.</FormHelperText>
                ) : (
                  <FormErrorMessage>
                    Ucapan dan Doa wajib diisi.
                  </FormErrorMessage>
                )}
              </FormControl>
              <FormControl
                className="font-inter"
                isInvalid={isAttendingError}
                isRequired
              >
                <FormLabel>Kehadiran</FormLabel>
                <Select
                  value={attending}
                  onChange={(e) => setAttending(e.target.value)}
                >
                  <option value="" disabled>
                    Pilih Kehadiran
                  </option>
                  <option value={"hadir"}>Hadir</option>
                  <option value={"tidakhadir"}>Tidak Hadir</option>
                </Select>
                {!isAttendingError ? (
                  <FormHelperText>Pilih kehadiran kamu.</FormHelperText>
                ) : (
                  <FormErrorMessage>Kehadiran wajib diisi.</FormErrorMessage>
                )}
              </FormControl>
              <Button
                width={"100%"}
                size={"lg"}
                backgroundColor={"green"}
                _hover={{
                  backgroundColor: "green",
                }}
                color={"white"}
                type="submit"
              >
                Kirim Ucapan
              </Button>
            </VStack>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default ModalUcapan;
