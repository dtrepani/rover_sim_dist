const BASE_URL = 'http://localhost:8080';

export class HttpClient {
    static async request<T>(endpoint: string, options?: RequestInit): Promise<T> {
        const response = await fetch(`${BASE_URL}${endpoint}`, options);

        if (!response.ok) {
            throw new Error(`Request failed with status: ${response.status}`);
        }

        return response.json();
    }

    static async get<T>(endpoint: string, options?: RequestInit): Promise<T> {
        return this.request<T>(endpoint, { ...options, method: 'GET' });
    }

    static async put<T>(endpoint: string, options?: RequestInit): Promise<T> {
        return this.request<T>(endpoint, { ...options, method: 'PUT' });
    }

    static async post<T>(endpoint: string, options?: RequestInit): Promise<T> {
        return this.request<T>(endpoint, { ...options, method: 'POST' });
    }

    static async delete<T>(endpoint: string, options?: RequestInit): Promise<T> {
        return this.request<T>(endpoint, { ...options, method: 'DELETE' });
    }
}