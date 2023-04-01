import ApiService from "./ApiService";

const apiService = new ApiService();

class FormService {
    async createTracking(event, cards, setCards, setNewTracking) {
        try {
            const cardsCopy = [...cards];
            const id = new Date().getTime();
            const tracking_number = event.target.elements.trackingNumber.value;
            const title = event.target.elements.titleTracking.value;
            const shop = event.target.elements.shop.value;


            const postApi = await apiService.CreateTracking(tracking_number, title);
            console.log(postApi);

            if (postApi.meta.code === 201) {
                const status_ship = postApi.data.tracking.tag;
                const cardToAdd = {
                    id,
                    tracking_number,
                    title,
                    status_ship,
                    shop
                };
                cardsCopy.push(cardToAdd);
                setCards(cardsCopy);
                setNewTracking("");
            }
        } catch (error) {
            console.error(error);
        }
    }
}

export default FormService;