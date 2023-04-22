import dayjs from 'dayjs';

export default function formatDate(){
    return dayjs().format("DD/MM");
}