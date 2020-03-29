import React from 'react';
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native';
import logoImg from '../../assets/logo.png';
import styles from './styles';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer'


const Detail = () => {

    const navigation = useNavigation();
    const route = useRoute();

    const incident = route.params.incident;


    const message = `Olá ${incident.name}, estou entrando em contato, 
    pois gostria de ajudar no caso "${incident.title}" com o valor de ${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}`
    function navigateBack() {
        navigation.goBack();
    }

    function sendMail() {
        MailComposer.composeAsync({
            subject: 'Hero do caso:' + incident.title,
            recipients: [incident.email],
            body: message

        })
    }


    function sendWhatApp() {
        Linking.openURL('whatsapp://send?phone=+55' + incident.whatsapp + '&text=' + message)
    }



    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}></Image>
                <TouchableOpacity
                    style={styles.detailsButton}
                    onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#e02041" ></Feather>
                </TouchableOpacity>
            </View>

            <View style={styles.icidents} >
                <Text style={[styles.icidentProperty, { marginTop: 0 }]}>ONG:</Text>
                <Text style={styles.icidentValue}>{incident.name} de {incident.city} /{incident.uf} </Text>

                <Text style={styles.icidentProperty}>CASO:</Text>
                <Text style={styles.icidentValue}>{incident.title}</Text>

                <Text style={styles.icidentProperty}>VALOR:</Text>
                <Text style={styles.icidentValue}>{Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(incident.value)}</Text>
            </View>


            <View style={styles.contactBox} >
                <Text style={styles.heroTitle}>Salve o dia</Text>
                <Text style={styles.heroTitle}>Seja o herói desse caso</Text>

                <Text style={styles.heroDescription}>Entre em contato</Text>

                <View style={styles.actions}>
                    <TouchableOpacity
                        style={styles.action}
                        onPress={sendWhatApp}>
                        <Text style={styles.actionText}>Whatsapp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.action}
                        onPress={sendMail}>
                        <Text style={styles.actionText}>Email</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    )
}

export default Detail;
