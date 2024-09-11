'use client'
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Datepicker, getJson, Page, setOptions, localeKo } from '@mobiscroll/react';
import { useCallback, useState } from 'react';
import './test.module.css';

setOptions({
    locale: localeKo,
    theme: 'ios',
    themeVariant: 'light'
});

function App() {
    const [multiple, setMultiple] = useState(['2024-09-11T00:00', '2024-09-16T00:00', '2024-09-17T00:00']);
    const min = '2024-09-05T00:00';
    const max = '2025-03-05T00:00';

    const [datetimeLabels, setDatetimeLabels] = useState([]);
    const [datetimeInvalid, setDatetimeInvalid] = useState([]);



    const handlePageLoadingDatetime = useCallback((args) => {
        const d = args.firstDay;
        const invalid = [];
        const labels = [];

        getJson(
            'https://trial.mobiscroll.com/getbookingtime/?year=' + d.getFullYear() + '&month=' + d.getMonth(),
            (bookings) => {
                for (let i = 0; i < bookings.length; ++i) {
                    const booking = bookings[i];
                    const d = new Date(booking.d);

                    if (booking.nr > 0) {

                        invalid.push(...booking.invalid);
                    } else {
                        invalid.push(d);
                    }
                }
                setDatetimeLabels(labels);
                setDatetimeInvalid(invalid);
            },
            'jsonp',
        );
    }, []);



    return (
        <Page className="md-calendar-booking">
            <Datepicker
                display="inline"
                controls={['calendar', 'timegrid']}
                min={min}
                max={max}
                minTime="10:00"
                maxTime="18:59"
                stepMinute={60}
                width={'100%'}
                labels={datetimeLabels}
                invalid={datetimeInvalid}
                onPageLoading={handlePageLoadingDatetime}
                cssClass="booking-datetime"
            />

        </Page>
    );
}

export default App;