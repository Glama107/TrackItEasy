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
        if (response.status === 200) {
            localStorage.setItem("accessToken", data.accessToken);
            localStorage.setItem("refreshToken", data.refreshToken);
            return true;
        } else {
            return false;
        }
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
        if (response.status === 200) {
            localStorage.setItem("accessToken", data.accessToken);
            localStorage.setItem("refreshToken", data.refreshToken);
            return true;
        } else {
            return false;
        }
        return data;
    }

    async checkLogin() {
        const response = await fetch(`${this.databaseApiRoute}/auth/refresh-token`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                {"refreshToken": localStorage.getItem("refreshToken")})
        });
        const data = await response.json();
        if (response.status === 200) {
            localStorage.setItem("accessToken", data.accessToken);
            return true;
        } else {
            localStorage.removeItem("refreshToken");
            localStorage.removeItem("accessToken");
            return false;
        }
    }
}

export default ApiService;