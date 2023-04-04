class ApiService {
    databaseApiRoute = "http://localhost:4000/api";

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
            }
        })
        const responseData = await response.json();
        console.log(responseData);
        return responseData;
    }

    async getTrackingByUser() {
        const response = await fetch(`${this.databaseApiRoute}/trackings`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
        const data = await response.json();
        return data;
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
        if (response.status === 201) {
            localStorage.setItem("accessToken", data.accessToken);
            localStorage.setItem("refreshToken", data.refreshToken);
            localStorage.setItem("userID", data.userID);
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