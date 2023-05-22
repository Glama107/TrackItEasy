class ApiService {
    databaseApiRoute = "https://api.trackiteasy.fr/api";

    async CreateTracking(data) {
        const response = await fetch(`${this.databaseApiRoute}/trackings`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                data
            )
        })
        const responseData = await response.json();
        console.log(responseData);
        return responseData;
    }

    async deleteTracking(id) {
        const response = await fetch(`${this.databaseApiRoute}/trackings/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                {
                    "userID": `${localStorage.getItem("userID")}`,
                })
        })
        const responseData = await response.json();
        console.log(responseData);
        return responseData;
    }

    async addReceipt(cardId, receipt) {
        let formData = new FormData();
        formData.append('receipt', receipt);

        const response = await fetch(`${this.databaseApiRoute}/trackings/receipt/${cardId}`, {
            method: "PUT",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: formData
        })
        return await response.json();
    }

    async getTrackingByUser() {
        const response = await fetch(`${this.databaseApiRoute}/trackings`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
        const data = await response.json();
        return data.filter((item) => item.isTracked === true && item.userID === localStorage.getItem("userID"));
    }

    async getTrackingByCardId(cardId) {
        const response = await fetch(`${this.databaseApiRoute}/trackings/${cardId}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
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
            localStorage.setItem("userID", data.userID);
            return true;
        }
        return false;
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
        if (response.status === 201) {
            localStorage.setItem("accessToken", data.accessToken);
            localStorage.setItem("refreshToken", data.refreshToken);
            localStorage.setItem("userID", data.userId);
            return true;
        }
        return false;
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

    async getAverageDaysOfTransit() {
        const response = await fetch(`${this.databaseApiRoute}/stats/transit`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
        const data = await response.json();
        return data.message;
    }

    async getTotalOfTrackings() {
        const response = await fetch(`${this.databaseApiRoute}/stats/totalPackages`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
        const data = await response.json();
        return data.message;
    }

    async getDaysBetweenUpdates() {
        const response = await fetch(`${this.databaseApiRoute}/stats/updates`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
        const data = await response.json();
        return data.message;
    }

    async getTotalOfUsers() {
        const response = await fetch(`${this.databaseApiRoute}/stats/users`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
        const data = await response.json();
        return data.message;
    }

    async getUserDetails() {
        const response = await fetch(`${this.databaseApiRoute}/users/${localStorage.getItem("userID")}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
        const data = await response.json();
        return data;
    }
}

export default ApiService;