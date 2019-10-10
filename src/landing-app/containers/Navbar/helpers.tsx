import moment from "moment";

export const MakeUrlReservation = (values) => {
    const { name, cellphone, email = '', date } = values;
    const CloudUrl = `https://us-central1-mediplus-1838c.cloudfunctions.net/sendMail?dest=rober97to@gmail.com&date=${moment(date).format('LL')}&cellphone=${cellphone}&name=${name}&email=${email}`;
    return CloudUrl;
}

// https://us-central1-mediplus-1838c.cloudfunctions.net/sendMail?dest=lozarnez@gmail.com &date=19/05/12&cellphone=6721096051&name=Luis Roberto Hernandez Robles&email=lu97is@gmail.com
