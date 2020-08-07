import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import giveClassesBackgroundImage from '../../assets/images/give-classes-background.png';

import Landing from '../../pages/Lading';

import styles from './styles';

function GiveClasses() {
    const { navigate } = useNavigation();

    function HandleNavigateToLandingPage() {
        navigate('Landing');
    }

    return (
        <View style={styles.container}>
            <ImageBackground 
                resizeMode='contain' 
                source={giveClassesBackgroundImage} 
                style={styles.content}
            >
                <Text style={styles.title}>Quer ser um Proffy?</Text>
                <Text style={styles.description}>
                    Para começar, você precisa se cadastar como professor na nossa plataforma web.
                </Text>
            </ImageBackground>

            <RectButton onPress={HandleNavigateToLandingPage} style={styles.okButton}>
                <Text style={styles.okButtonText}>
                    Tudo Bem!
                </Text>
            </RectButton>
        </View>
    );
}

export default GiveClasses;