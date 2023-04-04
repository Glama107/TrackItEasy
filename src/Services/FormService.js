import ApiService from "./ApiService";

const apiService = new ApiService();

class FormService {
    async createTracking(event, setCardsUpdated) {
        try {
            const tracking_number = event.target.elements.trackingNumber.value;
            const alias = event.target.elements.titleTracking.value;
            const shop = event.target.elements.shop.value;
            const articles = event.target.elements.articles.value;


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
}

export default FormService;