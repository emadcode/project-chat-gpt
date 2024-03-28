const api = "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";
const inp = document.getElementById('inp');
const images = document.querySelector('.images');
const button = document.getElementById('button');

const getimage = async () => {
    const methods = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${api}`
        },
        body: JSON.stringify({
            "prompt": inp.value,
            "n": 3,
            "size": "256x256"
        })
    };

    try {
        const res = await fetch("https://api.openai.com/v1/images/generations", methods);
        const data = await res.json();
        const listimages = data.data;
        images.innerHTML = '';

        listimages.forEach(photo => {
            const container = document.createElement("div");
            images.appendChild(container);
            const img = document.createElement("img");
            img.src = photo.url;
            container.appendChild(img);
        });
    } catch (error) {
        console.error("Error fetching images:", error);
    }
};

button.addEventListener('click', getimage);
