class ApiService {
    defaultApiRoute = "https://api.aftership.com/v4";
    apiKey = "asat_641ef39c5cdf4ff5babd8de1cf8c7e38";

    async CreateTracking(trackingNumber, title) {
        const response = await fetch(`${this.defaultApiRoute}/trackings`, {
            method: "POST",
            headers: {
                "as-api-key": this.apiKey,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "tracking": {
                    "tracking_number": `${trackingNumber}`,
                    "title": `${title}`
                }
            })
        });
        const data = await response.json();
        return data;
    }
}

export default ApiService;