class ApiService {
    trackingApiRoute = "https://api.aftership.com/v4";
    databaseApiRoute = "http://localhost:4000/api";
    apiKey = "asat_641ef39c5cdf4ff5babd8de1cf8c7e38";

    async CreateTracking(trackingNumber, title) {
        const response = await fetch(`${this.trackingApiRoute}/trackings`, {
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

    async signIn(email, password) {
        const response = await fetch(`${this.databaseApiRoute}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                {
                    "email": `${email}`,
                    "password": `${password}`
                })
        });
        const data = await response.json();
        return data;
    }

    async signUp(username, email, password) {
        const response = await fetch(`${this.databaseApiRoute}/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                {
                    "username": `${username}`,
                    "email": `${email}`,
                    "password": `${password}`
                })
        });
        const data = await response.json();
        return data;
    }
}

export default ApiService;