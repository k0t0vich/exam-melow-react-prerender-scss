import { observable, computed } from "mobx";

class Store {
    @observable startWaterPercent = 0.99;
    @observable startWeight = 100;   
    @observable currentWaterPercent = 0.7;

    @computed get currentWeight() {
       /*  
        var startCrustPercent = 1 - this.startWaterPercent;
        var crustWeight = this.startWeight * startCrustPercent;
        var result = crustWeight  / (1 - this.currentWaterPercent);
        return result; 
        */
        return this.startWeight * (1 - this.startWaterPercent) / (1 - this.currentWaterPercent);
    }

    @computed get innerRadius(){
        return Math.cbrt(0.00024 * this.currentWeight * this.currentWaterPercent);
    }

    @computed get outerRadius(){
        // V = 4/3 * PI * R^3
        // M = PV, P считаем равной 1000 кг/m3 -> V = M/1000 = 4/3 * PI * R^3
        // R = sqrt3(M/(4/3 * PI * 1000))
        return Math.cbrt(0.00024 * this.currentWeight);
    }
}
//Singleton
export default new Store();
