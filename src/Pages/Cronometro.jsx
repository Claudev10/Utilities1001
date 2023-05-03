import React, { useState, useEffect } from 'react';
import { Flex, Heading, Text, Button, Alert, AlertIcon, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Input } from '@chakra-ui/react';
import { Link } from "react-router-dom";

function Cronometro() {
  const [segundos, setSegundos] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [horas, setHoras] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [tempoAlerta, setTempoAlerta] = useState(null);
  const [alertaVisivel, setAlertaVisivel] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [tempoDigitado, setTempoDigitado] = useState(null);

  useEffect(() => {
    let intervalId;
    if (isActive) {
      intervalId = setInterval(() => {
        if (segundos === 59) {
          if (minutos === 59) {
            setHoras(horas + 1);
            setMinutos(0);
          } else {
            setMinutos(minutos + 1);
          }
          setSegundos(0);
        } else {
          setSegundos(segundos + 1);
        }

        if (!alertaVisivel && segundos + (minutos * 60) + (horas * 3600) === tempoAlerta) {
          setAlertaVisivel(true);
          setIsActive(false);
        }
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [segundos, minutos, horas, isActive, tempoAlerta, alertaVisivel]);

  const start = () => {
    if (!alertaVisivel) {
      setIsActive(true);
    }
  };

  const pause = () => {
    if (!alertaVisivel) {
      setIsActive(false);
    }
  };

  const restart = () => {
    setSegundos(0);
    setMinutos(0);
    setHoras(0);
    setIsActive(false);
    setAlertaVisivel(false);
  };

  const configurarAlerta = () => {
    setShowModal(true);
  }

  const salvarTempoAlerta = () => {
    if (tempoDigitado !== null) {
      setTempoAlerta(parseInt(tempoDigitado -1));
      setAlertaVisivel(false);
      setShowModal(false);
    }
  }

  return (
    <>
      <Flex width="100%" justifyContent="flex-end">
      <Link to="/" >
        <Button mt={2} colorScheme="blackAlpha" mr={2} minWidth="100px">Voltar</Button>
      </Link>
      </Flex>
      <Flex direction="column" alignItems="center" width="100%">
        <Heading mt={8} mb={4}>Cronômetro</Heading>
        <Text fontSize="4xl">{horas.toString().padStart(2, '0')}:{minutos.toString().padStart(2, '0')}:{segundos.toString().padStart(2, '0')}</Text>
        <Button mt={4} colorScheme="green" onClick={start}>Iniciar</Button>
        <Button mt={4} colorScheme="yellow" onClick={pause}>Pausar</Button>
        <Button mt={4} colorScheme="red" onClick={restart}>Reiniciar</Button>
        <Button mt={4} colorScheme="blue" onClick={configurarAlerta}>Configurar Alerta</Button>
        {alertaVisivel && (
          <Alert status="warning" variant="solid" mt={4} mb={8} onClose={() => setAlertaVisivel(false)}>
            <AlertIcon />
            Tempo atingido!
          </Alert>
        )}
      </Flex>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Configurar alerta</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input placeholder="Digite o tempo em segundos para o alerta" onChange={e => setTempoDigitado(e.target.value)}/>
            <Button mt={4} mb={4} colorScheme="blue" onClick={salvarTempoAlerta}>Salvar Alerta</Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );  
}

export default Cronometro;