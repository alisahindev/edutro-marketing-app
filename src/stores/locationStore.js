import { action, observable } from 'mobx';
import locationService from '../services/locationService';

class LocationStore {
    @observable locations = [];

    @action
    async getAllLocations() {
        let result = await locationService.getAllLocations();
        this.locations = result.data;
    }
}

export default LocationStore;