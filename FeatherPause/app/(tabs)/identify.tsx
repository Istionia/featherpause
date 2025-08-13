import React from 'react';
import {
  Box,
  VStack,
  HStack,
  Text,
  Button,
  ButtonText,
  Heading,
  SafeAreaView,
} from '@gluestack-ui/themed';

export default function IdentifyScreen() {
  return (
    <SafeAreaView flex={1} bg="$backgroundLight50">
      <Box flex={1} px="$5">
        {/* Header */}
        <Box pt="$8" pb="$5">
          <Heading size="2xl" color="$primary600">
          Identify
          </Heading>
        </Box>
        
        {/* Content */}
        <VStack flex={1} justifyContent="center" alignItems="center" space="xl">
          <Text 
            size="lg" 
            textAlign="center" 
            color="$textLight700"
            maxWidth="$80"
          >
            Use the camera or microphone to identify birds in your area.
        </Text>
        
          <VStack space="md" width="$full">
            <Button
              size="lg"
              bg="$primary500"
              borderRadius="$xl"
              shadowColor="$primary200"
              shadowOffset={{ width: 0, height: 2 }}
              shadowOpacity={0.25}
              shadowRadius={4}
              elevation={5}
              onPress={() => {
                console.log('Take Photo pressed');
              }}
            >
              <HStack space="sm" alignItems="center">
                <Text color="white" fontSize="$md">📸</Text>
                <ButtonText color="white" fontSize="$lg" fontWeight="$semibold">
                  Take Photo
                </ButtonText>
              </HStack>
            </Button>
            
            <Button
              size="lg"
              bg="$secondary500"
              borderRadius="$xl"
              shadowColor="$secondary200"
              shadowOffset={{ width: 0, height: 2 }}
              shadowOpacity={0.25}
              shadowRadius={4}
              elevation={5}
              onPress={() => {
                console.log('Record Audio pressed');
              }}
            >
              <HStack space="sm" alignItems="center">
                <Text color="white" fontSize="$md">🎤</Text>
                <ButtonText color="white" fontSize="$lg" fontWeight="$semibold">
                  Record Audio
                </ButtonText>
              </HStack>
            </Button>
          </VStack>
          
          {/* Info Card */}
          <Box
            bg="$accent100"
            p="$4"
            borderRadius="$lg"
            borderWidth={1}
            borderColor="$accent200"
            width="$full"
            mt="$6"
          >
            <Text 
              size="sm" 
              color="$accent800"
              textAlign="center"
              fontStyle="italic"
            >
              💡 Tip: For best results, capture birds in good lighting and minimize background noise when recording.
            </Text>
          </Box>
        </VStack>
      </Box>
    </SafeAreaView>
  );
} 