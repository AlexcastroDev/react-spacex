import api from "../services/api"

interface ILauches {
    flight_id: string,
    flight_number: number
    launch_year: number
    rocket_name: string
    launch_success: boolean
}

export const useSpacexApi = () => ({
    getLaunches: () => {
        return api.get('/launches')
            .then(({ data }) => data)
            .catch(e => ({
                data: {
                    error: e
                }
            }));
    },
    getLauch: (flightNumber: number) => {
        return api.get(`/launches/${flightNumber}`)
            .then(({ data }) => data)
            .catch(e => ({
                data: {
                    error: e
                }
            }));
    },
    getPastLauch: () => {
        return api.get(`/launches/past`)
            .then(({ data }) => data)
            .catch(e => ({
                data: {
                    error: e
                }
            }));
    },
    getUpcomingLauch: () => {
        return api.get(`/launches/upcoming`)
            .then(({ data }) => data)
            .catch(e => ({
                data: {
                    error: e
                }
            }));
    },
})