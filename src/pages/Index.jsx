import { Box, Button, Container, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { FaRegSmileBeam } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={5}>
      <VStack spacing={8} align="center">
        <Heading as="h1" size="2xl" textAlign="center">
          Curso de Meditação para Ansiedade
        </Heading>
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9ufGVufDB8fHx8MTcxNDUyMDcxMHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Meditação" />
        <Text fontSize="xl" textAlign="center">
          Junte-se a nós para explorar técnicas de meditação que ajudam a combater a ansiedade e promovem o bem-estar mental.
        </Text>
        <Box p={4} borderWidth="1px" borderRadius="lg">
          <Heading as="h3" size="lg">
            O que você vai aprender?
          </Heading>
          <Text mt={4}>
            - Técnicas de respiração para acalmar a mente
            <br />
            - Meditações guiadas para reduzir o estresse
            <br />- Práticas diárias para melhorar a concentração e a clareza mental
          </Text>
        </Box>
        <Button rightIcon={<FaRegSmileBeam />} colorScheme="teal" size="lg">
          Inscreva-se agora
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
