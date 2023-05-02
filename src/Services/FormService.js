import ApiService from "./ApiService";

const apiService = new ApiService();

class FormService {
    async createTracking(event, setCardsUpdated) {
        try {
            const tracking_number = event.target.elements.trackingNumber.value;
            let alias = event.target.elements.titleTracking.value;
            const shop = event.target.elements.shop.value;
            const articles = event.target.elements.articles.value;

            if (alias === "") {
                alias = tracking_number;
            }


            const postApi = await apiService.CreateTracking({
                "trackingNumber": `${tracking_number}`,
                "userID": `${localStorage.getItem("userID")}`,
                "alias": `${alias}`,
                "shop": `${shop}`,
                "articles": `${articles}`,
            });
            //TODO: Call the API to refresh the cards
            setCardsUpdated(true);


        } catch (error) {
            console.error(error);
        }
    }

    async addReceipt(cardId, receipt) {
        try {
            await apiService.addReceipt(cardId, receipt);
        } catch (error) {
            console.error(error);
        }
    }
}

export default FormService;