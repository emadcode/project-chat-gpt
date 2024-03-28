const api ="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";
const inp = document.getElementById('inp');
const images = document.querySelector('.images');
const button = document.getElementById('button'); // assuming you have a button with id 'button'

const getimage = async () => {
    const methods = {
        method: "post", // corrected method name
        headers: {
            "Content-Type": "application/json", // corrected header name
            "Authorization": `Bearer ${api}` // using template literal correctly
        },
        body: JSON.stringify({
            "prompt": inp.value,
            "n": 3,
            "size": "256x256"
        })
    };

    const res = await fetch("https://api.openai.com/v1/images/generations", methods);
    const data = await res.json();
    const listimages = data.data;
    images.innerHTML = '';

    listimages.map(photo => {
        const container = document.createElement("div");
        images.append(container);
        const img = document.createElement("img");
        container.append(img);
        img.src = photo.url;
    });
};

// Adding event listener to the button
button.addEventListener('click', getimage);
