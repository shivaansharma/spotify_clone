export const CardData = async () => {
        const val = await fetch("http://localhost:8000/songs/get/songs");
        const data = await val.json();
        return data;
    }
    