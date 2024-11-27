import React from 'react';
import semanalData from '../../../data/semanal.json';
import mensualData from '../../../data/mensual.json';
import anualData from '../../../data/anual.json';
import diarioData from '../../../data/diario.json';
import quincuncioData from '../../../data/quincuncio.json';
import { Solar } from '../../TRG/Solar';

function getWeeklyPlan(dayOfWeek) {
    return semanalData[dayOfWeek.toLowerCase()] || [];
}

function getCurrentActivity(timeSlots) {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentTime = currentHour * 100 + currentMinute; // Convert to a 4-digit number (e.g., 1500 for 15:00)

    for (const slot of timeSlots) {
        const [start, end] = slot.time.split(' - ');
        const [startHour, startMinute] = start.split(':').map(Number);
        const [endHour, endMinute] = end.split(':').map(Number);
        
        const startTime = startHour * 100 + startMinute;
        const endTime = endHour * 100 + endMinute;

        if (currentTime >= startTime && currentTime < endTime) {
            return slot.activity;
        }
    }
    return "Actividad no disponible para este horario.";
}

function Plan() {
    const currentSign = Solar(new Date());
    const dayOfWeek = new Intl.DateTimeFormat('es-ES', { weekday: 'long' }).format(new Date()).toLowerCase();
    const weeklyPlan = getWeeklyPlan(dayOfWeek);

    return (
        <div>
            <h2>Plan de Acción</h2>

            <h3>Diario</h3>
            <p>{getCurrentActivity(diarioData)}</p>

            <h3>Semanal</h3>
            <ul>
                {Array.isArray(weeklyPlan) && weeklyPlan.map((activity, index) => (
                    <li key={index}>{dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1)} - {activity}</li>
                ))}
            </ul>

            <h3>Mensual</h3>
            <p>{typeof mensualData[currentSign] === 'string' ? mensualData[currentSign] : "Plan no disponible para este signo."}</p>

            <h3>Anual</h3>
            <p>{typeof anualData["2024"] === 'string' ? anualData["2024"] : "Plan no disponible para 2024."}</p>

            <h3>Quincuncio</h3>
            <p>{typeof quincuncioData === 'string' ? quincuncioData : "Plan no disponible para quincuncio."}</p>
        </div>
    );
}

export default Plan;
