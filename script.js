function read(id) {
    return document.getElementById(id).value;
}

async function Translate() {
    try {
        const input = read("input-text");
        const input_lang = read("inp_lang");
        const out_lang = read("out_lang");

        const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(input)}&langpair=${input_lang}|${out_lang}`;

        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        const translatedText = data.responseData.translatedText;
        document.getElementById("output_value").innerText = translatedText || "Translation error, please try again.";
    } catch (err) {
        console.error("Error:", err);
        document.getElementById("output_value").innerText = "Failed to translate, please try again.";
    }
}
