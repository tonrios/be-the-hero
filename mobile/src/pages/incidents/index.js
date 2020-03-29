import React, { useEffect, useState } from 'react';
import { View, Image, Text, TouchableOpacity, FlatList } from 'react-native';
import logoImg from '../../assets/logo.png';
import styles from './styles';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import api from './../../services/api'

export default function Incidents() {


    const [total, setTotal] = useState([]);
    const [incidents, setIncidents] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    async function loadIncidents() {

        if (loading) {
            return;
        }

        if (total > 0 && incidents.length === total) {
            return
        }

        setLoading(true);

        try {
            const response = await api.get('incidents', {
                params: { page }
            })

            setTotal(response.headers['x-total-count'])
            setIncidents([...incidents, ...response.data])
            setPage(page + 1)
            setLoading(false);
        } catch (err) {
            console.log(err)
        }

    }

    useEffect(() => {
        loadIncidents()
    }, [])



    const navegation = useNavigation();

    function navegateToDetail(incident) {
        navegation.navigate('Detail', { incident })
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}></Image>
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>{total}</Text>
                </Text>
            </View>

            <Text style={styles.title}> Bem vindo</Text>
            <Text style={styles.description}> Escolha um dos casos abaixo e salve o dia</Text>

            <FlatList
                style={styles.icidentsList}
                data={incidents}
                keyExtractor={incident => String(incident.id)}
                showsVerticalScrollIndicator={true}
                onEndReached={loadIncidents}
                onEndReachedThreshold={0.2}
                renderItem={({ item }) => (
                    <View style={styles.icidents} >
                        <Text style={styles.icidentProperty}>ONG:</Text>
                        <Text style={styles.icidentValue}>{item.name}</Text>

                        <Text style={styles.icidentProperty}>ONGS:</Text>
                        <Text style={styles.icidentValue}>{item.title}</Text>

                        <Text style={styles.icidentProperty}>ONGS:</Text>
                        <Text style={styles.icidentValue}>{Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(item.value)}
                        </Text>

                        <TouchableOpacity
                            style={styles.detailsButton}
                            onPress={() => { navegateToDetail(item) }}>
                            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                            <Feather name="arrow-right" size={16} color="#e02041" ></Feather>
                        </TouchableOpacity>
                    </View>

                )}
            />
        </View>


    )
}


