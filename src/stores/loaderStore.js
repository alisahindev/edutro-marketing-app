import { action, observable } from 'mobx';

class LoaderStore {
    @observable isLoading = false;

    @action
    setLoader() {
        this.isLoading = !this.isLoading;
    }
}

export default LoaderStore;