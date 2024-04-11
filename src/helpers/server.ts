import process from "process";

export async function getDataFromAPI<T>(
    endpoint: string,
): Promise<T> {
    try {
        const headers = {};
        const result = await fetch(`http://o-complex.com:1337${endpoint}`, {
            headers,
            credentials: "include",
        });
        if (result.status === 200) return await result.json();
    } catch (e) {
        console.log(e.message);
    }
}
