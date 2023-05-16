import React, {useEffect, useState} from 'react';
import '../style/stats-card-list.css'
import StatsCard from "../Cards/StatsCard";
import ApiService from "../../Services/ApiService";


const apiService = new ApiService();


function StatsCardsList() {
    //States
    const [stats, setStats] = useState(
        [
            {
                'id': 1,
                'image': 'transit',
                'stat': 'stat',
                'description': 'Nombre moyen de jour en transit'
            },
            {
                'id': 2,
                'image': 'parcels',
                'stat': 'stat',
                'description': 'Nombre de colis en suivi sur TrackItEasy'

            },
            {
                'id': 3,
                'image': 'steps',
                'stat': 'stat',
                'description': 'Nombre moyen de jour entre chaque étape'

            },
            {
                'id': 4,
                'image': 'users',
                'stat': 'stat',
                'description': 'Nombre total d\'utilisateurs'

            }
        ])


    // Comportements

    useEffect(() => {
        async function fetchData() {
            const daysOfTransit = await apiService.getAverageDaysOfTransit();
            const totalOfTrackings = await apiService.getTotalOfTrackings();
            const daysBetweenUpdates = await apiService.getDaysBetweenUpdates();
            const totalUser = await apiService.getTotalOfUsers();

            // Sort the data array by createdAt in descending order

            setStats(stats.map(stat => {
                if (stat.id === 1) {
                    return {...stat, stat: daysOfTransit}
                } else if (stat.id === 2) {
                    return {...stat, stat: totalOfTrackings}
                } else if (stat.id === 3) {
                    return {...stat, stat: daysBetweenUpdates}
                } else if (stat.id === 4) {
                    return {...stat, stat: totalUser}
                }
                return stat
            }))
        }

        console.log(stats)

        fetchData();
    }, []);


    //Filtre les cartes en fonction du filtre sélectionné


    //Rendu
    return (
        <div>
            <div className="stats-container">
                {stats.map((stat) => (
                    <StatsCard key={stat._id} stat={stat}/>
                ))}
            </div>
        </div>
    );
}

export default StatsCardsList;