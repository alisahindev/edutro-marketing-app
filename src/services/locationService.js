import http from "./httpService";

class LocationService {
    async getAllLocations() {
        let result = await http.get('api/location/get-all-locations');
        return result;
    }
}

export default new LocationService();