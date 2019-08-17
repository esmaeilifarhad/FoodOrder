import ServiceBase from './service-base';

export default class ListServices extends ServiceBase {
    public constructor() {
        super();
    }


    public async getFood(): Promise<any[]> {
        debugger;

        if (process.env.NODE_ENV === 'production') {
            const response: any = await this.post('_LAYOUTS/15/FoodOrder/FoodOrderPage.aspx/GetFoodActual', JSON.parse(JSON.stringify({ "myLinkDB": "PersonnelGSystem", "date": '980503', 'pId': '997' })));


            return Promise.resolve(response);
        }
        return Promise.resolve([]);
    }
}