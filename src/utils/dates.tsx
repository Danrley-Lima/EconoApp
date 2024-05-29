import {includeOurInNumberToString} from './number'

export function dateToBRFormart(date: Date) {

    var weekday = weekdayBR[date.getDay()].substring(0, 3).toUpperCase();

    var day = includeOurInNumberToString(date.getDate());

    var month =  monthBR[date.getMonth()].substring(0,3);

    return `${weekday} ${day} ${month} ${date.getFullYear()}`;
}

const weekdayBR = [
    'Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'
];

const monthBR = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];